import describeHtml2ast from '../describe-commonmark-spec-html2ast';
import JSDomParser from '../../../src/JSDomParser';

describeHtml2ast('From nodejs: Html => AST', new JSDomParser());