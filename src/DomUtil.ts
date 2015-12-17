

export = class NodeUtil {
	
	private static TYPES_WITH_MANDATORY_BLOCKED_CONTENT = ['Item', 'BlockQuote'];
	
	// Block level html nodes: http://spec.commonmark.org/0.22/#html-blocks rule 6
	private static BLOCK_LEVEL_HTML_NODES = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'meta', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
	
	
	
	public static isComment(domNode: Node): domNode is Comment {
		return domNode.nodeType === domNode.COMMENT_NODE;
	}

	public static isElement(domNode: Node): domNode is HTMLElement {
		return domNode.nodeType === domNode.ELEMENT_NODE;
	}
	
	public static isInline(domNode: Node) {
		if (domNode) {
			return domNode.nodeType === domNode.TEXT_NODE ||
			domNode.nodeType === domNode.COMMENT_NODE || 
			(domNode.nodeType === domNode.ELEMENT_NODE && NodeUtil.BLOCK_LEVEL_HTML_NODES.indexOf(domNode.nodeName.toLowerCase()) < 0);
		} else {
			return false;
		}
	}
}