import Converter = require('./Converter');
import JSDomParser = require('./JSDomParser');

export = class JSDomConverter extends Converter {

    constructor() {
        super(new JSDomParser());
    }
}