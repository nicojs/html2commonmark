import Util from './Util';
import * as commonmark from 'commonmark';

enum Escaping {
    LITERAL,
    NORMAL,
    TITLE,
    URL
}

export default class MarkdownRenderer {

    private options: Ast2MarkdownOptions;

    constructor(options?: Ast2MarkdownOptions) { 
        this.options = Util.assign({ preserveHardbreaks: true, preserveSoftbreaks: true }, options);
    }

    private buffer: string;
    private prefix = '';
    private neededNewLines = 0;
    private isBeginLine: boolean;
    private isNoWrap: boolean;
    private inTightListItem: boolean;
    
    private lastChar() { 
        return this.buffer.charAt(this.buffer.length - 1); 
    }

    private truncatePrefix(length: number) {
        this.prefix = this.prefix.substr(0, this.prefix.length - length);
    }

    private blankline() {
        if (this.neededNewLines < 2) {
            this.neededNewLines = 2;
        }
    }

    private newLine() {
        if (this.neededNewLines < 1) {
            this.neededNewLines = 1;
        }
    }

    private literal(s: string) {
        this.out(s, false, Escaping.LITERAL);
    }


    private outputCharacter(escape: Escaping, c: string, nextC: string) {
        let needsEscaping = false;
        let encoded: string;

        needsEscaping = escape != Escaping.LITERAL &&
            ((escape == Escaping.NORMAL &&
                (c == '*' || c == '_' || c == '[' || c == ']' || c == '#' || c == '<' ||
                    c == '>' || c == '\\' || c == '`' || c == '!' ||
                    (c == '&' && Util.isAlpha(nextC)) || (c == '!' && nextC == '[') ||
                    (this.isBeginLine && (c == '-' || c == '+' || c == '=')) ||
                    ((c == '.' || c == ')') &&
                        Util.isDigit(this.lastChar())))) ||
                (escape == Escaping.URL && (c == '`' || c == '<' || c == '>' || Util.isSpace(c) ||
                    c == '\\' || c == ')' || c == '(')) ||
                (escape == Escaping.TITLE &&
                    (c == '`' || c == '<' || c == '>' || c == '"' || c == '\\')));

        if (needsEscaping) {
            if (Util.isSpace(c)) {
                // use percent encoding for spaces
                this.buffer += '%20';
            } else {
                this.buffer += '\\';
                this.buffer += c;
            }
        } else {
            this.buffer += c;
        }
    }

    private out(source: string, wrap: boolean, escape: Escaping) {
        let nextc: string;
        let c: string;
        let i = 0;
        let len: number;
        let remainder = "";
        let k = this.buffer.length - 1;

        wrap = wrap && !this.isNoWrap;
        if (this.inTightListItem && this.neededNewLines > 1) {
            this.neededNewLines = 1;
        }

        while (this.neededNewLines) {
            if (k < 0 || this.buffer[k] == '\n') {
                k -= 1;
            } else {
                this.buffer += '\n';
                if (this.neededNewLines > 1) {
                    this.buffer += this.prefix;
                }
            }
            this.isBeginLine = true;
            this.neededNewLines -= 1;
        }

        while (i < source.length) {
            if (this.isBeginLine) {
                this.buffer += this.prefix;
            }

            c = source[i];
            nextc = source[i + 1];
            if (c === ' ' && wrap) {
                if (!this.isBeginLine) {
                    this.buffer += ' ';
                    this.isBeginLine = false;
                    // skip following spaces
                    while (source[i + 1] == ' ') {
                        i++;
                    }
                }

            } else if (c === '\n') {
                this.buffer += '\n';
                this.isBeginLine = true;
            } else if (escape === Escaping.LITERAL) {
                this.buffer += c;
                this.isBeginLine = false;
            } else {
                this.outputCharacter(escape, c, nextc);
                this.isBeginLine = false;
            }
            i++;
        }
    }

    private shorterstUnusedBacktickSequence(code: string): number {
        let used = 1;
        let current = 0;
        let i = 0;

        while (i <= code.length) {
            if (code[i] == '`') {
                current++;
            } else {
                if (current) {
                    used |= (1 << current);
                }
                current = 0;
            }
            i++;
        }
        // return number of first bit that is 0:
        i = 0;
        while (used & 1) {
            used = used >> 1;
            i++;
        }
        return i;
    }

    private longestBacktickSequence(code: string): number {
        let longest = 0;
        let current = 0;
        let i = 0;
        let code_len = code.length;
        while (i <= code_len) {
            if (code[i] == '`') {
                current++;
            } else {
                if (current > longest) {
                    longest = current;
                }
                current = 0;
            }
            i++;
        }
        return longest;
    }

    private isContainer(node: commonmark.Node) {
        return ['Document', 'BlockQuote', 'List', 'Item', 'CodeBlock', 'HtmlBlock', 'Paragraph', 'Header', 'HorizontalRule'].indexOf(node.type) >= 0;
    }

    private getContainingBlock(node: commonmark.Node) {
        while (node && !this.isContainer(node)) {
            node = node.parent;
        }
        return node;
    }

    private isTightList(node: commonmark.Node) {
        if (node && node.type === 'List') {
            return node.listTight;
        } else {
            return false;
        }
    }


    private consolidateTextNodes(root: commonmark.Node): string | boolean {
        let text = '';
        let walker = root.walker();
        let current: commonmark.NodeWalkingStep;
        walker.next();
        while ((current = walker.next()) && current.node !== root) {
            if (current.entering) {
                let currentNode = current.node;
                if (currentNode.type === 'Text' && currentNode.next && currentNode.next.type === 'Text') {
                    text += currentNode.literal;
                } else {
                    return false;
                }
            }
        }
        return text;
    }

    private isAutolink(node: commonmark.Node): boolean {
        let title: string, url: string, linkText: commonmark.Node, realUrl: string;

        url = node.destination;
        if (url.length === 0 || url.indexOf(':') > -1) {
            return false;
        }

        title = node.title;
        // if it has a title, we can't treat it as an autolink:
        if (title.length > 0) {
            return false;
        }

        linkText = node.firstChild;
        let text = this.consolidateTextNodes(linkText);
        if (text !== false) {
            realUrl = url;
            if (realUrl.substr(0, 7) === 'mailto:') {
                realUrl += 7;
            }
            return realUrl === text;
        } else {
            return false;
        }
    }

    private renderNode(node: commonmark.Node, entering: boolean) {
        //HACK
        if (!node._listData) {
            node._listData = {};
        }
        // /HACK

        // Don't adjust tight list status til we've started the list.
        // Otherwise we loose the blank line between a paragraph and
        // a following list.
        if (!(node.listType === 'Item' && !node.prev && entering)) {
            let tmp = this.getContainingBlock(node);
            this.inTightListItem =
                (tmp.type === 'Item' &&
                    this.isTightList(tmp.parent)) ||
                (tmp && tmp.parent && tmp.parent.type === 'Item' &&
                    this.isTightList(tmp.parent.parent));
        }

        switch (node.type) {
            case 'Document':
                break;

            case 'BlockQuote':
                if (entering) {
                    this.literal("> ");
                    this.prefix += "> ";
                } else {
                    this.prefix = this.prefix.substr(0, this.prefix.length - 2);
                    this.blankline();
                }
                break;

            case 'List':
                if (!entering && node.next && (node.next.type == 'CodeBlock' ||
                    node.next.type == 'List')) {
                    // this ensures 2 blank lines after list,
                    // if before code block or list:
                    this.literal("\n");
                }
                break;

            case 'Item':
                let markerWidth, listMarker;
                if (node.parent.listType === 'Bullet') {
                    markerWidth = 2;
                } else {
                    let listNumber = node.parent.listStart || 1;
                    let listDelimiter = node.parent.listDelimiter;
                    let tmp = node;
                    while (tmp.prev) {
                        tmp = tmp.prev;
                        listNumber += 1;
                    }
                    // we ensure a width of at least 4 so
                    // we get nice transition from single digits
                    // to double
                    listMarker = listNumber + listDelimiter;
                    if (listNumber < 10) {
                        listMarker += '  ';
                    } else {
                        listMarker += ' ';
                    }
                    markerWidth = listMarker.length;
                }
                if (entering) {
                    if (node.parent.listType === 'Bullet') {
                        this.literal("* ");
                        this.prefix += "  ";
                    } else {
                        this.literal(listMarker);
                        for (let i = markerWidth; i > 0; i--) {
                            this.prefix += ' ';
                        }
                    }
                } else {
                    this.truncatePrefix(markerWidth);
                    this.newLine();
                }
                break;

            case 'Header':
                if (entering) {
                    for (let i = node.level; i > 0; i--) {
                        this.literal("#");
                    }
                    this.literal(" ");
                    this.isNoWrap = true;
                } else {
                    this.isNoWrap = false;
                    this.blankline();
                }
                break;

            case 'CodeBlock':
                this.blankline();
                let info = node.info || '';
                let code = node.literal;

                // use indented form if no info, and code doesn't
                // begin or end with a blank line, and code isn't
                // first thing in a list item
                if (!info.length &&
                    (code.length > 2 && !Util.isSpace(code[0])) &&
                    !(Util.isSpace(code[code.length - 1]) && Util.isSpace(code[code.length - 2])) &&
                    !(!node.prev && node.parent && node.parent.type == 'Item')) {
                    this.literal("    ");
                    this.prefix += "    ";
                    this.out(code, false, Escaping.LITERAL);
                    this.truncatePrefix(4);
                } else {
                    let numticks = this.longestBacktickSequence(code) + 1;
                    if (numticks < 3) {
                        numticks = 3;
                    }
                    for (let i = 0; i < numticks; i++) {
                        this.literal("`");
                    }
                    this.literal(" ");
                    this.out(info, false, Escaping.LITERAL);
                    this.newLine();
                    this.literal(node.literal);
                    this.newLine();
                    for (let i = 0; i < numticks; i++) {
                        this.literal("`");
                    }
                }
                this.blankline();
                break;

            case 'HtmlBlock':
                this.blankline();
                this.out(node.literal, false, Escaping.LITERAL);
                this.blankline();
                break;

            case 'HorizontalRule':
                this.blankline();
                this.literal("-----");
                this.blankline();
                break;

            case 'Paragraph':
                if (!entering) {
                    this.blankline();
                }
                break;
            case 'Text':
                this.out(node.literal, false, Escaping.NORMAL);
                break;

            case 'Hardbreak':
                if (this.options.preserveHardbreaks) {
                    this.literal("\\");
                }
                this.newLine();
                break;

            case 'Softbreak':
                if (this.options.preserveSoftbreaks) {
                    this.newLine();
                } else {
                    this.out(" ", true, Escaping.LITERAL);
                }
                break;

            case 'Code':
                code = node.literal;
                let numticks = this.shorterstUnusedBacktickSequence(code);
                for (let i = 0; i < numticks; i++) {
                    this.literal("`");
                }
                if (code.length == 0 || code[0] == '`') {
                    this.literal(" ");
                }
                this.out(code, true, Escaping.LITERAL);
                if (code.length == 0 || code[code.length - 1] == '`') {
                    this.literal(" ");
                }
                for (let i = 0; i < numticks; i++) {
                    this.literal("`");
                }
                break;

            case 'Html':
                this.out(node.literal, false, Escaping.LITERAL);
                break;

            case 'Strong':
                if (entering) {
                    this.literal("**");
                } else {
                    this.literal("**");
                }
                break;

            case 'Emph':
                // If we have EMPH(EMPH(x)), we need to use *_x_*
                // because **x** is STRONG(x):
                let emphesisDelimiter;
                if (node.parent && node.parent.type == 'Emph' &&
                    !node.next && !node.prev) {
                    emphesisDelimiter = "_";
                } else {
                    emphesisDelimiter = "*";
                }
                if (entering) {
                    this.literal(emphesisDelimiter);
                } else {
                    this.literal(emphesisDelimiter);
                }
                break;

            case 'Link':
                if (this.isAutolink(node)) {
                    if (entering) {
                        this.literal("<");
                        if (node.destination.substr(0, 7) === 'mailto:') {
                            this.literal(node.destination.substr(7));
                        } else {
                            this.literal(node.destination);
                        }
                        this.literal(">");
                        // return signal to skip contents of node...
                        return false;
                    }
                } else {
                    if (entering) {
                        this.literal("[");
                    } else {
                        this.literal("](");
                        this.out(node.destination, false, Escaping.URL);
                        let title = node.title || '';
                        if (title.length > 0) {
                            this.literal(" \"");
                            this.out(title, false, Escaping.TITLE);
                            this.literal("\"");
                        }
                        this.literal(")");
                    }
                }
                break;

            case 'Image':
                if (entering) {
                    this.literal("![");
                } else {
                    this.literal("](");
                    this.out(node.destination, false, Escaping.URL);
                    let title = node.title || '';
                    if (title.length > 0) {
                        this.out(" \"", true, Escaping.LITERAL);
                        this.out(title, false, Escaping.TITLE);
                        this.literal("\"");
                    }
                    this.literal(")");
                }
                break;
        }

        return true;
    }

    public render(root: commonmark.Node) {
        this.buffer = '';
        let current: commonmark.Node;
        let walker = root.walker();
        let step: commonmark.NodeWalkingStep;
        while (step = walker.next()) {
            current = step.node;
            if (!this.renderNode(current, step.entering)) {
                // a false value causes us to skip processing
                // the node's contents.  this is used for
                // autolinks.
                walker.resumeAt(current, false);
            }

        }
        // ensure final newline
        if (this.lastChar() != '\n') {
            this.buffer += '\n';
        }

        return this.buffer;
    }
}
