'use strict';
let html2commonmark = require('html2commonmark');
let commonmark = require('commonmark');

let parser = new commonmark.Parser();
let htmlRenderer = new commonmark.HtmlRenderer();
let jsdomConverter = new html2commonmark.JSDomConverter();
let renderer = new html2commonmark.Renderer();

console.log(renderer.render(jsdomConverter.convert(htmlRenderer.render(parser.parse('this is `an inline` code')))));

