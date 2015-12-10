import commonmark = require('commonmark');

export = class NodeConverter {

	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];

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
				return this.createNode('List', container);
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

	private static createTextNode(htmlNode: Node, container: commonmark.Node): commonmark.Node {
		if (this.hasParent(htmlNode, 'pre')) {
			container.literal = htmlNode.textContent;
			return null;
		} else if (htmlNode.textContent.trim()) {
			let node = new commonmark.Node('Text');
			node.literal = htmlNode.textContent;
			node = this.wrapInBlockIfNeeded(node, container);
			container.appendChild(node);
			return node;
		}
	}

	private static wrapInBlockIfNeeded(node: commonmark.Node, container: commonmark.Node): commonmark.Node {
		if (this.allowsInlineContent(container)) {
			return node;
		} else {
			let paragraph = new commonmark.Node('Paragraph');
			paragraph.appendChild(node);
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
