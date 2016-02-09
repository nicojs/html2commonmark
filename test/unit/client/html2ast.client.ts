import describeHtml2Ast from '../describe-commonmark-spec-html2ast';
import BrowserParser from '../../../src/BrowserParser';

describeHtml2Ast('From browser: Html => AST', new BrowserParser());
