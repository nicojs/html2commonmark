import describeHtml2ast = require('../describe-commonmark-spec-ast2md');
import JSDomParser = require('../../../src/JSDomParser');

describeHtml2ast('From nodejs: AST => CommonMark', new JSDomParser());