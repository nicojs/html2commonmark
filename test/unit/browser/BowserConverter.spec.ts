import BrowserConverter from '../../../src/BrowserConverter';
import {expect} from 'chai';

describe('BrowserConverter', () => {
    let sut: BrowserConverter;

    describe('when options are provided', () => {
        before(() => {
            sut = new BrowserConverter({interpretUnknownHtml: false});
        });

        it('should provide options to the Converter', () => {
            expect(sut.convert('<span></span>').firstChild).to.not.be.ok;
        });
    });
});