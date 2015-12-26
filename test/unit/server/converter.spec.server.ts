import describeConverterSpec = require('../describe-converter.spec');
import JSDomParser = require('../../../src/JSDomParser');

describeConverterSpec('From nodejs', new JSDomParser());