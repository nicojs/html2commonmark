import tests = require('./read-commonmark-tests');
import chai = require('chai');
import Parser = require('../../../src/Parser');
let sut = new Parser();

let commonmark = require('commonmark');

let expect = chai.expect;
let parser = new commonmark.Parser();

let assertEqual = (astExpected, astActual) => {
	let expectedWalker = astExpected.walker();
	let actualWalker = astExpected.walker();
	let expectedValue;
	while (expectedValue = expectedWalker.next()) {
		let actualValue = actualWalker.walk();
		expect(actualValue).to.be.ok;
		expect(actualValue.entering).to.be.equal(expectedValue.entering);
		expect(actualValue.node.type).to.be.equal(expectedValue.node.type);
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