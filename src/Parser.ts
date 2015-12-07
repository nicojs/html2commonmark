import jsdom = require('jsdom');
import DomWalker = require('./DomWalker');
import NodeConverter = require('./NodeConverter');
import commonmark = require('commonmark');

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

		jsdom.env(html, (error, window) => {
			if (error) {
				deferred.error(error);
			} else {
				deferred.resolve(window.document.body);
			}
		});
		return p.then(node => this.parseDomNode(node), deferred.error);
	}

	parseDomNode(htmlNode: Node): commonmark.Node {
		let skippedDomNodes: Array<Node> = [];
		let walker = new DomWalker(htmlNode);
		let step: WalkingStep;
		let current: commonmark.Node, parent: commonmark.Node;
		while (step = walker.next()) {
			console.log(`Current step: ${step.isEntering ? 'entering' : 'leaving'} ${step.domNode.nodeName} (${step.domNode.nodeType})`)
			if (step.isEntering) {
				let next = NodeConverter.convert(step.domNode);
				if (next) {
					current = next.node;
					if (current) {
						if (parent) {
							parent.appendChild(current);
						}
						// Progress to next node
						parent = current;
					} else {
						parent.literal = next.textContent;
						skippedDomNodes.push(step.domNode);
					}
				} else {
					console.log(`skipped ${step.domNode.nodeName}, data: "${step.domNode['data']}"`);
					skippedDomNodes.push(step.domNode);
				}
			} else {
				// exiting
				if (skippedDomNodes.indexOf(step.domNode) < 0) {
					current = parent;
					parent = current.parent;
				}
			}
		}

		return current;
	}


}