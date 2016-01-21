import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import Util = require('./Util');
import DomUtil = require('./DomUtil');
import MarkdownUtil = require('./MarkdownUtil');

class Converter {

    private options: Html2AstOptions;

    constructor(private parser: HtmlParser, options?: Html2AstOptions) {
        this.options = Util.assign({
            rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
            ignoredHtmlElements: [],
            interpretUnknownHtml: true
        }, options);
    }

    convert(html: string): commonmark.Node {
        html = html.trim();
        let htmlElement = this.parser.parse(html);
        let walker = new DomWalker(htmlElement);
        let document = new commonmark.Node('Document');
        let conversion = this.createConversion(walker.next().domNode, walker).execute(document);
        return document;
    }

    /** @internal */
    createConversion(domNode: Node, walker: DomWalker): NodeConversion {
        let nodeName = domNode.nodeName.toLowerCase();
        if (this.options.rawHtmlElements.indexOf(nodeName) >= 0) {
            return new RawHtmlConversion(walker, this, domNode);
        }
        if (this.options.ignoredHtmlElements.indexOf(nodeName) >= 0) {
            return new NoopConversion(walker, this)
        }
        switch (nodeName) {
            case 'a':
                return new LinkConversion(walker, this, domNode);
            case 'br':
                return new NamedContainerConversion(walker, this, 'Hardbreak');
            case 'body': case 'custom-root':
                return new NoopConversion(walker, this);
            case 'pre':
                return new NamedContainerConversion(walker, this, 'CodeBlock');
            case 'code':
                return new CodeBlockConversion(walker, this, domNode);
            case 'img':
                return new ImageConversion(walker, this, domNode);
            case 'ul':
            case 'ol':
                return new ListConversion(walker, this, domNode);
            case 'li':
                return new ListItemConversion(walker, this);
            case 'p':
                return new NamedContainerConversion(walker, this, 'Paragraph');
            case 'hr':
                return new NamedContainerConversion(walker, this, 'HorizontalRule');
            case '#text':
                return new TextConversion(walker, this, domNode);
            case 'blockquote':
                return new NamedContainerConversion(walker, this, 'BlockQuote');
            case 'i':
            case 'em':
                return new InlineConversion(walker, this, 'Emph');
            case 'b':
            case 'strong':
                return new InlineConversion(walker, this, 'Strong');
            case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': case 'h7': case 'h8': case 'h9':
                return new HeaderConversion(walker, this, parseInt(domNode.nodeName.substr(1)));
            default:
                if (this.options.interpretUnknownHtml) {
                    return new RawHtmlConversion(walker, this, domNode);
                } else {
                    return new NoopConversion(walker, this);
                }
        }
    }

}


abstract class NodeConversion {

    protected children: Array<NodeConversion>;
    constructor(domWalker: DomWalker, converter: Converter) {
        this.children = [];
        let next: WalkingStep;
        while ((next = domWalker.next()).isEntering) {
            this.children.push(converter.createConversion(next.domNode, domWalker));
        }
    }

    public abstract execute(container?: commonmark.Node): commonmark.Node;
}

class NoopConversion extends NodeConversion {
    public execute(container: commonmark.Node) {
        return this.children.map(c => c.execute(container)).pop();
    }
}

class NamedContainerConversion extends NodeConversion {

    public constructor(domWalker: DomWalker, converter: Converter, protected nodeName: string, protected literal: string = null) {
        super(domWalker, converter);
    }

    public execute(container?: commonmark.Node): commonmark.Node {
        let node = new commonmark.Node(this.nodeName);
        node.literal = this.literal;
        if (container) {
            container.appendChild(node);
        }
        this.children.forEach(c => c.execute(node));
        return node;
    }
}

/**
 * Represents a container block
 * A block node which can only contain other block nodes
 * See 3.2 Container blocks and leaf blocks of the spec
 */
class ContainerBlockConversion extends NamedContainerConversion {

    public constructor(domWalker: DomWalker, converter: Converter, nodeName: string) {
        super(domWalker, converter, nodeName);
    }

    public execute(container: commonmark.Node) {
        let containerBlockNode = super.execute(container);

        let wrapInlineNodes = (inlineNodes: Array<commonmark.Node>) => {
            if (inlineNodes.length) {
                let wrapper = new commonmark.Node('Paragraph');
                inlineNodes[0].insertBefore(wrapper);
                inlineNodes.forEach(c => wrapper.appendChild(c));
            }
        }
        
        // If we have children and some children are inline, we incapsulate those in a paragraph conversion 
        if (containerBlockNode.firstChild) {
            let child = containerBlockNode.firstChild;
            let inlineNodes: Array<commonmark.Node> = [];
            while (child) {
                if (MarkdownUtil.isInline(child)) {
                    inlineNodes.push(child);
                } else {
                   wrapInlineNodes(inlineNodes);
                   inlineNodes = [];
                }
                child = child.next;
            }
            wrapInlineNodes(inlineNodes);
        }
        return containerBlockNode;
    }
}

class LinkConversion extends NamedContainerConversion {
    constructor(domWalker: DomWalker, converter: Converter, private anchorTag: Node) {
        super(domWalker, converter, 'Link');
    }

    public execute(container: commonmark.Node) {
        let link = super.execute(container);
        let href = this.anchorTag.attributes.getNamedItem('href');
        let title = this.anchorTag.attributes.getNamedItem('title');
        if (href) {
            link.destination = href.value;
        } else {
            link.destination = '';
        }
        if (title) {
            link.title = title.value;
        } else {
            link.title = '';
        }
        return link;
    }
}

class HeaderConversion extends NamedContainerConversion {
    public constructor(domWalker: DomWalker, converter: Converter, private level: number) {
        super(domWalker, converter, 'Header');
    }

    public execute(container: commonmark.Node) {
        let headerNode = super.execute(container);
        headerNode.level = this.level;
        return headerNode;
    }
}

class InlineConversion extends NamedContainerConversion {

    public constructor(domWalker: DomWalker, converter: Converter, nodeName: string) {
        super(domWalker, converter, nodeName);
    }
}

class TextConversion extends NodeConversion {
	
    // Not sure of this solution holds, but we'll see
    private static INLINE_HTML_NODES_OF_WHICH_SIBLINGS_SHOULD_BE_TRIMMED = ['br', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9'];
    private static SOFTBREAK_SUBSTITUTION_CHARACTER = '\n';

    constructor(domWalker: DomWalker, converter: Converter, private textNode: Node) {
        super(domWalker, converter);
    }

    public execute(container: commonmark.Node) {

        let textContent = this.trimTextContent();
        if (this.hasParent('pre')) {
            container.literal = this.textNode.textContent;
            return null;
        } else if (textContent) {
            var lines = textContent.split(TextConversion.SOFTBREAK_SUBSTITUTION_CHARACTER);
            lines.forEach((line, index) => {
                if (line) {
                    let node = new commonmark.Node('Text');
                    node.literal = line;
                    container.appendChild(node);
                }
                if (lines.length > 1 && index != (lines.length - 1)) {
                    container.appendChild(new commonmark.Node('Softbreak'));
                }
            });
            return container.firstChild;
        }
    }

    private hasParent(type: string) {
        var parent = this.textNode;
        while (parent = parent.parentNode) {
            if (parent.nodeName.toLowerCase() === 'code') {
                return true;
            }
        }
        return false;
    }

    private trimTextContent(): string {
        // If this node is a sibling of an other inline node, we don't trim the spaces
        // i.e. <i>one</i> space != <i>one</i>space;
        let text = this.textNode.textContent;
        if (this.shouldTrimSpaces(this.textNode.previousSibling)) {
            text = this.trimLeft(text);
        }
        if (this.shouldTrimSpaces(this.textNode.nextSibling)) {
            text = this.trimRight(text);
        }
        return text;
    }

    private shouldTrimSpaces(sibling: Node) {
        return !sibling || !DomUtil.isInline(sibling) || TextConversion.INLINE_HTML_NODES_OF_WHICH_SIBLINGS_SHOULD_BE_TRIMMED.indexOf(sibling.nodeName.toLowerCase()) >= 0;
    }

    private trimLeft(text: string) {
        while (text.charAt(0).match(/\s/)) {
            text = text.substr(1);
        }
        return text;
    }

    private trimRight(text: string) {
        while (text.charAt(text.length - 1).match(/\s/)) {
            text = text.substr(0, text.length - 1);
        }
        return text;
    }
}

class ImageConversion extends NamedContainerConversion {

    constructor(domWalker: DomWalker, converter: Converter, private imgTag: Node) {
        super(domWalker, converter, 'Image');
    }

    public execute(container: commonmark.Node) {
        let imageNode = super.execute(container);
        let href = this.imgTag.attributes.getNamedItem('src');
        let title = this.imgTag.attributes.getNamedItem('title');
        let alternative = this.imgTag.attributes.getNamedItem('alt');
        if (alternative) {
            let altTextNode = new commonmark.Node('Text');
            imageNode.appendChild(altTextNode);
            altTextNode.literal = alternative.value;
        }
        if (href) {
            imageNode.destination = href.value;
        } else {
            imageNode.destination = '';
        }
        if (title) {
            imageNode.title = title.value;
        } else {
            imageNode.title = '';
        }
        return imageNode;
    }

}

class ListConversion extends NamedContainerConversion {

    constructor(domWalker: DomWalker, converter: Converter, private listTag: Node) {
        super(domWalker, converter, 'List');
    }

    public execute(container: commonmark.Node) {
        let list = super.execute(container);
        list._listData = {};
        let start = this.listTag.attributes.getNamedItem('start');
        switch (this.listTag.nodeName.toLowerCase()) {
            case 'ul':
                list.listType = 'bullet';
                break;
            case 'ol':
                list.listType = 'ordered';
                if (start && start.value) {
                    list.listStart = parseInt(start.value);
                }
                break;
        }
        return list;
    }
}

class ListItemConversion extends ContainerBlockConversion {
    constructor(domWalker: DomWalker, converter: Converter) {
        super(domWalker, converter, 'Item');
    }
}

class CodeBlockConversion extends NodeConversion {

    constructor(domWalker: DomWalker, converter: Converter, private codeTag: Node) {
        super(domWalker, converter);
    }

    public isInline() {
        return false;
    }

    public execute(container: commonmark.Node) {
        let codeBlock: commonmark.Node = null;
        if (container.type === 'CodeBlock') {
            this.enrichCodeBlock(this.codeTag, container);
        } else {
            codeBlock = new commonmark.Node('Code');
            container.appendChild(codeBlock);
            codeBlock.literal = ''; // Initialize to an empty string.
            this.enrichCodeBlock(this.codeTag, codeBlock);
        }
        let parent = codeBlock;
        if (!parent) {
            parent = container;
        }
        this.children.forEach(c => c.execute(parent));
        return codeBlock;
    }

    private enrichCodeBlock(codeTag: Node, codeBlock: commonmark.Node) {
        if (codeBlock.type === 'CodeBlock' && DomUtil.isElement(codeTag)) {
            let classes = codeTag.classList;
            let info = null;
            for (let i = 0; i < classes.length; i++) {
                let clazz = classes.item(i);
                if (clazz.substr(0, 9) === 'language-') {
                    info = clazz.substr(9);
                }
            }
            codeBlock.info = info;
            codeBlock.literal = ''; // initialize with empty string, even if there are no childnodes.
        }
    }
}

class RawHtmlConversion extends NodeConversion {

    public constructor(domWalker: DomWalker, converter: Converter, private rawHtmlNode: Node) {
        super(domWalker, converter);
    }

    public isInline() {
        return false;
    }

    public execute(container?: commonmark.Node) {
        let rawHtmlNode = this.rawHtmlNode;
        if (DomUtil.isElement(rawHtmlNode)) {
            let nodeName = 'HtmlBlock';

            // If this node only has text nodes as children, include them in this html block (instead of rendering them as md nodes)
            if (this.trueForAllChildren(DomUtil.isText)) {
                return this.appendChildNode(container, nodeName, rawHtmlNode.outerHTML);
            }
            else {
                this.appendChildNode(container, nodeName, DomUtil.writeStartElement(rawHtmlNode));
                this.children.forEach(c => c.execute(container));
                return this.appendChildNode(container, nodeName, DomUtil.writeEndElement(rawHtmlNode));
            }
        } else if (DomUtil.isComment(rawHtmlNode)) {
            return this.appendChildNode(container, 'HtmlBlock', '<!--' + rawHtmlNode.data + '-->');
        } else if (DomUtil.isText(rawHtmlNode)) {
            return this.appendChildNode(container, 'Html', rawHtmlNode.textContent);
        } else if (DomUtil.isProcessingInstruction(rawHtmlNode)) {
            return this.appendChildNode(container, 'HtmlBlock', '<?' + rawHtmlNode.data + '?>');
        }
        else {
            return null;
        }
    }

    private trueForAllChildren(predicate: (domNode: Node) => boolean) {
        let domNode = this.rawHtmlNode;
        let walker = new DomWalker(this.rawHtmlNode);
        walker.next(); // skip the root node
        let result = true;
        while (result && (domNode = walker.next().domNode) !== this.rawHtmlNode) {
            result = predicate(domNode);
        }
        return result;
    }
    private appendChildNode(container: commonmark.Node, nodeName: string, literal: string = null) {
        let node = new commonmark.Node(nodeName);
        node.literal = literal;
        container.appendChild(node);
        return node;
    }

}

export = Converter;