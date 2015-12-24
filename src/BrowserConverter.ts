import Converter = require('./Converter');
import BrowserParser = require('./BrowserParser');

export = class BrowserConverter extends Converter {

    constructor() {
        super(new BrowserParser());
    }
}