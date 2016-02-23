(function () {
    var markdownEditor = document.getElementById('markdown-editor'),
        htmlEditor = document.getElementById('html-editor'),
        astEditor = document.getElementById('ast-editor'),
        presentationEditor = document.getElementById('presentation-editor'),
        htmlRenderer = new commonmark.HtmlRenderer(),
        astRenderer = new commonmark.XmlRenderer(),
        markdownParser = new commonmark.Parser(),
        htmlConverter = new html2commonmark.BrowserConverter(),
        markdownRenderer = new html2commonmark.Renderer();


    markdownEditor.addEventListener('keyup', markdownChanged);
    
    htmlEditor.addEventListener('keyup', function () {
        var html = htmlEditor.value;
        var ast = htmlConverter.convert(html);
        var markdown = markdownRenderer.render(ast);
        markdownEditor.value = markdown;
        presentationEditor.innerHTML = html;
        astEditor.value = astRenderer.render(ast);
    });
    
    function markdownChanged(){
        var markdown = markdownEditor.value;
        var ast = markdownParser.parse(markdown);
        var html = htmlRenderer.render(ast);
        htmlEditor.value = html;
        presentationEditor.innerHTML = html;
        astEditor.value = astRenderer.render(ast);
    }
    
    markdownEditor.value = "This is a paragraph\n\n1. An \n2. ordered\n3. list\n\n```javascript\nvar codeSample = true;\n```";
    markdownChanged();
})();
