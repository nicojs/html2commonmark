import JSDomConverter from '../../../src/JSDomConverter';
import {expect} from 'chai';

describe('JSDomConverter', () => {
    let sut: JSDomConverter;

    describe('when options are provided', () => {
        before(() => {
            sut = new JSDomConverter({interpretUnknownHtml: false});
        });

        it('should provide options to the Converter', () => {
            expect(sut.convert('<span></span>').firstChild).to.not.be.ok;
        });
    });
});