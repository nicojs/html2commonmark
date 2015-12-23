import tests = require('./read-commonmark-tests');
import Converter = require('../../src/Converter');
import commonmark = require('commonmark');
import compareMD = require('./compare-md');

export = (description: string, htmlParser: HtmlParser) => {
    let sut = new Converter(null);
    let commonmarkParser = new commonmark.Parser();
    let xmlWriter = new commonmark.XmlRenderer();
    let scoped = [185];
    var oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");
    var oneLineXml = (xml: string) => oneLine(xml.substr(85).replace(/>\n\s+</gm, '> <').replace(/>\n/gm, '>'));

    describe(description, () => {
        tests
            // .filter(t => scoped.indexOf(t.example) > -1)
            .filter(t => ['Block quotes', 'Tabs', 'Horizontal rules'].indexOf(t.section) > -1)
            .forEach(test => {
            let ast = commonmarkParser.parse(test.markdown);
            let astXml = oneLineXml(xmlWriter.render(ast));

            it(`test #${test.example}, section ${test.section}:\n(ast:) ${astXml}\n(md:)  ${oneLine(test.markdown)}`, () => {
                let actualMarkdown = sut.render(ast);
                console.log('actual output md: ', actualMarkdown);
                let actualAst = commonmarkParser.parse(actualMarkdown);
                compareMD.assertEqualTrees(ast, actualAst, htmlParser, true);             
            });
        });
    });
};