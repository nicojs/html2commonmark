import tests from './read-commonmark-tests';
import MarkdownRenderer from '../../src/MarkdownRenderer';
import * as commonmark from 'commonmark';
import compareMD, {CompareOptions} from './compare-md';
import {HtmlParser} from '../../src/Types';

interface TestOptions extends CompareOptions {
    testExcluded?: boolean;
}

export default (description: string, htmlParser: HtmlParser) => {
    let sut = new MarkdownRenderer();
    let commonmarkParser = new commonmark.Parser();
    let xmlWriter = new commonmark.XmlRenderer();
    
    // Too bad, we still need some tweeking
    let testOptions: { [markdown: string]: TestOptions } = {
        '1.      indented code\n\n   paragraph\n\n       more code\n': { testExcluded: true },
        '1.     indented code\n\n   paragraph\n\n       more code\n': { testExcluded: true },
        '&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n': { testExcluded: true },
        '1.  foo\n\n    - bar\n': { ignoreListTightness: true },
        '- a\n  - b\n\n    c\n- d\n': { ignoreListTightness: true }
    }

    var oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");
    var oneLineXml = (xml: string) => oneLine(xml.substr(85).replace(/>\n\s+</gm, '> <').replace(/>\n/gm, '>'));

    describe(description, () => {
        tests
            .forEach(test => {
                let options = testOptions[test.markdown] || {};
                if (!options.testExcluded) {
                    let ast = commonmarkParser.parse(test.markdown);
                    let astXml = oneLineXml(xmlWriter.render(ast));

                    it(`test #${test.example}, section ${test.section}:\n(ast:) ${astXml}\n(md:)  ${oneLine(test.markdown)}`, () => {
                        let actualMarkdown = sut.render(ast);
                        let actualAst = commonmarkParser.parse(actualMarkdown);
                        compareMD(ast, actualAst, htmlParser, options, false);
                    });
                }
            });
    });
};