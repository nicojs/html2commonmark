import tests = require('./read-commonmark-tests');
import chai = require('chai');
import Parser = require('../../../src/Parser');
import commonmark = require('commonmark');
let sut = new Parser();


let expect = chai.expect;
let parser = new commonmark.Parser();

let assertEqual = (astExpected: commonmark.Node, astActual: commonmark.Node) => {
	let expectedWalker = astExpected.walker();
	let actualWalker = astActual.walker();
	let expectedValue: commonmark.WalkingStep;
	
	
	while (expectedValue = expectedWalker.next()) {
		var actualValue = actualWalker.next();
		// console.log(`verifying expected: ${expectedValue.node.type}/${expectedValue.node.literal} is ${actualValue.node.type }/${actualValue.node.literal}`);
		expect(actualValue).to.be.ok;
		['type', 'literal', 'info', 'level', 'title'].forEach
			(property => expect(actualValue.node[property]).to.be.equal(expectedValue.node[property]));
		if(expectedValue.node.type === 'list'){
			['listTight', 'listTight', 'listStart', 'listDilimiter'].forEach( prop => expect(actualValue.node[prop]).to.be.equal(expectedValue.node[prop]));
		}
		expect(actualValue.entering).to.be.equal(expectedValue.entering);
	}
}

describe('CommonMark => html', () => {

	tests.filter(t => t.example <= 1).forEach(test => {
		it.only(`test #${test.example}, section ${test.section}: "${test.html}"`, (done) => {
			sut.parse(test.html).then(result => {
				try {
					assertEqual(parser.parse(test.markdown), result);
					done();
				} catch (error) {
					done(error);
				}
			}, done);
		});
	});
});