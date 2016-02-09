var html2commonmark = require('html2commonmark');
console.log(new html2commonmark.Renderer().render(new html2commonmark.JSDomConverter().convert('<p> A <strong>piece</strong> of <em>text</em></p>')));
//# sourceMappingURL=compile.js.map