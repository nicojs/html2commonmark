var expect = require('chai').expect;
var html2commonmark = require('html2commonmark');
var jsdom = require('jsdom');

describe('on the server', function () {

    describe('using JSDomConverter', function () {
        it('should be able to parse html to markdown', function () {
            var ast = new html2commonmark.JSDomConverter().convert('<i>mark</i><strong>down</strong>');
            expect(new html2commonmark.Renderer().render(ast)).to.be.equal('*mark***down**\n');
        });
    });
});