import tests = require('./read-commonmark-tests');
import Parser = require('../../../src/Parser');
import commonmark = require('commonmark');
import compareMD = require('./compare-md');
import compareHtml = require('./compare-html');

let sut = new Parser();
let parser = new commonmark.Parser();
var htmlWriter = new commonmark.HtmlRenderer();

interface Html2MarkdownConversionOptionsWithAssertionOptions extends Html2MarkdownConversionOptions {
	assertionOptions?: compareMD.CompareOptions;
}

let optionMap: {
	[index: number]: Html2MarkdownConversionOptionsWithAssertionOptions;
} = [];


// More raw html nodes needed for these examples:
optionMap[104] = { rawHtmlElements: ['table', 'tbody', 'tr', 'td'] };
optionMap[105] = optionMap[110] =  { rawHtmlElements: ['#text', 'a', 'div'], };
optionMap[111] = optionMap[112] = optionMap[114] = optionMap[117] = { rawHtmlElements: ['div', 'a'] };
optionMap[119] = { rawHtmlElements: ['i'] };
optionMap[124] = { rawHtmlElements: ['pre', 'code'] };

// Html blocks section Rule 7
optionMap[123] = optionMap[477] = optionMap[489] = { assertionOptions: { useHtmlAliases: true } };

// Some information during html parsing gets lost. For example: with not well-formed html
// For those examples we will not do a strict comparison of the abstract syntax tree, instead, we validate
// that the html we get back get's parsed the same way
var examplesOfWhichOnlyCompareHtmlResult = [106, 110, 111, 112, 120, 116];

var oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");

describe('CommonMark => html', () => {
	var excluded = [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 282, 286, 292, 308, 435, 436, 437, 449, 559, 559, 560, 561, 562, 563, 569, 576 /* jsdom has trouble parsing CDATA tags */, 577, 578, 589, 590];
	var excludedSections = [];
	var scoped: Array<number> = [];
	for (var i = 0; i < 600; i++) {
		if (excluded.indexOf(i) < 0) {
			scoped.push(i);
		}
	}
	// scoped = [116];
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
				let assertionOptions;
				if (optionMap[test.example]) {
					assertionOptions = optionMap[test.example].assertionOptions;
				}
				// assertionOptions = assertionOptions || {};
				// assertionOptions.logInfo = true;
				compareMD.assertEqualTrees(expectedAst, actualAst, assertionOptions);
			}
		});
	});
});