import commonmark = require('commonmark');



export = class NodeConverter {

	static convert(node: Node): NodeConversion {
		let conversion: NodeConversion;
		let nodeName = node.nodeName.toLowerCase();
		console.log(`converting ${nodeName}`);
		switch (nodeName) {
			case 'body':
				return { node: new commonmark.Node('Document') };
			case 'pre':
				return { node: new commonmark.Node('CodeBlock') };
			case 'code':
				return null;
			case 'ul':
				return { node: new commonmark.Node('List') };
			case 'li':
				return { node: new commonmark.Node('Item') };
			case 'p':
				return { node: new commonmark.Node('Paragraph') };
			case '#text':
				return this.convertText(node);
			case 'blockquote':
				return { node: new commonmark.Node('BlockQuote') };
			default:
				console.log(`Missing covertion for ${nodeName}.`)
				return { node: new commonmark.Node('Paragraph') };
		}
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
