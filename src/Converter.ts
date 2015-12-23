import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');
import CommonmarkEvent = require('./tomd/CommonmarkEvent');

import Renderer = require('./tomd/Renderer');

export = class Converter {

    constructor(private parser: HtmlParser) { }

    convert(html: string, options?: Html2MarkdownConversionOptions): commonmark.Node {
        html = html.trim();
        return this.convertDomElement(this.parser.parse(html), options);
    }

    convertDomElement(htmlElement: HTMLElement, options?: Html2MarkdownConversionOptions): commonmark.Node {
        options = this.overrideDefaults(options);
        let walker = new DomWalker(htmlElement);
        let conversion = convert({ domWalker: walker, options: options });
        return conversion;
    }

    render(node: commonmark.Node): string {
        let r = new Renderer(this.overrideDefaults({}));
        return r.render(node, 1, 100);
    }

    private overrideDefaults(overrides: Html2MarkdownConversionOptions) {
        var currentOptions: Html2MarkdownConversionOptions = {
            rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
            ignoredHtmlElements: ['custom-root', 'body'],
            interpretUnknownHtml: true,
            preserveSoftbreaks: true
        };
        Object.keys(overrides || {}).forEach(function(key) {
            currentOptions[key] = overrides[key];
        });
        return currentOptions;
    }

}