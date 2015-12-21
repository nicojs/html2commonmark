import describeHtml2Ast = require('../describe-html2ast');
import BrowserParser = require('../../../src/BrowserParser');

describeHtml2Ast('From browser: CommonMark => AST', new BrowserParser());
