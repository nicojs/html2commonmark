var tests = require('./read-commonmark-tests');
var chai = require('chai');
var Parser = require('../../../src/Parser');
var sut = new Parser();
var commonmark = require('commonmark');
var expect = chai.expect;
var parser = new commonmark.Parser();
var assertEqual = function (astExpected, astActual) {
    var expectedWalker = astExpected.walker();
    var actualWalker = astExpected.walker();
    var expectedValue;
    while (expectedValue = expectedWalker.next()) {
        var actualValue = actualWalker.walk();
        expect(actualValue).to.be.ok;
        expect(actualValue.entering).to.be.equal(expectedValue.entering);
        expect(actualValue.node.type).to.be.equal(expectedValue.node.type);
    }
};
describe('CommonMark => html', function () {
    tests.filter(function (t) { return t.example <= 1; }).forEach(function (test) {
        it.only("test #" + test.example + ", section " + test.section + ": \"" + test.html + "\"", function (done) {
            sut.parse(test.html).then(function (result) {
                try {
                    assertEqual(parser.parse(test.markdown), result);
                    done();
                }
                catch (error) {
                    done(error);
                }
            }, done);
        });
    });
});
