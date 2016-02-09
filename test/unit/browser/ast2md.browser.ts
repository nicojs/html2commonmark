import describeHtml2ast from '../describe-commonmark-spec-ast2md';
import BrowserParser from '../../../src/BrowserParser';

describeHtml2ast('From nodejs: AST => CommonMark', new BrowserParser());