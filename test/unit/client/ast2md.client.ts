import describeHtml2ast = require('../describe-ast2md');
import BrowserParser = require('../../../src/BrowserParser');

describeHtml2ast('From nodejs: AST => CommonMark', new BrowserParser());