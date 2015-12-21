import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');

export = class Converter {

    constructor(private parser: HtmlParser){}

	convert(html: string, options?: Html2MarkdownConversionOptions): commonmark.Node {
		html = html.trim();
		return this.convertDomElement(this.parser.parse(html), options);
	}

	convertDomElement(htmlElement: HTMLElement, options?: Html2MarkdownConversionOptions): commonmark.Node {
		options = this.overrideDefaults(options);
		let walker = new DomWalker(htmlElement);
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