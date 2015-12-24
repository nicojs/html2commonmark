import describeHtml2ast = require('../describe-commonmark-spec-html2ast');
import JSDomParser = require('../../../src/JSDomParser');

describeHtml2ast('From nodejs: Html => AST', new JSDomParser());