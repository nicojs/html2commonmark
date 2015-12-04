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
		return p.then(this.parseDomNode, deferred.error);
	}

	parseDomNode(htmlNode: Node): commonmark.Node {
		let walker = new DomWalker(htmlNode);
		let nodeConverter = new NodeConverter();
		let step: WalkingStep;
		let sibling: commonmark.Node, current: commonmark.Node, parent: commonmark.Node, root: commonmark.Node;
		while (step = walker.next()) {
			// console.log(`Current step: ${step.isEntering ? 'entering' : 'leaving'} ${step.node.nodeName} (${step.node.nodeType})`)
			if (step.isEntering) {
				let next = nodeConverter.convert(step.node);
				if (next) {
					current = next.node;
					if(!root){
						root = current;
					}
					if (current) {
						if (sibling) {
							current.insertAfter(sibling);
						} else if (parent) {
							parent.appendChild(current);
						} 
						// else {
						// 	// Root node
						// 	parent = current.node;
						// }
						// Progress to next node
						parent = current;
						sibling = null;
					} else {
						parent.literal = next.content;
					}
				}
			} else if (parent) {
				// exiting
				parent = parent.parent;
				sibling = parent;
			}
		}
		console.log(`returning: ${root.type}`);

		return root;
	}


}