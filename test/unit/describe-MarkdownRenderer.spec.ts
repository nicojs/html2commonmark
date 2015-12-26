import MarkdownRenderer = require('../../src/MarkdownRenderer');
import commonmark = require('commonmark');
import chai = require('chai');
import compareMD = require('./compare-md');
let expect = chai.expect;

export = (description: string, htmlParser: HtmlParser) => {

    let oneLine = (line: string) => line.replace(/(\r\n|\n|\r)/gm, "\\n");
    let write = (root: commonmark.Node) => console.log(new commonmark.XmlRenderer().render(root));

    let arrangeActAssert = (sut: MarkdownRenderer, input: string, expectedOutput: string) => {
        // Arrange
        let parser = new commonmark.Parser();
        let expectedAst = parser.parse(input);
        
        // Act
        let actualMd = sut.render(expectedAst);
        
        // Assert
        let actualAst = parser.parse(actualMd);
        compareMD.assertEqualTrees(parser.parse(expectedOutput), actualAst, htmlParser);
    }

    describe(`${description}: MarkdownRenderer`, () => {
        let markdownWithSoftbreak = 'some text with\nsoftbreak';
        let markdownWithHardbreak = 'some text with\\\nhardbreak\n';
        describe('using preserveHardbreaks: false, preserveSoftbreaks: false', () => {

            let sut: MarkdownRenderer;

            before(() => {
                sut = new MarkdownRenderer({ preserveSoftbreaks: false, preserveHardbreaks: false });
            });

            it(`should remove softbreak in '${oneLine(markdownWithSoftbreak)}'`, () => {
                arrangeActAssert(sut, markdownWithSoftbreak, 'some text with softbreak');
            });
            it(`should remove hardbreak in '${oneLine(markdownWithHardbreak)}'`, () => {
                arrangeActAssert(sut, markdownWithHardbreak, 'some text with\nhardbreak');
            });
        });

        describe('using preserveHardbreaks: true, preserveSoftbreaks: true', () => {

            let sut: MarkdownRenderer;

            before(() => {
                sut = new MarkdownRenderer({ preserveSoftbreaks: true, preserveHardbreaks: true });
            });

            it(`should remove softbreak in '${oneLine(markdownWithSoftbreak)}'`, () => {
                arrangeActAssert(sut, markdownWithSoftbreak, 'some text with\nsoftbreak');
            });
            it(`should remove hardbreak in '${oneLine(markdownWithHardbreak)}'`, () => {
                arrangeActAssert(sut, markdownWithHardbreak, 'some text with\\\nhardbreak');
            });
        });
    });
};