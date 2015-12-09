import commonmark = require('commonmark');

export = class NodeConverter {
	
	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];

	static convert(node: Node, container: commonmark.Node): NodeConversion {
		let conversion: NodeConversion;
		let nodeName = node.nodeName.toLowerCase();
		console.log(`converting ${nodeName}`);
		switch (nodeName) {
			case 'body':
				return this.createConversion('Document');
			case 'pre':
				return this.createConversion('CodeBlock');
			case 'code':
				return null;
			case 'ul':
				return this.createConversion('List');
			case 'li':
				return this.createConversion('Item');
			case 'p':
				return this.createConversion('Paragraph');
			case 'hr':
				return this.createConversion('HorizontalRule');
			case '#text':
				return this.convertText(node, container);
			case 'blockquote':
				return this.createConversion('BlockQuote');
			default:
				console.log(`Missing covertion for ${nodeName}.`)
				return this.createConversion('Paragraph');
		}
	}

	private static createConversion(nodeName: string): NodeConversion {
		return { node: new commonmark.Node(nodeName) };
	}

	private static convertText(htmlNode: Node, container: commonmark.Node): NodeConversion {
		if (this.hasParent(htmlNode, 'pre')) {
			return { textContent: htmlNode.textContent };
		} else if (htmlNode.textContent.trim()) {
			let node = new commonmark.Node('Text');
			node.literal = htmlNode.textContent;
			return { node: this.wrapInBlockIfNeeded(node, container) };
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

	private static convertList(htmlNode: Node): NodeConversion {
		return { node: new commonmark.Node('List') };
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
