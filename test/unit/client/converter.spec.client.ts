import describeConverterSpec = require('../describe-converter.spec');
import BrowserParser = require('../../../src/BrowserParser');

describeConverterSpec('From nodejs', new BrowserParser());