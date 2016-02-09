import Converter from './Converter';
import BrowserParser from './BrowserParser';

export default class BrowserConverter extends Converter {

    constructor() {
        super(new BrowserParser());
    }
}