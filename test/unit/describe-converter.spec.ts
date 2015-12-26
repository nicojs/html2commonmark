import Converter = require('../../src/Converter');
import commonmark = require('commonmark');
import chai = require('chai');
let expect = chai.expect;

export = (description: string, htmlParser: HtmlParser) => {

    let write = (root: commonmark.Node) => console.log(new commonmark.XmlRenderer().render(root));

    describe(`${description}: Converter`, () => {
        describe('using rawHtmlElements: \'p\', \'some-stuff\', interpretUnknownHtml: false', () => {

            let sut: Converter;

            before(() => {
                sut = new Converter(htmlParser, { rawHtmlElements: ['p', 'some-stuff'], interpretUnknownHtml: false, ignoredHtmlElements: [] });
            });

            let pAndSomeStuff = '<p><some-stuff></some-stuff><p>';
            it(`should interpret '${pAndSomeStuff}' as raw html elements`, () => {
                let actualAst = sut.convert('<p><some-stuff></some-stuff><p>');
                expect(actualAst.type).to.be.equal('Document');
                let count = 0;
                for (let current = actualAst.firstChild; current; current = current.next) {
                    count++;
                    expect(current.type).to.be.equal('HtmlBlock');
                }
                expect(count).to.be.eq(4);
            });

            let unknownHtmlElements = '<random-element>some<str> html </str>and whitespaces</random-element>'
            it(`should interpret '${unknownHtmlElements}' as text`, () => {
                let actualAst = sut.convert(unknownHtmlElements);
                expect(actualAst.type).to.be.eq('Document');
                let count = 0;
                let literal = '';
                for (let current = actualAst.firstChild; current; current = current.next) {
                    count++;
                    expect(current.type).to.be.eq('Text');
                    literal += current.literal;
                }
                expect(count).to.be.eq(3);
                expect(literal).to.be.eq('somehtmland whitespaces');
            });
        });

        describe('using ignoredHtmlElements: \'p\', \'some-stuff\', interpretUnknownHtml: true', () => {

            let sut: Converter;

            before(() => {
                sut = new Converter(htmlParser, { ignoredHtmlElements: ['p', 'some-stuff'], interpretUnknownHtml: true, rawHtmlElements: [] });
            });

            let pAndSomeStuff = '<p><some-stuff></some-stuff><p>';
            it(`should interpret '${pAndSomeStuff}' as empty`, () => {
                let actualAst = sut.convert(pAndSomeStuff);
                expect(actualAst.type).to.be.eq('Document');
                expect(actualAst.firstChild).to.not.be.ok;
            });

            let randomElementPStrong = '<random-element><p><strong>strong</strong></p></random-element>';
            it(`should interpret ${randomElementPStrong} as <random-element><strong>strong</strong></random-element>`, () => {
                let actualAst = sut.convert(randomElementPStrong);
                expect(actualAst.type).to.be.eq('Document');
                expect(actualAst.firstChild.type).to.be.eq('HtmlBlock');
                expect(actualAst.firstChild.literal).to.be.eq('<random-element>');
                expect(actualAst.firstChild.next.type).to.be.eq('Strong');
                expect(actualAst.firstChild.next.firstChild.type).to.be.eq('Text');
                expect(actualAst.firstChild.next.firstChild.literal).to.be.eq('strong');
                expect(actualAst.firstChild.next.next.type).to.be.eq('HtmlBlock');
                expect(actualAst.firstChild.next.next.literal).to.be.eq('</random-element>');
            });
        });
    });
};