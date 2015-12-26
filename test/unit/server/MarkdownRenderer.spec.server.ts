import describeMarkdownRenderer = require('../describe-MarkdownRenderer.spec');
import JSDomParser = require('../../../src/JSDomParser');

describeMarkdownRenderer('From browser', new JSDomParser());
