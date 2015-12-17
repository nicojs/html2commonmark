import jsdom = require('jsdom');
import DomWalker = require('./DomWalker');
import commonmark = require('commonmark');
import AbstractNodeConversion = require('./NodeConversion');

export = class Parser {

	parse(html: string): Promise<any> {
		let deferred: any;
		let p = new Promise<any>((resolve, error) => {
			deferred = {
				resolve: resolve,
				error: error
			}
		});
		html = html.trim();

		jsdom.env( html, {features: {FetchExternalResources: false, ProcessExternalResources: false }}, (error, window) => {
			if (error) {
				deferred.error(error);
			} else {
				deferred.resolve(window.document.body);
			}
		});
		return p.then(node => this.parseDomNode(node), deferred.error);
	}
	
	parseDomNode(htmlNode: Node): commonmark.Node {
		let walker = new DomWalker(htmlNode);
		let conversion = AbstractNodeConversion.parse(walker.next(), walker);
		return conversion.execute();
	}
}