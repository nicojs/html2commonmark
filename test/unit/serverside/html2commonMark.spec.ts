import tests = require('./read-commonmark-tests');
import Parser = require('../../../src/Parser');
import commonmark = require('commonmark');
import compareMD = require('./compare-md');
import compareHtml = require('./compare-html');

let sut = new Parser();
let parser = new commonmark.Parser();
var htmlWriter = new commonmark.HtmlRenderer();
let optionMap: {
	[index: number]: Html2MarkdownConversionOptions;
} = [];

var oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");

// More raw html nodes needed for these examples:
function setRawHtmlElements(examples: Array<number>, rawHtmlElements: Array<string>) {
	examples.forEach(n => {
		if (!optionMap[n]) {
			optionMap[n] = {};
		}
		optionMap[n].rawHtmlElements = rawHtmlElements;
	});
}
setRawHtmlElements([104], ['table', 'tbody', 'tr', 'td']);
setRawHtmlElements([105, 110], ['#text', 'a', 'div']);
setRawHtmlElements([111, 112, 114, 117], ['div', 'a']);
setRawHtmlElements([124], ['pre', 'code']);
setRawHtmlElements([141, 282, 292, 308, 437, 436, 559, 560, 561, 562, 577, 578, 589, 590], ['a']);
setRawHtmlElements([104], ['table', 'tbody', 'tr', 'td']);
setRawHtmlElements([119], ['i']);
setRawHtmlElements([435], ['img']);

// Some information during html parsing gets lost. For example: with not well-formed html
// For those examples we will not do a strict comparison of the abstract syntax tree, instead, we validate
// that the html we get back get's parsed the same way
var examplesOfWhichOnlyCompareHtmlResult = [106, 110, 111, 112, 120, 116, 134, 135, 137, 138, 141, 145, 286, 562, 569, 571, 574, 575];

// Too bad! These examples cannot be implemented with current parsing strategy
var excluded = [141, 562];

describe('CommonMark => html', () => {
	
	var excludedSections = [];
	var scoped: Array<number> = [];
	for (var i = 0; i < 600; i++) {
		if (excluded.indexOf(i) < 0) {
			scoped.push(i);
		}
	}
	tests.filter(t => scoped.indexOf(t.example) >= 0).forEach(test => {
		var compareHtmlOnly = examplesOfWhichOnlyCompareHtmlResult.indexOf(test.example) >= 0;
		it(`test #${test.example}, section ${test.section}:\n(html:) ${oneLine(test.html) }\n(md:)   ${oneLine(test.markdown) }${compareHtmlOnly ? '\n(html:) ' + oneLine(test.html) : ''}`, () => {
			let actualAst = sut.parse(test.html, optionMap[test.example]);
			let expectedAst = parser.parse(test.markdown);
			if (compareHtmlOnly) {
				let expectedHtml = htmlWriter.render(expectedAst);
				let actualHtml = htmlWriter.render(actualAst);
				compareHtml(expectedHtml, actualHtml);
			} else {
				compareMD.assertEqualTrees(expectedAst, actualAst, false);
			}
		});
	});
});