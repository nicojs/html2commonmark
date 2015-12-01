/// <reference path="typings/tsd" />

interface TestData {
	html: string;
	section: string;
	markdown: string;
	start_line: number;
	example: number;
	end_line: number;
}

var tests:[TestData] = require('../commonMarkTests.json');
export = tests;