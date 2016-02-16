import tests from './read-commonmark-tests';
import testOptions from './read-commonmark-spec-options';
import Converter from '../../src/Converter';
import * as commonmark from 'commonmark';
import compareMD from './compare-md';
import compareHtml from './compare-html';
import {HtmlParser, Html2AstOptions} from '../../src/Types';

export default (description: string, htmlParser: HtmlParser) => {
    let commonmarkParser = new commonmark.Parser();
    var htmlWriter = new commonmark.HtmlRenderer();
    var oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");

    describe(description, () => {

        tests.forEach(test => {
            let options = testOptions[test.markdown] || {};
            if (!options.testExcluded) {
                it(`test #${test.example}, section ${test.section}:\n(html:) ${oneLine(test.html)}\n(md:)   ${oneLine(test.markdown)}${options.testCompareHtmlOnly ? '\n(html:) ' + oneLine(test.html) : ''}`, () => {
                    let sut = new Converter(htmlParser, options);
                    let actualAst = sut.convert(test.html);
                    let expectedAst = commonmarkParser.parse(test.markdown);
                    if (options.testCompareHtmlOnly) {
                        let expectedHtml = htmlWriter.render(expectedAst);
                        let actualHtml = htmlWriter.render(actualAst);
                        compareHtml(expectedHtml, actualHtml, htmlParser);
                    } else {
                        compareMD(expectedAst, actualAst, htmlParser, false);
                    }
                });
            }
        });
    });
}