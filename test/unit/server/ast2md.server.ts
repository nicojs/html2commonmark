import describeHtml2ast from '../describe-commonmark-spec-ast2md';
import JSDomParser from '../../../src/JSDomParser';

describeHtml2ast('From nodejs: AST => CommonMark', new JSDomParser());