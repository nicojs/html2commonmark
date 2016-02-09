
describe('on the client', function () {

    describe('using BrowserConverter', function () {
        it('should be able to parse html to markdown', function () {
            var ast = new html2commonmark.BrowserConverter().convert('<i>mark</i><strong>down</strong>');
            expect(new html2commonmark.Renderer().render(ast)).toBe('*mark***down**\n');
        });
    });
    
    describe('using Converter', function () {
        it('should be able to parse html to markdown', function () {
            var ast = new html2commonmark.Converter({
                parse: function(html){
                    var root = document.createElement('custom-root');
                    root.innerHTML = html;
                    return root;
                }
            } ).convert('<i>mark</i><strong>down</strong>');
            expect(new html2commonmark.Renderer().render(ast)).toBe('*mark***down**\n');
        });
    });
});