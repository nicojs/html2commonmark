import Converter = require('../../src/Converter');
import Renderer = require('../../src/MarkdownRenderer');
import commonmark = require('commonmark');
import compareMD = require('./compare-md');
import compareHtml = require('./compare-html');

interface InputFile {
    description: string,
    content: Promise<string>
}

export = (description: string, htmlParser: HtmlParser, files: Array<InputFile>) => {

    let assertMarkdownBackAndForth = (input: string) => {
        var parser = new commonmark.Parser();
        var ast = parser.parse(input);
        var html = new commonmark.HtmlRenderer().render(parser.parse(input));
        var output = new Renderer().render(new Converter(htmlParser).convert(html));
        compareMD.assertEqualTrees(parser.parse(input), new Converter(htmlParser).convert(html), htmlParser);
    };

    describe(`${description} - back and forth parsing`, () => {

        files.forEach(file => {
            describe(`for ${file.description} file`, function() {
                var input;

                beforeEach((done) => {
                    file.content.then(content => {
                        input = content;
                        done();
                    }, done);
                });

                it('should result into the same thing', () => assertMarkdownBackAndForth(input));
            });

        });
    });
}
