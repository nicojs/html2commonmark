import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');

export = class NodeConverter {

	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];
	private static INLINE_HTML_NODES = ['i', 'b', 'em', 'strong', 'u', 'code', 'a', 'img'];
	private static BLOCK_HTML_NODES = ['p', 'body', 'ul', 'li', 'ol', 'hr', 'br', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9'];
	private static SOFTBREAK_SUBSTITUTION_CHARACTER = '\n';

	static convert(node: Node, container: commonmark.Node, domWalker: DomWalker): commonmark.Node {
		let nodeName = node.nodeName.toLowerCase();
		console.log(`converting ${nodeName}`);
		switch (nodeName) {
			case 'a':
				return this.createLink(node, container);
			case 'br':
				return this.createNode('Hardbreak', container);
			case 'body':
				return this.createNode('Document', container);
			case 'pre':
				return this.createNode('CodeBlock', container);
			case 'code':
				return this.convertCodeTag(node, container);
			case 'img':
				return this.convertImageNode(node, container);
			case 'ul':
			case 'ol':
				return this.createListNode(node, container);
			case 'li':
				return this.createNode('Item', container);
			case 'p':
				return this.createNode('Paragraph', container);
			case 'hr':
				return this.createNode('HorizontalRule', container);
			case '#text':
				return this.createTextNode(node, container);
			case 'blockquote':
				return this.createNode('BlockQuote', container);
			case 'i':
			case 'em':
				return this.createInlineNode('Emph', container);
			case 'b':
			case 'strong':
				return this.createInlineNode('Strong', container);
			case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': case 'h7': case 'h8': case 'h9':
				return this.createHeaderNode(parseInt(nodeName.substr(1)), container);
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
				return this.convertHtmlRaw(node, container, domWalker);
		}
	}

	private static createNode(nodeName: string, container: commonmark.Node, literal: string = null) {
		let node = new commonmark.Node(nodeName);
		node.literal = literal;
		if (container) {
			container.appendChild(node);
		}
		return node;
	}

	private static convertImageNode(imgTag: Node, container: commonmark.Node) {
		let imageNode = this.createInlineNode('Image', container);
		let href = imgTag.attributes.getNamedItem('src');
		let title = imgTag.attributes.getNamedItem('title');
		let alternative = imgTag.attributes.getNamedItem('alt');
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

	private static convertHtmlRaw(rawHtmlNode: Node, container: commonmark.Node, domWalker: DomWalker) {
		if (this.isElement(rawHtmlNode)) {
			let step = domWalker.current;
			let isInline: boolean;
			do {
				isInline = this.isInline(step);
			} while (isInline && (step = domWalker.next().domNode) !== rawHtmlNode);

			let nodeName = 'HtmlBlock';
			if (isInline) {
				nodeName = 'Html';
			}
			let htmlBlock = this.createNode(nodeName, container, rawHtmlNode.outerHTML);
			
			// leave current node immediately
			domWalker.resumeAt(rawHtmlNode, false);
			return htmlBlock;
		} else if (this.isComment(rawHtmlNode)) {
			return this.createNode('Html', container, '<!--' + rawHtmlNode.data + '-->');
		} else {
			return null;
		}
	}

	private static convertCodeTag(codeTag: Node, container: commonmark.Node) {
		if (container.type === 'CodeBlock') {
			this.enrichCodeBlock(codeTag, container);
			return null;
		} else {
			let codeBlock = this.createNode('Code', container);
			codeBlock.literal = ''; // Initialize to an empty string.
			this.enrichCodeBlock(codeTag, codeBlock);
			return codeBlock;
		}
	}

	private static createLink(anchorTag: Node, container: commonmark.Node) {
		let linkNode = this.createInlineNode('Link', container);
		let href = anchorTag.attributes.getNamedItem('href');
		let title = anchorTag.attributes.getNamedItem('title');
		if (href) {
			linkNode.destination = href.value;
		} else {
			linkNode.destination = '';
		}
		if (title) {
			linkNode.title = title.value;
		} else {
			linkNode.title = '';
		}
		return linkNode;
	}

	private static createInlineNode(name: string, container: commonmark.Node) {
		return this.addInlineBlocks([new commonmark.Node(name)], container);
	}

	private static enrichCodeBlock(codeTag: Node, codeBlock: commonmark.Node) {
		if (codeBlock.type === 'CodeBlock' && this.isElement(codeTag)) {
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

	private static isComment(domNode: Node): domNode is Comment {
		return domNode.nodeType === domNode.COMMENT_NODE;
	}

	private static isElement(domNode: Node): domNode is HTMLElement {
		return domNode.nodeType === domNode.ELEMENT_NODE;
	}

	private static createListNode(domNode: Node, container: commonmark.Node) {
		let list = this.createNode('List', container);
		list._listData = {};
		let start = domNode.attributes.getNamedItem('start');
		switch (domNode.nodeName.toLowerCase()) {
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

	private static createHeaderNode(level: number, container: commonmark.Node) {
		let header = this.createNode('Header', container);
		header.level = level;
		return header;
	}

	private static createTextNode(htmlNode: Node, container: commonmark.Node): commonmark.Node {
		let textContent = this.trimTextContent(htmlNode);
		if (this.hasParent(htmlNode, 'pre')) {
			container.literal = htmlNode.textContent;
			return null;
		} else if (textContent) {
			let nodes: Array<commonmark.Node> = [];
			var lines = textContent.split(this.SOFTBREAK_SUBSTITUTION_CHARACTER);
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
			return this.addInlineBlocks(nodes, container);
		}
	}

	private static trimTextContent(domNode: Node): string {
		// If this node is a sibling of an other inline node, we don't trim the spaces
		// i.e. <i>one</i> space != <i>one</i>space;
		let text = domNode.textContent;
		if (!this.isInline(domNode.previousSibling)) {
			text = this.trimLeft(text);
		}
		if (!this.isInline(domNode.nextSibling)) {
			text = this.trimRight(text);
		}
		return text;
	}

	private static trimLeft(text: string) {
		while (text.charAt(0).match(/\s/)) {
			text = text.substr(1);
		}
		return text;
	}

	private static trimRight(text: string) {
		while (text.charAt(text.length - 1).match(/\s/)) {
			text = text.substr(0, text.length - 1);
		}
		return text;
	}

	private static isInline(domNode: Node) {
		if (domNode) {
			return domNode.nodeType === domNode.TEXT_NODE ||
			domNode.nodeType === domNode.COMMENT_NODE || 
			(domNode.nodeType === domNode.ELEMENT_NODE && this.BLOCK_HTML_NODES.indexOf(domNode.nodeName.toLowerCase()) < 0);
		} else {
			return false;
		}
	}

	private static addInlineBlocks(nodes: Array<commonmark.Node>, container: commonmark.Node): commonmark.Node {
		if (this.allowsInlineContent(container)) {
			nodes.forEach(n => container.appendChild(n));
			return nodes[nodes.length - 1];
		} else {
			let paragraph = new commonmark.Node('Paragraph');
			nodes.forEach(n => paragraph.appendChild(n));
			container.appendChild(paragraph);
			return paragraph;
		}
	}

	private static allowsInlineContent(node: commonmark.Node) {
		return !node || this.TYPES_WITH_MANDATORY_BLOCKED_CONTENT.indexOf(node.type) < 0;
	}

	private static hasParent(child: Node, type: string) {
		var parent = child;
		while (parent = parent.parentNode) {
			if (parent.nodeName.toLowerCase() === 'code') {
				return true;
			}
		}
		return false;
	}

}
