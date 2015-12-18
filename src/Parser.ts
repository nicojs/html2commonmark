import jsdom = require('jsdom');
import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');

export = class Parser {

	parse(html: string, options?: Html2MarkdownConversionOptions): commonmark.Node {
		html = html.trim();
		let document = jsdom.jsdom(`<html><body>${html}</body></html>`, { features: { FetchExternalResources: false, ProcessExternalResources: false } }).defaultView.document;
		return this.parseDomNode(document.body, options);
	}

	parseDomNode(htmlNode: Node, options?: Html2MarkdownConversionOptions): commonmark.Node {
		options = this.overrideDefaults(options);
		let walker = new DomWalker(htmlNode);
		let conversion = convert(walker.next().domNode, { domWalker: walker, options: options });
		return conversion.execute();
	}

	private overrideDefaults(overrides: Html2MarkdownConversionOptions) {
		var currentOptions: Html2MarkdownConversionOptions = {
			rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
			ignoredHtmlElements: [],
			interpretUnknownHtml: true,
		};
		Object.keys(overrides || {}).forEach(function(key) {
			currentOptions[key] = overrides[key];
		});
		return currentOptions;
	}
}