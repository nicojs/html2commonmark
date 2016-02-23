[![Build Status](https://travis-ci.org/nicojs/html2commonmark.svg)](https://travis-ci.org/nicojs/html2commonmark)

html2commonmark
===============
CommonMark is a rationalized version of Markdown syntax,
with a [spec][the spec] and BSD-licensed reference
implementations in C and JavaScript. The problem 

  [the spec]: http://spec.commonmark.org

  For more information, see <http://commonmark.org>.

This repository contains a JavaScript implementation for converting
html back to markdown using the same specification. It uses the same 
Abstract Syntax Tree (AST) as commonmark.js does (and thus has a runtime dependency on it).
It even implements all its (600+) examples as mocha unit tests to verify the conversion against the spec.
Runs in the browser or on the server using nodejs.

Live demo
-----------
See a live demo at https://nicojs.github.io/html2commonmark

Installing
-----------
You can install the library using `npm`:

    npm install html2commonmark --save

This package includes a dependency on commonmark.js.

For client-side use, you can include the `node_modules/html2commonmark/dist/browser/bundle.js`
on your web page. It exposes the global `html2commonmark` variable.

For server-side use, you can simply require it: `var html2commonmark = require('html2commonmark');`.

As this npm package is writen in typescript, you can also import the module if you're using `"moduleResolution": "node"`: `import * as html2commonmark from 'html2commonmark'`.
This will also work for the browser, but than you'll need a tool like [webpack](https://github.com/webpack/webpack) or [browserify](http://browserify.org/) 
to package it (instead of using the bundle `node_modules/html2commonmark/dist/browser/bundle.js`)
However: you will also need the commonmark typings in order for this to work (using tsd: `tsd install commonmark`);

Usage
-----

Here's a basic example:
```javascript
var converter = new html2commonmark.BrowserConverter();
// From nodejs: var converter = new html2commonmark.JSDomConverter();
var renderer = new html2commonmark.Renderer();
var ast = converter.convert('<p>This <i>is</i> <strong>awesome!</strong></p>');
var markdown = renderer.render(ast); // "This *is* **awesome\!**"
```

The `html2commonmark` object provides the following constructor functions:
* `html2commonmark.Converter`: can convert HTML DOM nodes to the AST nodes. 
    * _browser only_ `html2commonmark.BrowserConverter`: can convert HTML to AST nodes using the DOM parser of your browser
    * _server only_ `html2commonmark.JSDomConverter`: can convert HTML to AST nodes using the [JSDom parser](https://www.npmjs.com/package/jsdom) of your browser
* `html2commonmark.Renderer`: can convert the AST nodes to markdown.

The Converter's take an optional `option` parameter for configuring what to do with unknown html elements):
```javascript
new html2commonmark.BrowserConverter({ //  this should be html2commonmark.JSDomConverter in NodeJS
            rawHtmlElements: ['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead'],
            ignoredHtmlElements: ['custom-root', 'body'],
            interpretUnknownHtml: true
        });
```
The following options are supported:
* `rawHtmlElements`: A (case insensitive) whitelist of html elements which you want to interpret as raw html elements. Default:  `['div', 'table', 'td', 'tr', 'th', 'tbody', 'thead']` _note: when interpretUnknwonHtml = true, all unknown html nodes will be preserved._
* `ignoreHtmlElements`: A (case insensitive) blacklist of html elements to ignore (not interpret as raw html elements). Default: `['custom-root', 'body']`. _note: when interpretUnknwonHtml = false: all unknown html elements will be ignored_
* `interpretUnknownHtml`: Describes what to do with unknown html elements. Default: `true`

A more advanced example:
```javascript
// From nodejs: var converter = new html2commonmark.JSDomConverter();
var converter = new html2commonmark.BrowserConverter({interpretUnknownHtml: false});
var spanConverter = new html2commonmark.BrowserConverter({interpretUnknownHtml: false, rawHtmlElements: ['span']});

var renderer = new html2commonmark.Renderer();
var input = 'a <span>span</span> of <days>days</days>';
var ast = converter.convert(input);
var spanAst = spanConverter.convert(input);
var markdown = renderer.render(ast); // "a span of days"
var markdownWithSpan = renderer.render(spanAst); // "a <span>span</span> of days"
```


Limitations
----
The html2markdown uses an html parser. It uses the [JSDom parser](https://www.npmjs.com/package/jsdom) for nodejs and uses the parser of the browser for parsing on the client side. This means that some examples of the commonmark specifications are not implemented

Take example 141:
* Html
```html
<p>Foo
<a href="bar">
baz</p>
```
* Markdown
```markdown
Foo
<a href="bar">
baz
```
This html is a perfectly valid output of markdown (garbage in-garbage out). But because of our limitations of using the html parser JSDom, we cannot reproduce the exact same markdown.