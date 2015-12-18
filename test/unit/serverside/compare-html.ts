import chai = require('chai');
import jsdom = require('jsdom');
let GroupingReporter = require('dom-compare').GroupingReporter;
let compare = require('dom-compare').compare
let expect = chai.expect;

function wrapInDocument(htmlFragment: string){
	return `<html><body>${htmlFragment}</body></html>`;
}

export = (expectedHtml: string, actualHtml: string) => {
	let expectedBody = jsdom.jsdom(wrapInDocument(expectedHtml)).defaultView.document.body;
	let actualBody = jsdom.jsdom(wrapInDocument(actualHtml)).defaultView.document.body;
	let result = compare(expectedBody, actualBody, {compareComments: true, stripSpaces: true});
	let diff: string;
	if (!result.getResult()) {
		diff = `Expect: ${actualBody.outerHTML} to be: ${expectedBody.outerHTML}. `;
		diff += GroupingReporter.report(result);
	}
	expect(result.getResult(), diff).to.equal(true);
}
