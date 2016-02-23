import MarkdownRenderer from '../../src/MarkdownRenderer';
import * as commonmark from 'commonmark';
import * as chai from 'chai';
import compareMD from './compare-md';
import {HtmlParser} from '../../src/Types';
let expect = chai.expect;

export default (description: string, htmlParser: HtmlParser) => {

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
        compareMD(parser.parse(expectedOutput), actualAst, htmlParser);
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
        
        describe('using default config', () =>{
           
           let sut: MarkdownRenderer;
           
           before(() => {
               sut = new MarkdownRenderer();
           });
           
           it('should not break when an empty CodeBlock occurs', () => {
               // Issue #14 https://github.com/nicojs/html2commonmark/issues/14
               let result = sut.render(createDocument(new commonmark.Node('CodeBlock')));
               expect(result).to.be.eq('``` \n```\n'); // Should look different, but for now its ok
           });
        });
    });
    
    function createDocument(node: commonmark.Node): commonmark.Node {
        let document = new commonmark.Node('Document');
        document.appendChild(node);
        return document;
    }
};