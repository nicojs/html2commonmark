import describeMarkdownRenderer = require('../describe-MarkdownRenderer.spec');
import BrowserParser = require('../../../src/BrowserParser');

describeMarkdownRenderer('From browser', new BrowserParser());
