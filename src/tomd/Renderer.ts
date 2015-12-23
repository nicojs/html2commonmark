import Escaping = require('./Escaping');
import ListType = require('./ListType');
import Utf8 = require('./Utf8');
import CommonmarkEvent = require('./CommonmarkEvent');

class Renderer {

    constructor(private options: Html2MarkdownConversionOptions) { }

    buffer: string;
    prefix = '';
    column: number;
    width: number;
    need_cr = 0;
    last_breakable: number;
    isBeginLine: boolean;
    isNoWrap: boolean;
    inTightListItem: boolean;
    lastChar() { return this.buffer.charAt(this.buffer.length - 1); }
    renderCodePoint(c: string) {
        this.buffer += c;
        this.column++;
    }

    truncatePrefix(length: number) {
        this.prefix = this.prefix.substr(0, this.prefix.length - length);
    }

    blankline() {
        if (this.need_cr < 2) {
            this.need_cr = 2;
        }
    }

    cr() {
        if (this.need_cr < 1) {
            this.need_cr = 1;
        }
    }

    public outc(escape: Escaping, c: string, nextC: string) {
        let needsEscaping = false;
        let encoded: string;

        needsEscaping = escape != Escaping.LITERAL &&
            ((escape == Escaping.NORMAL &&
                (c == '*' || c == '_' || c == '[' || c == ']' || c == '#' || c == '<' ||
                    c == '>' || c == '\\' || c == '`' || c == '!' ||
                    (c == '&' && Utf8.isalpha(nextC)) || (c == '!' && nextC == '[') ||
                    (this.isBeginLine && (c == '-' || c == '+' || c == '=')) ||
                    ((c == '.' || c == ')') &&
                        Utf8.isdigit(this.lastChar())))) ||
                (escape == Escaping.URL && (c == '`' || c == '<' || c == '>' || Utf8.isspace(c) ||
                    c == '\\' || c == ')' || c == '(')) ||
                (escape == Escaping.TITLE &&
                    (c == '`' || c == '<' || c == '>' || c == '"' || c == '\\')));

        if (needsEscaping) {
            if (Utf8.isspace(c)) {
                // use percent encoding for spaces
                this.buffer += '%20';
                this.column += 3;
            } else {
                this.buffer += '\\';
                this.buffer += c;
            }
        } else {
            this.buffer += c;
        }
    }

    out(source: string, wrap: boolean, escape: Escaping) {
        let nextc: string;
        let c: string;
        let i = 0;
        let len: number;
        let remainder = "";
        let k = this.buffer.length - 1;

        wrap = wrap && !this.isNoWrap;
        if (this.inTightListItem && this.need_cr > 1) {
            this.need_cr = 1;
        }

        while (this.need_cr) {
            if (k < 0 || this.buffer[k] == '\n') {
                k -= 1;
            } else {
                this.buffer += '\n';
                if (this.need_cr > 1) {
                    this.buffer += this.prefix;
                }
            }
            this.column = 0;
            this.isBeginLine = true;
            this.need_cr -= 1;
        }

        while (i < source.length) {
            if (this.isBeginLine) {
                this.buffer += this.prefix;
                this.column = this.prefix.length;
            }

            c = source[i];
            nextc = source[i + 1];
            if (c === ' ' && wrap) {
                if (!this.isBeginLine) {
                    this.buffer += ' ';
                    this.column += 1;
                    this.isBeginLine = false;
                    this.last_breakable = this.buffer.length - 1;
                    // skip following spaces
                    while (source[i + 1] == ' ') {
                        i++;
                    }
                }

            } else if (c === '\n') {
                this.buffer += '\n';
                this.column = 0;
                this.isBeginLine = true;
                this.last_breakable = 0;
            } else if (escape === Escaping.LITERAL) {
                this.renderCodePoint(c);
                this.isBeginLine = false;
            } else {
                this.outc(escape, c, nextc);
                this.isBeginLine = false;
            }

            // If adding the character went beyond width, look for an
            // earlier place where the line could be broken:
            if (this.width > 0 && this.column > this.width &&
                !this.isBeginLine && this.last_breakable > 0) {

                // copy from last_breakable to remainder
                let remainder = this.buffer.substr(this.last_breakable + 1);

                // truncate at last_breakable
                this.buffer = this.buffer.substr(0, this.last_breakable);

                // add newline, prefix, and remainder
                this.buffer += '\n' + this.prefix + remainder;
                this.column = this.prefix.length + remainder.length;
                this.last_breakable = 0;
                this.isBeginLine = false;
            }
            i++;
        }
    }




    shortest_unused_backtick_sequence(code: string): number {
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

    public longest_backtick_sequence(code: string): number {
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

    isContainer(node: commonmark.Node) {
        return ['Document', 'BlockQuote', 'List', 'Item', 'CodeBlock', 'HtmlBlock', 'Paragraph', 'Header', 'HorizontalRule'].indexOf(node.type) >= 0;
    }

    get_containing_block(node: commonmark.Node) {
        while (node && !this.isContainer(node)) {
            node = node.parent;
        }
        return node;
    }

    cmark_node_get_list_tight(node: commonmark.Node) {
        if (node && node.type === 'List') {
            return node.listTight;
        } else {
            return false;
        }
    }

    LIT(s: string) {
        this.out(s, false, Escaping.LITERAL);
    }


    cmark_strbuf_puts(s: string) {
        this.buffer += s;
    }

    cmark_node_get_header_level(node: commonmark.Node) {
        if (node) {
            return node.level;
        } else {
            return 0;
        }
    }


    cmark_node_get_literal(node: commonmark.Node): string {
        if (node) {
            return node.literal;
        } else {
            return null;
        }
    }

    // Try to match a scheme including colon.
    scan_scheme(url: string): string | boolean {
        let schemeStart = url.indexOf(':');
        if (schemeStart > -1) {
            return url.substr(0, schemeStart);
        } else {
            return false;
        }
    }

    cmark_consolidate_text_nodes(root: commonmark.Node): string | boolean {
        let text = '';
        let walker = root.walker();
        let current: commonmark.WalkingStep;
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

    mergeNodes(newNodeName: string, a: commonmark.Node, b: commonmark.Node, walker: commonmark.NodeWalker) {
        let newNode = new commonmark.Node(newNodeName);
        a.parent.appendChild(newNode);
        newNode.literal = a.literal + a.next.literal;
        a.insertBefore(newNode);
        a.next.unlink();
        a.unlink();
        walker.resumeAt(newNode);
    }



    is_autolink(node: commonmark.Node): boolean {
        let title: string, url: string, linkText: commonmark.Node, realUrl: string;

        url = node.destination;
        if (url.length === 0 || this.scan_scheme(url)) {
            return false;
        }

        title = node.title;
        // if it has a title, we can't treat it as an autolink:
        if (title.length > 0) {
            return false;
        }

        linkText = node.firstChild;
        let text = this.cmark_consolidate_text_nodes(linkText);
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

    S_render_node(node: commonmark.Node, entering: boolean) {

        let tmp: commonmark.Node;
        let listNumber: number;
        let listDelimiter: string;
        let numtics: number;
        let i: number;
        let info: string;
        let code: string;
        let title: string;
        let listmarker: string;
        let emphesisDelimiter: string;
        let marker_width: number;

        // Don't adjust tight list status til we've started the list.
        // Otherwise we loose the blank line between a paragraph and
        // a following list.
        
        //HACK
        if (!node._listData) {
            node._listData = {};
        }
        // /HACK
        if (!(node.listType === 'Item' && !node.prev && entering)) {
            tmp = this.get_containing_block(node);
            this.inTightListItem =
                (tmp.type === 'Item' &&
                    this.cmark_node_get_list_tight(tmp.parent)) ||
                (tmp && tmp.parent && tmp.parent.type === 'Item' &&
                    this.cmark_node_get_list_tight(tmp.parent.parent));
        }

        switch (node.type) {
            case 'Document':
                break;

            case 'BlockQuote':
                if (entering) {
                    this.LIT("> ");
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
                    this.LIT("\n");
                }
                break;

            case 'Item':
                if (node.parent.listType === 'Bullet') {
                    marker_width = 2;
                } else {
                    listNumber = node.parent.listStart;
                    listDelimiter = node.parent.listDelimiter;
                    tmp = node;
                    while (tmp.prev) {
                        tmp = tmp.prev;
                        listNumber += 1;
                    }
                    // we ensure a width of at least 4 so
                    // we get nice transition from single digits
                    // to double
                    listmarker = listNumber.toString() + listDelimiter;
                    if (listNumber < 10) {
                        listmarker += '  ';
                    } else {
                        listmarker += ' ';
                    }
                    marker_width = listmarker.length;
                }
                if (entering) {
                    if (node.parent.listType === 'Bullet') {
                        this.LIT("* ");
                        this.prefix += "  ";
                    } else {
                        this.LIT(listmarker);
                        for (i = marker_width; i > 0; i--) {
                            this.prefix += ' ';
                        }
                    }
                } else {
                    this.truncatePrefix(marker_width);
                    this.cr();
                }
                break;

            case 'Header':
                if (entering) {
                    for (i = this.cmark_node_get_header_level(node); i > 0; i--) {
                        this.LIT("#");
                    }
                    this.LIT(" ");
                    this.isNoWrap = true;
                } else {
                    this.isNoWrap = false;
                    this.blankline();
                }
                break;

            case 'CodeBlock':
                this.blankline();
                info = node.info || '';
                code = node.literal;

                // use indented form if no info, and code doesn't
                // begin or end with a blank line, and code isn't
                // first thing in a list item
                if (!info.length &&
                    (code.length > 2 && !Utf8.isspace(code[0])) &&
                    !(Utf8.isspace(code[code.length - 1]) && Utf8.isspace(code[code.length - 2])) &&
                    !(!node.prev && node.parent && node.parent.type == 'Item')) {
                    this.LIT("    ");
                    this.prefix += "    ";
                    this.out(code, false, Escaping.LITERAL);
                    this.truncatePrefix(4);
                } else {
                    let numticks = this.longest_backtick_sequence(code) + 1;
                    if (numticks < 3) {
                        numticks = 3;
                    }
                    for (i = 0; i < numticks; i++) {
                        this.LIT("`");
                    }
                    this.LIT(" ");
                    this.out(info, false, Escaping.LITERAL);
                    this.cr();
                    this.out(this.cmark_node_get_literal(node), false, Escaping.LITERAL);
                    this.cr();
                    for (i = 0; i < numticks; i++) {
                        this.LIT("`");
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
                this.LIT("-----");
                this.blankline();
                break;

            case 'Paragraph':
                if (!entering) {
                    this.blankline();
                }
                break;
            case 'Text':
                this.out(this.cmark_node_get_literal(node), false, Escaping.NORMAL);
                break;

            case 'Hardbreak':
                if (this.options.preserveHardbreaks) {
                    this.LIT("\\");
                }
                this.cr();
                break;

            case 'Softbreak':
                if (this.width != 0 && this.options.preserveSoftbreaks) {
                    this.cr();
                } else {
                    this.out(" ", true, Escaping.LITERAL);
                }
                break;

            case 'Code':
                code = node.literal;
                let numticks = this.shortest_unused_backtick_sequence(code);
                for (i = 0; i < numticks; i++) {
                    this.LIT("`");
                }
                if (code.length == 0 || code[0] == '`') {
                    this.LIT(" ");
                }
                this.out(code, true, Escaping.LITERAL);
                if (code.length == 0 || code[code.length - 1] == '`') {
                    this.LIT(" ");
                }
                for (i = 0; i < numticks; i++) {
                    this.LIT("`");
                }
                break;

            case 'Html':
                this.out(node.literal, false, Escaping.LITERAL);
                break;

            case 'Strong':
                if (entering) {
                    this.LIT("**");
                } else {
                    this.LIT("**");
                }
                break;

            case 'Emph':
                // If we have EMPH(EMPH(x)), we need to use *_x_*
                // because **x** is STRONG(x):
                if (node.parent && node.parent.type == 'Emph' &&
                    !node.next && !node.prev) {
                    emphesisDelimiter = "_";
                } else {
                    emphesisDelimiter = "*";
                }
                if (entering) {
                    this.LIT(emphesisDelimiter);
                } else {
                    this.LIT(emphesisDelimiter);
                }
                break;

            case 'Link':
                if (this.is_autolink(node)) {
                    if (entering) {
                        this.LIT("<");
                        if (node.destination.substr(0, 7) === 'mailto:') {
                            this.LIT(node.destination.substr(7));
                        } else {
                            this.LIT(node.destination);
                        }
                        this.LIT(">");
                        // return signal to skip contents of node...
                        return false;
                    }
                } else {
                    if (entering) {
                        this.LIT("[");
                    } else {
                        this.LIT("](");
                        this.out(node.destination, false, Escaping.URL);
                        title = node.title || '';
                        if (title.length > 0) {
                            this.LIT(" \"");
                            this.out(title, false, Escaping.TITLE);
                            this.LIT("\"");
                        }
                        this.LIT(")");
                    }
                }
                break;

            case 'Image':
                if (entering) {
                    this.LIT("![");
                } else {
                    this.LIT("](");
                    this.out(node.destination, false, Escaping.URL);
                    title = node.title || '';
                    if (title.length > 0) {
                        this.out(" \"", true, Escaping.LITERAL);
                        this.out(title, false, Escaping.TITLE);
                        this.LIT("\"");
                    }
                    this.LIT(")");
                }
                break;
        }

        return true;
    }


    render(root: commonmark.Node, options: number, width: number) {

        this.buffer = '';
        let current: commonmark.Node;
        let eventType: CommonmarkEvent;
        let result: string;
        let walker = root.walker();
        let step: commonmark.WalkingStep;
        while (step = walker.next()) {
            current = step.node;
            if (!this.S_render_node(current, step.entering)) {
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

        result = this.buffer;

        return result;
    }
}
export = Renderer;