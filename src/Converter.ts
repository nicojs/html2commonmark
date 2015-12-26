import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import convert = require('./NodeConversions');
import Util = require('./Util');

class Converter {

    private options: Html2AstOptions;

    constructor(private parser: HtmlParser, options?: Html2AstOptions) {
        this.options = Util.assign({
            rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
            ignoredHtmlElements: [],
            interpretUnknownHtml: true
        }, options);
    }

    convert(html: string): commonmark.Node {
        html = html.trim();
        return this.convertDomElement(this.parser.parse(html));
    }

    convertDomElement(htmlElement: HTMLElement): commonmark.Node {
        let walker = new DomWalker(htmlElement);
        let conversion = convert({ domWalker: walker, options: this.options });
        return conversion;
    }

}

export = Converter;