import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import DomUtil = require('./DomUtil');
import MarkdownUtil = require('./MarkdownUtil');


interface ConversionState{
	domWalker: DomWalker;
	options: Html2MarkdownConversionOptions;
}

function convert(domNode: Node, state: ConversionState): NodeConversion {
	switch (domNode.nodeName.toLowerCase()) {
		case 'a':
			return new LinkConversion(state, domNode);
		case 'br':
			return new NamedContainerConversion(state, 'Hardbreak');
		case 'body':
			return new NamedContainerConversion(state, 'Document');
		case 'pre':
			return new NamedContainerConversion(state, 'CodeBlock');
		case 'code':
			return new CodeBlockConversion(state, domNode);
		case 'img':
			return new ImageConversion(state, domNode);
		case 'ul':
		case 'ol':
			return new ListConversion(state, domNode);
		case 'li':
			return new NamedContainerConversion(state, 'Item');
		case 'p':
			return new NamedContainerConversion(state, 'Paragraph');
		case 'hr':
			return new NamedContainerConversion(state, 'HorizontalRule');
		case '#text':
			return new TextConversion(state, domNode);
		case 'blockquote':
			return new NamedContainerConversion(state, 'BlockQuote');
		case 'i':
		case 'em':
			return new InlineConversion(state, 'Emph');
		case 'b':
		case 'strong':
			return new InlineConversion(state, 'Strong');
		case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': case 'h7': case 'h8': case 'h9':
			return new HeaderConversion(state, parseInt(domNode.nodeName.substr(1)));
		case 'address': case 'article': case 'aside': case 'base': case 'basefont': 
			/*case 'blockquote': case 'body':*/ case 'caption': case 'center': case 'col': case 'colgroup':
		case 'dd': case 'details': case 'dialog': case 'dir': case 'div': case 'dl': case 'dt':
		case 'fieldset': case 'figcaption': case 'figure': case 'footer': case 'form': case 'frame':
		case 'frameset': /*case 'h1':*/ case 'head': case 'header': /*case 'hr':*/ case 'html':
		case 'iframe': case 'legend': /*case 'li':*/ case 'link': case 'main': case 'menu':
		case 'menuitem': case 'meta': case 'nav': case 'noframes': /*case 'ol':*/ case 'optgroup': case 'option': 
			/*case 'p':*/ case 'param': case 'section': case 'source': case 'summary': case 'table': case 'tbody':
		case 'td': case 'tfoot': case 'th': case 'thead': case 'title': case 'tr': case 'track': /*case 'ul':*/
		default:
			return new RawHtmlConversion(state, domNode);
	}
}

abstract class AbstractNodeConversion implements NodeConversion {

	protected children: Array<NodeConversion>;

	constructor(state: ConversionState) {
		this.children = [];
		let next: WalkingStep;
		while ((next = state.domWalker.next()).isEntering) {
			this.children.push(convert(next.domNode, state));
		}
	}

	public abstract execute(container?: commonmark.Node): commonmark.Node;
}

class NamedContainerConversion extends AbstractNodeConversion {

	public constructor(state: ConversionState, protected nodeName: string, protected literal: string = null) {
		super(state);
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

class LinkConversion extends NamedContainerConversion {
	constructor(state: ConversionState, private anchorTag: Node) {
		super(state, 'Link');
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
	public constructor(state: ConversionState, private level: number) {
		super(state, 'Header');
	}

	public execute(container: commonmark.Node) {
		let headerNode = super.execute(container);
		headerNode.level = this.level;
		return headerNode;
	}
}

class InlineConversion extends AbstractNodeConversion {

	public constructor(state: ConversionState, private nodeName: string) {
		super(state);
	}

	public execute(container: commonmark.Node) {
		var inlineNode = new commonmark.Node(this.nodeName);
		this.children.forEach(c => c.execute(inlineNode));
		return MarkdownUtil.addInlineBlocks([inlineNode], container)
	}
}

class TextConversion extends AbstractNodeConversion {
	
	// Not sure of this solution holds, but we'll see
	private static INLINE_HTML_NODES_OF_WHICH_SIBLINGS_SHOULD_BE_TRIMMED = ['br', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9'];
	private static SOFTBREAK_SUBSTITUTION_CHARACTER = '\n';

	constructor(state: ConversionState, private textNode: Node) {
		super(state);
	}

	public execute(container: commonmark.Node) {

		let textContent = this.trimTextContent();
		if (this.hasParent('pre')) {
			container.literal = this.textNode.textContent;
			return null;
		} else if (textContent) {
			let nodes: Array<commonmark.Node> = [];
			var lines = textContent.split(TextConversion.SOFTBREAK_SUBSTITUTION_CHARACTER);
			lines.forEach((line, index) => {
				if (line) {
					let node = new commonmark.Node('Text');
					node.literal = line;
					nodes.push(node);
				}
				if (lines.length > 1 && index != (lines.length - 1)) {
					nodes.push(new commonmark.Node('Softbreak'));
				}
			});
			return MarkdownUtil.addInlineBlocks(nodes, container);
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

	constructor(state: ConversionState, private imgTag: Node) {
		super(state, 'Image');
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

	constructor(state: ConversionState, private listTag: Node) {
		super(state, 'List');
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
				list.listStart = start;
				break;
		}
		return list;
	}
}

class CodeBlockConversion extends AbstractNodeConversion {

	constructor(state: ConversionState, private codeTag: Node) {
		super(state);
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

class RawHtmlConversion implements NodeConversion {

	private htmlBlock: commonmark.Node;

	public constructor(state: ConversionState, rawHtmlNode: Node) {
		if (DomUtil.isElement(rawHtmlNode)) {
			let domWalker = state.domWalker;
			let step = domWalker.current;
			let isInline: boolean;
			do {
				isInline = DomUtil.isInline(step);
			} while (isInline && (step = domWalker.next().domNode) !== rawHtmlNode);

			let nodeName = 'HtmlBlock';
			if (isInline) {
				nodeName = 'Html';
			}
			this.htmlBlock = this.createNode(nodeName, rawHtmlNode.outerHTML)
			
			// leave current node immediately
			domWalker.resumeAt(rawHtmlNode, false);
			domWalker.next();
		} else if (DomUtil.isComment(rawHtmlNode)) {
			this.htmlBlock = this.createNode('Html', '<!--' + rawHtmlNode.data + '-->');
		}
	}

	public execute(container?: commonmark.Node) {
		if (this.htmlBlock) {
			container.appendChild(this.htmlBlock);
		}
		return this.htmlBlock;
	}

	private createNode(nodeName: string, literal: string = null) {
		let node = new commonmark.Node(nodeName);
		node.literal = literal;
		return node;
	}

}

export = convert;