import Converter from './Converter';
import JSDomParser from './JSDomParser';

export default class JSDomConverter extends Converter {

    constructor() {
        super(new JSDomParser());
    }
}