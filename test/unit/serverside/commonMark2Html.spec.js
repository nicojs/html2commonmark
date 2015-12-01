/// <reference path="typings/tsd" />
var chai = require('chai');
var jsdom = require('jsdom');
var tests = require('./read-commonmark-tests');
var compare = require('dom-compare').compare;
var GroupingReporter = require('dom-compare').GroupingReporter;
var commonmark = require('commonmark');
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var expect = chai.expect;
function parse(html) {
    var deferred;
    var promise = new Promise(function (resolve, reject) {
        deferred = {
            resolve: resolve,
            reject: reject
        };
    });
    jsdom.env(html, function (er, w) {
        deferred.resolve(w.document.body);
    });
    return promise;
}
;
describe('Common mark 2 html', function () {
    tests.forEach(function (test) {
        it("test #" + test.example + ", section " + test.section + ": \"" + test.markdown + "\"", function (done) {
            var actual = writer.render(reader.parse(test.markdown));
            Promise.all([parse(test.html), parse(actual)]).then(function (results) {
                var expected = results[0];
                var actual = results[1];
                try {
                    var result = compare(expected, actual, { stripSpaces: true });
                    var diff;
                    if (!result.getResult()) {
                        diff = "Expect: " + expected.outerHTML + " to be: " + actual.outerHTML + ". ";
                        diff += GroupingReporter.report(result);
                    }
                    expect(result.getResult(), diff).to.equal(true);
                    done();
                }
                catch (error) {
                    done(error);
                }
            }, done);
        });
    });
});
