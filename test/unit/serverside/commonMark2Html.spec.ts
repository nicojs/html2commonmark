/// <reference path="typings/tsd" />
import chai = require('chai');
import jsdom = require('jsdom');
import tests = require('./read-commonmark-tests');
let compare = require('dom-compare').compare;
let GroupingReporter = require('dom-compare').GroupingReporter;
let commonmark = require('commonmark');

let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();
let expect = chai.expect;

function parse(html: string): PromiseLike<HTMLElement> {
	let deferred;
	let promise = new Promise<HTMLElement>((resolve, reject) => {
		deferred = {
			resolve: resolve,
			reject: reject
		};
	});
	jsdom.env(html, function(er, w) {
		deferred.resolve(w.document.body);
	});
	return promise;
};


describe('Common mark 2 html', () => {

	tests.forEach(test => {
		it(`test #${test.example}, section ${test.section}: "${test.markdown}"`, (done) => {
			let actual = writer.render(reader.parse(test.markdown));
			Promise.all([parse(test.html), parse(actual)]).then(results => {
				let expected = results[0];
				let actual = results[1];
				try {
					let result = compare(expected, actual, { stripSpaces: true });
					let diff: string;
					if(!result.getResult()){
						diff = `Expect: ${expected.outerHTML} to be: ${actual.outerHTML}. `;
						diff += GroupingReporter.report(result);
					}
					expect(result.getResult(), diff).to.equal(true);
					done();
				} catch (error) {
					done(error);
				}

			}, done);
		});
	});

});

