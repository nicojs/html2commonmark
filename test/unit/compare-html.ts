import * as chai from 'chai';
import {HtmlParser} from '../../src/Types';
let domCompare = require('dom-compare');
let GroupingReporter = domCompare.GroupingReporter;
let compare = domCompare.compare;
let expect = chai.expect;

export default (expectedHtml: string, actualHtml: string, parser: HtmlParser, logInfo?: boolean) => {
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
