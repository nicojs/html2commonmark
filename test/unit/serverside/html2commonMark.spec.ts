import tests = require('./read-commonmark-tests');
import chai = require('chai');
import Parser = require('../../../src/Parser');
import commonmark = require('commonmark');
let sut = new Parser();


let expect = chai.expect;
let parser = new commonmark.Parser();


function normalizeTree(root: commonmark.Node) {
	let walker = root.walker();
	let current: commonmark.WalkingStep;
	while (current = walker.next()) {
		let currentNode = current.node;
		if (currentNode.type === 'Text' && currentNode.next && currentNode.next.type === 'Text') {
			let newNode = new commonmark.Node('Text');
			currentNode.parent.appendChild(newNode);
			newNode.literal = currentNode.literal + currentNode.next.literal;
			currentNode.insertBefore(newNode);
			currentNode.next.unlink();
			currentNode.unlink();
			walker.resumeAt(newNode);
		}
	}
	// console.log('normalized: ', new commonmark['XmlRenderer']().render(root));
	return root;
}

let assertEqual = (astExpected: commonmark.Node, astActual: commonmark.Node) => {
	let expectedWalker = astExpected.walker();
	let actualWalker = astActual.walker();
	let expectedValue: commonmark.WalkingStep;

	while (expectedValue = expectedWalker.next()) {
		var actualValue = actualWalker.next();
		console.log(`verifying that: ${actualValue.node.type }/${actualValue.node.literal} is ${expectedValue.node.type}/${expectedValue.node.literal}`);
		expect(actualValue).to.be.ok;
		['type', 'literal', 'info', 'level', 'title'].forEach
			(prop => expect(actualValue.node[prop], `comparing ${prop} of ${expectedValue.node.type} ${actualValue.node.type}`).to.be.equal(expectedValue.node[prop]));
		if (expectedValue.node.type === 'list') {
			['listTight', 'listTight', 'listStart', 'listDilimiter'].forEach(prop => expect(actualValue.node[prop]).to.be.equal(expectedValue.node[prop]));
		}
		expect(actualValue.entering).to.be.equal(expectedValue.entering);
	}
}

describe('CommonMark => html', () => {
	// Var excluded: 7, 11
	var scoped = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];
	// var scoped = [11];
	
	tests.filter(t => scoped.indexOf(t.example) >= 0).forEach(test => {
		it(`test #${test.example}, section ${test.section}: "${test.html }" ==> "${test.markdown}"`, (done) => {
			sut.parse(test.html).then(result => {
				try {
					assertEqual(normalizeTree(parser.parse(test.markdown)), result);
					done();
				} catch (error) {
					done(error);
				}
			}, done);
		});
	});
});