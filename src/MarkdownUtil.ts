import commonmark = require('commonmark');

export = class MarkdownUtil {
	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];

	public static allowsInlineContent(node: commonmark.Node) {
		return !node || MarkdownUtil.TYPES_WITH_MANDATORY_BLOCKED_CONTENT.indexOf(node.type) < 0;
	}
	
	public static addInlineBlocks(nodes: Array<commonmark.Node>, container: commonmark.Node): commonmark.Node {
		if (MarkdownUtil.allowsInlineContent(container)) {
			nodes.forEach(n => container.appendChild(n));
			return nodes[nodes.length - 1];
		} else {
			let paragraph = new commonmark.Node('Paragraph');
			nodes.forEach(n => paragraph.appendChild(n));
			container.appendChild(paragraph);
			return paragraph;
		}
	}
}