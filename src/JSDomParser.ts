import jsdom = require('jsdom');

export = class JSDomParser implements HtmlParser {
    parse(html: string): HTMLElement {
        return jsdom.jsdom(`<html><body>${html}</body></html>`, { features: { FetchExternalResources: false, ProcessExternalResources: false } }).defaultView.document.body;
    }
}