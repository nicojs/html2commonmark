import chai = require('chai');
import jsdom = require('jsdom');
let GroupingReporter = require('dom-compare').GroupingReporter;
let compare = require('dom-compare').compare
let expect = chai.expect;

export = (expectedHtml: string, actualHtml: string) => {
	let expectedBody = jsdom.jsdom(expectedHtml).defaultView.document.body;
	let actualBody = jsdom.jsdom(actualHtml).defaultView.document.body;
	let result = compare(expectedBody, actualBody);
	let diff: string;
	if (!result.getResult()) {
		diff = `Expect: ${expectedBody.outerHTML} to be: ${actualBody.outerHTML}. `;
		diff += GroupingReporter.report(result);
	}
	expect(result.getResult(), diff).to.equal(true);
}
