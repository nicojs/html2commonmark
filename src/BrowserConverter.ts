import Converter from './Converter';
import BrowserParser from './BrowserParser';
import {Html2AstOptions} from './Types';

export default class BrowserConverter extends Converter {

    constructor(options?: Html2AstOptions) {
        super(new BrowserParser(), options);
    }
}