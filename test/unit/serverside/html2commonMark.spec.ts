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
		let actualValue = actualWalker.next();
		console.log(`verifying expected: ${expectedValue.node.type} is ${actualValue.node.type }`);
		expect(actualValue).to.be.ok;
		expect(actualValue.node.type).to.be.equal(expectedValue.node.type);
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