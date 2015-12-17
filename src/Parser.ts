import jsdom = require('jsdom');
import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');

export = class Parser {

	parse(html: string): commonmark.Node {
		html = html.trim();
		let document = jsdom.jsdom( html, {features: {FetchExternalResources: false, ProcessExternalResources: false }}).defaultView.document;
		return this.parseDomNode(document.body);		
	}
	
	parseDomNode(htmlNode: Node): commonmark.Node {
		let walker = new DomWalker(htmlNode);
		let conversion = convert(walker.next().domNode, { domWalker: walker, options: {} });
		return conversion.execute();
	}
}