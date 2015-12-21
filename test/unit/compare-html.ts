import chai = require('chai');
let GroupingReporter = require('dom-compare').GroupingReporter;
let compare = require('dom-compare').compare
let expect = chai.expect;


export = (expectedHtml: string, actualHtml: string, parser: HtmlParser, logInfo?: boolean) => {
	let expectedBody = parser.parse(expectedHtml);
	let actualBody = parser.parse(actualHtml);
	if(logInfo){
		console.log('Expected: ', expectedBody.outerHTML);
		console.log('Actual: ', expectedBody.outerHTML);
	}
	
	let result = compare(expectedBody, actualBody, {compareComments: true, stripSpaces: true});
	let diff: string;
	if (!result.getResult()) {
		diff = `Expect: ${actualBody.outerHTML} to be: ${expectedBody.outerHTML}. `;
		diff += GroupingReporter.report(result);
	}
	expect(result.getResult(), diff).to.equal(true);
}
