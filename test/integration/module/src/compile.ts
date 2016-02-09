import * as html2commonmark from 'html2commonmark';

console.log(new html2commonmark.Renderer().render(new html2commonmark.JSDomConverter().convert('<p> A <strong>piece</strong> of <em>text</em></p>') ));