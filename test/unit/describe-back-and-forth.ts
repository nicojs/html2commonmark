import Converter from '../../src/Converter';
import Renderer from '../../src/MarkdownRenderer';
import * as commonmark from 'commonmark';
import compareMD from './compare-md';
import compareHtml from './compare-html';
import {HtmlParser} from '../../src/Types';
import {expect} from 'chai';

interface TestFile {
    url: string;
    exactMatch: boolean;
}

let files: [TestFile] = [
    {
        url: 'readme.md',
        exactMatch: false
    }, {
        url: 'test/unit/examples/list.md',
        exactMatch: true
    }];

export default (description: string, htmlParser: HtmlParser, fileRetriever: (url: string) => Promise<string>) => {

    let assertMarkdownBackAndForth = (input: string, exactMatch: boolean) => {
        var parser = new commonmark.Parser();
        var ast = parser.parse(input);
        var html = new commonmark.HtmlRenderer().render(parser.parse(input));
        var output = new Renderer().render(new Converter(htmlParser).convert(html));
        if (exactMatch) {
            expect(output.trim()).to.be.eq(input.replace('\r\n', '\n').trim());
        } else {
            compareMD(parser.parse(input), new Converter(htmlParser).convert(html), htmlParser);
        }
    };

    describe(`${description} - back and forth parsing`, () => {

        files.forEach(file => {
            describe(`for ${file.url} file`, function() {
                var input;

                beforeEach((done) => {
                    fileRetriever(file.url).then(content => {
                        input = content;
                        done();
                    }, done);
                });

                it('should result into the same thing', () => assertMarkdownBackAndForth(input, file.exactMatch));
            });

        });
    });
}
