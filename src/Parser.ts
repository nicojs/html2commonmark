import jsdom = require('jsdom');

export = class Parser {

	parse(html: string): Promise<any> {
		let deferred: any;
		let p = new Promise<any>((resolve, error) => {
			deferred = {
				resolve: resolve,
				error: error
			}
		});

		jsdom.env(html, (error, window) => {
			if (error) {
				deferred.error(error);
			} else {
				deferred.resolve(window.document.body);
			}
		});
		return p.then(this.parseDomNode, deferred.error);
	}
	
	parseDomNode(node){
		return node;
	}
}