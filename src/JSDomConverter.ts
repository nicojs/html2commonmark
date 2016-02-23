import Converter from './Converter';
import JSDomParser from './JSDomParser';
import {Html2AstOptions} from './Types';

export default class JSDomConverter extends Converter {

    constructor(options?: Html2AstOptions) {
        super(new JSDomParser(), options);
    }
}