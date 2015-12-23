import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');
import Util = require('./Util');

export = class Converter {

    constructor(private parser: HtmlParser) { }

    convert(html: string, options?: Html2AstOptions): commonmark.Node {
        html = html.trim();
        return this.convertDomElement(this.parser.parse(html), options);
    }

    convertDomElement(htmlElement: HTMLElement, options?: Html2AstOptions): commonmark.Node {
        options = Util.assign({
            rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
            ignoredHtmlElements: ['custom-root', 'body'],
            interpretUnknownHtml: true
        }, options);
        let walker = new DomWalker(htmlElement);
        let conversion = convert({ domWalker: walker, options: options });
        return conversion;
    }

}