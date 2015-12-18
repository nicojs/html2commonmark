import tests = require('./read-commonmark-tests');
import Parser = require('../../../src/Parser');
import commonmark = require('commonmark');
import compareMD = require('./compare-md');

let sut = new Parser();
let parser = new commonmark.Parser();

interface Html2MarkdownConversionOptionsWithAssertionOptions extends Html2MarkdownConversionOptions {
	assertionOptions?: { loseHtmlCompare?: boolean, logInfo?: boolean };
}

let optionMap: {
	[index: number]: Html2MarkdownConversionOptionsWithAssertionOptions;
} = [];

optionMap[104] = { rawHtmlElements: ['table', 'tbody', 'tr', 'td'] };
optionMap[105] = { rawHtmlElements: ['#text', 'a', 'div'], };

// Html blocks section Rule 7
optionMap[477] = optionMap[489] = { assertionOptions: { loseHtmlCompare: true } };

describe('CommonMark => html', () => {
	var excluded = [106, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 282, 286, 292, 308, 435, 436, 437, 449, 559, 559, 560, 561, 562, 563, 569, 576 /* jsdom has trouble parsing CDATA tags */, 577, 578, 589, 590];
	var excludedSections = [];
	var scoped: Array<number> = [];
	for (var i = 0; i < 600; i++) {
		if (excluded.indexOf(i) < 0) {
			scoped.push(i);
		}
	}
	// scoped = [489];
	tests.filter(t => scoped.indexOf(t.example) >= 0).forEach(test => {
		it(`test #${test.example}, section ${test.section}: "${test.html }" ==> "${test.markdown}"`, () => {
			let result = sut.parse(test.html, optionMap[test.example]);
			let assertionOptions;
			if (optionMap[test.example]) {
				assertionOptions = optionMap[test.example].assertionOptions;
			}
			assertionOptions = { logInfo: true, loseHtmlCompare: true };
			compareMD(parser.parse(test.markdown), result, assertionOptions);
		});
	});
});