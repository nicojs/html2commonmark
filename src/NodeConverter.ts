import commonmark = require('commonmark');

export = class NodeConverter {

	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];
	private static INLINE_HTML_NODES = ['i', 'b', 'em', 'strong', 'u'];
	private static SOFTBREAK_SUBSTITUTION_CHARACTER = '\n';

	static convert(node: Node, container: commonmark.Node): commonmark.Node {
		let nodeName = node.nodeName.toLowerCase();
		console.log(`converting ${nodeName}`);
		switch (nodeName) {
			case 'body':
				return this.createNode('Document', container);
			case 'pre':
				return this.createNode('CodeBlock', container);
			case 'code':
				return null;
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
			case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': case 'h7': case 'h8': case 'h9':
				return this.createHeaderNode(parseInt(nodeName.substr(1)), container);
			default:
				console.log(`Missing covertion for ${nodeName}.`)
				return this.createNode('Paragraph', container);
		}
	}

	private static createNode(nodeName: string, container: commonmark.Node) {
		let node = new commonmark.Node(nodeName);
		if (container) {
			container.appendChild(node);
		}
		return node;
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
				if(start === null){
					list.listStart = null;
				}else{
					list.listStart = start;
				}
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
				let node = new commonmark.Node('Text');
				node.literal = line;
				nodes.push(node);
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
			return domNode.nodeType === domNode.TEXT_NODE || (domNode.nodeType === domNode.ELEMENT_NODE && this.INLINE_HTML_NODES.indexOf(domNode.nodeName.toLowerCase()) >= 0);
		} else {
			return false;
		}
	}

	private static createInlineNode(name: string, container: commonmark.Node) {
		return this.addInlineBlocks([new commonmark.Node(name)], container);
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
