import commonmark = require('commonmark');



export = class NodeConverter {

	convert(node: Node): NodeConversion {
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
			case '#text':
				return { content: node.textContent };
			default:
				console.log(`Missing covertion for ${nodeName}.`)
				return { node: new commonmark.Node('Paragraph') };
		}
	}


}
