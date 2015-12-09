import commonmark = require('commonmark');

export = class NodeConverter {

	static convert(node: Node): NodeConversion {
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
				return this.convertText(node);
			case 'blockquote':
				return this.createConversion('BlockQuote');
			default:
				console.log(`Missing covertion for ${nodeName}.`)
				return this.createConversion('Paragraph');
		}
	}
	
	private static createConversion(nodeName: string): NodeConversion{
		return { node: new commonmark.Node(nodeName) };
	}

	private static convertText(htmlNode: Node): NodeConversion {
		if (this.hasParent(htmlNode, 'pre')) {
			return { textContent: htmlNode.textContent };
		} else if (htmlNode.textContent.trim()) {
			let node = new commonmark.Node('Text');
			node.literal = htmlNode.textContent;
			return { node };
		}
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
