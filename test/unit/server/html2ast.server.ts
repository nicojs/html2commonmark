import describeHtml2ast = require('../describe-html2ast');
import JSDomParser = require('../../../src/JSDomParser');

describeHtml2ast('From nodejs: CommonMark => AST', new JSDomParser());