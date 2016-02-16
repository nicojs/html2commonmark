export interface TestData {
	html: string;
	section: string;
	markdown: string;
	start_line: number;
	example: number;
	end_line: number;
}

let tests: [TestData] = [
  {
    "end_line": 270,
    "example": 1,
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "start_line": 265,
    "section": "Tabs",
    "markdown": "\tfoo\tbaz\t\tbim\n"
  },
  {
    "end_line": 278,
    "example": 2,
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "start_line": 273,
    "section": "Tabs",
    "markdown": "  \tfoo\tbaz\t\tbim\n"
  },
  {
    "end_line": 288,
    "example": 3,
    "html": "<pre><code>a\ta\nὐ\ta\n</code></pre>\n",
    "start_line": 281,
    "section": "Tabs",
    "markdown": "    a\ta\n    ὐ\ta\n"
  },
  {
    "end_line": 302,
    "example": 4,
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "start_line": 291,
    "section": "Tabs",
    "markdown": "  - foo\n\n\tbar\n"
  },
  {
    "end_line": 311,
    "example": 5,
    "html": "<blockquote>\n<p>foo\tbar</p>\n</blockquote>\n",
    "start_line": 305,
    "section": "Tabs",
    "markdown": ">\tfoo\tbar\n"
  },
  {
    "end_line": 321,
    "example": 6,
    "html": "<pre><code>foo\nbar\n</code></pre>\n",
    "start_line": 314,
    "section": "Tabs",
    "markdown": "    foo\n\tbar\n"
  },
  {
    "end_line": 353,
    "example": 7,
    "html": "<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n",
    "start_line": 345,
    "section": "Precedence",
    "markdown": "- `one\n- two`\n"
  },
  {
    "end_line": 392,
    "example": 8,
    "html": "<hr />\n<hr />\n<hr />\n",
    "start_line": 384,
    "section": "Thematic breaks",
    "markdown": "***\n---\n___\n"
  },
  {
    "end_line": 401,
    "example": 9,
    "html": "<p>+++</p>\n",
    "start_line": 397,
    "section": "Thematic breaks",
    "markdown": "+++\n"
  },
  {
    "end_line": 408,
    "example": 10,
    "html": "<p>===</p>\n",
    "start_line": 404,
    "section": "Thematic breaks",
    "markdown": "===\n"
  },
  {
    "end_line": 421,
    "example": 11,
    "html": "<p>--\n**\n__</p>\n",
    "start_line": 413,
    "section": "Thematic breaks",
    "markdown": "--\n**\n__\n"
  },
  {
    "end_line": 434,
    "example": 12,
    "html": "<hr />\n<hr />\n<hr />\n",
    "start_line": 426,
    "section": "Thematic breaks",
    "markdown": " ***\n  ***\n   ***\n"
  },
  {
    "end_line": 444,
    "example": 13,
    "html": "<pre><code>***\n</code></pre>\n",
    "start_line": 439,
    "section": "Thematic breaks",
    "markdown": "    ***\n"
  },
  {
    "end_line": 453,
    "example": 14,
    "html": "<p>Foo\n***</p>\n",
    "start_line": 447,
    "section": "Thematic breaks",
    "markdown": "Foo\n    ***\n"
  },
  {
    "end_line": 462,
    "example": 15,
    "html": "<hr />\n",
    "start_line": 458,
    "section": "Thematic breaks",
    "markdown": "_____________________________________\n"
  },
  {
    "end_line": 471,
    "example": 16,
    "html": "<hr />\n",
    "start_line": 467,
    "section": "Thematic breaks",
    "markdown": " - - -\n"
  },
  {
    "end_line": 478,
    "example": 17,
    "html": "<hr />\n",
    "start_line": 474,
    "section": "Thematic breaks",
    "markdown": " **  * ** * ** * **\n"
  },
  {
    "end_line": 485,
    "example": 18,
    "html": "<hr />\n",
    "start_line": 481,
    "section": "Thematic breaks",
    "markdown": "-     -      -      -\n"
  },
  {
    "end_line": 494,
    "example": 19,
    "html": "<hr />\n",
    "start_line": 490,
    "section": "Thematic breaks",
    "markdown": "- - - -    \n"
  },
  {
    "end_line": 509,
    "example": 20,
    "html": "<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n",
    "start_line": 499,
    "section": "Thematic breaks",
    "markdown": "_ _ _ _ a\n\na------\n\n---a---\n"
  },
  {
    "end_line": 519,
    "example": 21,
    "html": "<p><em>-</em></p>\n",
    "start_line": 515,
    "section": "Thematic breaks",
    "markdown": " *-*\n"
  },
  {
    "end_line": 536,
    "example": 22,
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n",
    "start_line": 524,
    "section": "Thematic breaks",
    "markdown": "- foo\n***\n- bar\n"
  },
  {
    "end_line": 549,
    "example": 23,
    "html": "<p>Foo</p>\n<hr />\n<p>bar</p>\n",
    "start_line": 541,
    "section": "Thematic breaks",
    "markdown": "Foo\n***\nbar\n"
  },
  {
    "end_line": 565,
    "example": 24,
    "html": "<h2>Foo</h2>\n<p>bar</p>\n",
    "start_line": 558,
    "section": "Thematic breaks",
    "markdown": "Foo\n---\nbar\n"
  },
  {
    "end_line": 583,
    "example": 25,
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n",
    "start_line": 571,
    "section": "Thematic breaks",
    "markdown": "* Foo\n* * *\n* Bar\n"
  },
  {
    "end_line": 598,
    "example": 26,
    "html": "<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n",
    "start_line": 588,
    "section": "Thematic breaks",
    "markdown": "- Foo\n- * * *\n"
  },
  {
    "end_line": 631,
    "example": 27,
    "html": "<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n",
    "start_line": 617,
    "section": "ATX headings",
    "markdown": "# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n"
  },
  {
    "end_line": 640,
    "example": 28,
    "html": "<p>####### foo</p>\n",
    "start_line": 636,
    "section": "ATX headings",
    "markdown": "####### foo\n"
  },
  {
    "end_line": 658,
    "example": 29,
    "html": "<p>#5 bolt</p>\n<p>#hashtag</p>\n",
    "start_line": 651,
    "section": "ATX headings",
    "markdown": "#5 bolt\n\n#hashtag\n"
  },
  {
    "end_line": 667,
    "example": 30,
    "html": "<p>#\tfoo</p>\n",
    "start_line": 663,
    "section": "ATX headings",
    "markdown": "#\tfoo\n"
  },
  {
    "end_line": 676,
    "example": 31,
    "html": "<p>## foo</p>\n",
    "start_line": 672,
    "section": "ATX headings",
    "markdown": "\\## foo\n"
  },
  {
    "end_line": 685,
    "example": 32,
    "html": "<h1>foo <em>bar</em> *baz*</h1>\n",
    "start_line": 681,
    "section": "ATX headings",
    "markdown": "# foo *bar* \\*baz\\*\n"
  },
  {
    "end_line": 694,
    "example": 33,
    "html": "<h1>foo</h1>\n",
    "start_line": 690,
    "section": "ATX headings",
    "markdown": "#                  foo                     \n"
  },
  {
    "end_line": 707,
    "example": 34,
    "html": "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n",
    "start_line": 699,
    "section": "ATX headings",
    "markdown": " ### foo\n  ## foo\n   # foo\n"
  },
  {
    "end_line": 717,
    "example": 35,
    "html": "<pre><code># foo\n</code></pre>\n",
    "start_line": 712,
    "section": "ATX headings",
    "markdown": "    # foo\n"
  },
  {
    "end_line": 726,
    "example": 36,
    "html": "<p>foo\n# bar</p>\n",
    "start_line": 720,
    "section": "ATX headings",
    "markdown": "foo\n    # bar\n"
  },
  {
    "end_line": 737,
    "example": 37,
    "html": "<h2>foo</h2>\n<h3>bar</h3>\n",
    "start_line": 731,
    "section": "ATX headings",
    "markdown": "## foo ##\n  ###   bar    ###\n"
  },
  {
    "end_line": 748,
    "example": 38,
    "html": "<h1>foo</h1>\n<h5>foo</h5>\n",
    "start_line": 742,
    "section": "ATX headings",
    "markdown": "# foo ##################################\n##### foo ##\n"
  },
  {
    "end_line": 757,
    "example": 39,
    "html": "<h3>foo</h3>\n",
    "start_line": 753,
    "section": "ATX headings",
    "markdown": "### foo ###     \n"
  },
  {
    "end_line": 768,
    "example": 40,
    "html": "<h3>foo ### b</h3>\n",
    "start_line": 764,
    "section": "ATX headings",
    "markdown": "### foo ### b\n"
  },
  {
    "end_line": 777,
    "example": 41,
    "html": "<h1>foo#</h1>\n",
    "start_line": 773,
    "section": "ATX headings",
    "markdown": "# foo#\n"
  },
  {
    "end_line": 791,
    "example": 42,
    "html": "<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n",
    "start_line": 783,
    "section": "ATX headings",
    "markdown": "### foo \\###\n## foo #\\##\n# foo \\#\n"
  },
  {
    "end_line": 805,
    "example": 43,
    "html": "<hr />\n<h2>foo</h2>\n<hr />\n",
    "start_line": 797,
    "section": "ATX headings",
    "markdown": "****\n## foo\n****\n"
  },
  {
    "end_line": 816,
    "example": 44,
    "html": "<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n",
    "start_line": 808,
    "section": "ATX headings",
    "markdown": "Foo bar\n# baz\nBar foo\n"
  },
  {
    "end_line": 829,
    "example": 45,
    "html": "<h2></h2>\n<h1></h1>\n<h3></h3>\n",
    "start_line": 821,
    "section": "ATX headings",
    "markdown": "## \n#\n### ###\n"
  },
  {
    "end_line": 873,
    "example": 46,
    "html": "<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n",
    "start_line": 864,
    "section": "Setext headings",
    "markdown": "Foo *bar*\n=========\n\nFoo *bar*\n---------\n"
  },
  {
    "end_line": 885,
    "example": 47,
    "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
    "start_line": 878,
    "section": "Setext headings",
    "markdown": "Foo *bar\nbaz*\n====\n"
  },
  {
    "end_line": 899,
    "example": 48,
    "html": "<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "start_line": 890,
    "section": "Setext headings",
    "markdown": "Foo\n-------------------------\n\nFoo\n=\n"
  },
  {
    "end_line": 918,
    "example": 49,
    "html": "<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "start_line": 905,
    "section": "Setext headings",
    "markdown": "   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n"
  },
  {
    "end_line": 936,
    "example": 50,
    "html": "<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n",
    "start_line": 923,
    "section": "Setext headings",
    "markdown": "    Foo\n    ---\n\n    Foo\n---\n"
  },
  {
    "end_line": 947,
    "example": 51,
    "html": "<h2>Foo</h2>\n",
    "start_line": 942,
    "section": "Setext headings",
    "markdown": "Foo\n   ----      \n"
  },
  {
    "end_line": 958,
    "example": 52,
    "html": "<p>Foo\n---</p>\n",
    "start_line": 952,
    "section": "Setext headings",
    "markdown": "Foo\n    ---\n"
  },
  {
    "end_line": 974,
    "example": 53,
    "html": "<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n",
    "start_line": 963,
    "section": "Setext headings",
    "markdown": "Foo\n= =\n\nFoo\n--- -\n"
  },
  {
    "end_line": 984,
    "example": 54,
    "html": "<h2>Foo</h2>\n",
    "start_line": 979,
    "section": "Setext headings",
    "markdown": "Foo  \n-----\n"
  },
  {
    "end_line": 994,
    "example": 55,
    "html": "<h2>Foo\\</h2>\n",
    "start_line": 989,
    "section": "Setext headings",
    "markdown": "Foo\\\n----\n"
  },
  {
    "end_line": 1013,
    "example": 56,
    "html": "<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n",
    "start_line": 1000,
    "section": "Setext headings",
    "markdown": "`Foo\n----\n`\n\n<a title=\"a lot\n---\nof dashes\"/>\n"
  },
  {
    "end_line": 1027,
    "example": 57,
    "html": "<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n",
    "start_line": 1019,
    "section": "Setext headings",
    "markdown": "> Foo\n---\n"
  },
  {
    "end_line": 1040,
    "example": 58,
    "html": "<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n",
    "start_line": 1030,
    "section": "Setext headings",
    "markdown": "> foo\nbar\n===\n"
  },
  {
    "end_line": 1051,
    "example": 59,
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n",
    "start_line": 1043,
    "section": "Setext headings",
    "markdown": "- Foo\n---\n"
  },
  {
    "end_line": 1065,
    "example": 60,
    "html": "<h2>Foo\nBar</h2>\n",
    "start_line": 1058,
    "section": "Setext headings",
    "markdown": "Foo\nBar\n---\n"
  },
  {
    "end_line": 1083,
    "example": 61,
    "html": "<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n",
    "start_line": 1071,
    "section": "Setext headings",
    "markdown": "---\nFoo\n---\nBar\n---\nBaz\n"
  },
  {
    "end_line": 1093,
    "example": 62,
    "html": "<p>====</p>\n",
    "start_line": 1088,
    "section": "Setext headings",
    "markdown": "\n====\n"
  },
  {
    "end_line": 1106,
    "example": 63,
    "html": "<hr />\n<hr />\n",
    "start_line": 1100,
    "section": "Setext headings",
    "markdown": "---\n---\n"
  },
  {
    "end_line": 1117,
    "example": 64,
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n",
    "start_line": 1109,
    "section": "Setext headings",
    "markdown": "- foo\n-----\n"
  },
  {
    "end_line": 1127,
    "example": 65,
    "html": "<pre><code>foo\n</code></pre>\n<hr />\n",
    "start_line": 1120,
    "section": "Setext headings",
    "markdown": "    foo\n---\n"
  },
  {
    "end_line": 1138,
    "example": 66,
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "start_line": 1130,
    "section": "Setext headings",
    "markdown": "> foo\n-----\n"
  },
  {
    "end_line": 1149,
    "example": 67,
    "html": "<h2>&gt; foo</h2>\n",
    "start_line": 1144,
    "section": "Setext headings",
    "markdown": "\\> foo\n------\n"
  },
  {
    "end_line": 1185,
    "example": 68,
    "html": "<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n",
    "start_line": 1175,
    "section": "Setext headings",
    "markdown": "Foo\n\nbar\n---\nbaz\n"
  },
  {
    "end_line": 1203,
    "example": 69,
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "start_line": 1191,
    "section": "Setext headings",
    "markdown": "Foo\nbar\n\n---\n\nbaz\n"
  },
  {
    "end_line": 1219,
    "example": 70,
    "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
    "start_line": 1209,
    "section": "Setext headings",
    "markdown": "Foo\nbar\n* * *\nbaz\n"
  },
  {
    "end_line": 1234,
    "example": 71,
    "html": "<p>Foo\nbar\n---\nbaz</p>\n",
    "start_line": 1224,
    "section": "Setext headings",
    "markdown": "Foo\nbar\n\\---\nbaz\n"
  },
  {
    "end_line": 1259,
    "example": 72,
    "html": "<pre><code>a simple\n  indented code block\n</code></pre>\n",
    "start_line": 1252,
    "section": "Indented code blocks",
    "markdown": "    a simple\n      indented code block\n"
  },
  {
    "end_line": 1277,
    "example": 73,
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "start_line": 1266,
    "section": "Indented code blocks",
    "markdown": "  - foo\n\n    bar\n"
  },
  {
    "end_line": 1293,
    "example": 74,
    "html": "<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "start_line": 1280,
    "section": "Indented code blocks",
    "markdown": "1.  foo\n\n    - bar\n"
  },
  {
    "end_line": 1311,
    "example": 75,
    "html": "<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n",
    "start_line": 1300,
    "section": "Indented code blocks",
    "markdown": "    <a/>\n    *hi*\n\n    - one\n"
  },
  {
    "end_line": 1333,
    "example": 76,
    "html": "<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n",
    "start_line": 1316,
    "section": "Indented code blocks",
    "markdown": "    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n"
  },
  {
    "end_line": 1348,
    "example": 77,
    "html": "<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n",
    "start_line": 1339,
    "section": "Indented code blocks",
    "markdown": "    chunk1\n      \n      chunk2\n"
  },
  {
    "end_line": 1361,
    "example": 78,
    "html": "<p>Foo\nbar</p>\n",
    "start_line": 1354,
    "section": "Indented code blocks",
    "markdown": "Foo\n    bar\n\n"
  },
  {
    "end_line": 1375,
    "example": 79,
    "html": "<pre><code>foo\n</code></pre>\n<p>bar</p>\n",
    "start_line": 1368,
    "section": "Indented code blocks",
    "markdown": "    foo\nbar\n"
  },
  {
    "end_line": 1396,
    "example": 80,
    "html": "<h1>Heading</h1>\n<pre><code>foo\n</code></pre>\n<h2>Heading</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n",
    "start_line": 1381,
    "section": "Indented code blocks",
    "markdown": "# Heading\n    foo\nHeading\n------\n    foo\n----\n"
  },
  {
    "end_line": 1408,
    "example": 81,
    "html": "<pre><code>    foo\nbar\n</code></pre>\n",
    "start_line": 1401,
    "section": "Indented code blocks",
    "markdown": "        foo\n    bar\n"
  },
  {
    "end_line": 1423,
    "example": 82,
    "html": "<pre><code>foo\n</code></pre>\n",
    "start_line": 1414,
    "section": "Indented code blocks",
    "markdown": "\n    \n    foo\n    \n\n"
  },
  {
    "end_line": 1433,
    "example": 83,
    "html": "<pre><code>foo  \n</code></pre>\n",
    "start_line": 1428,
    "section": "Indented code blocks",
    "markdown": "    foo  \n"
  },
  {
    "end_line": 1492,
    "example": 84,
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "start_line": 1483,
    "section": "Fenced code blocks",
    "markdown": "```\n<\n >\n```\n"
  },
  {
    "end_line": 1506,
    "example": 85,
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "start_line": 1497,
    "section": "Fenced code blocks",
    "markdown": "~~~\n<\n >\n~~~\n"
  },
  {
    "end_line": 1521,
    "example": 86,
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "start_line": 1512,
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n~~~\n```\n"
  },
  {
    "end_line": 1533,
    "example": 87,
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "start_line": 1524,
    "section": "Fenced code blocks",
    "markdown": "~~~\naaa\n```\n~~~\n"
  },
  {
    "end_line": 1547,
    "example": 88,
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "start_line": 1538,
    "section": "Fenced code blocks",
    "markdown": "````\naaa\n```\n``````\n"
  },
  {
    "end_line": 1559,
    "example": 89,
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "start_line": 1550,
    "section": "Fenced code blocks",
    "markdown": "~~~~\naaa\n~~~\n~~~~\n"
  },
  {
    "end_line": 1569,
    "example": 90,
    "html": "<pre><code></code></pre>\n",
    "start_line": 1565,
    "section": "Fenced code blocks",
    "markdown": "```\n"
  },
  {
    "end_line": 1582,
    "example": 91,
    "html": "<pre><code>\n```\naaa\n</code></pre>\n",
    "start_line": 1572,
    "section": "Fenced code blocks",
    "markdown": "`````\n\n```\naaa\n"
  },
  {
    "end_line": 1596,
    "example": 92,
    "html": "<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n",
    "start_line": 1585,
    "section": "Fenced code blocks",
    "markdown": "> ```\n> aaa\n\nbbb\n"
  },
  {
    "end_line": 1610,
    "example": 93,
    "html": "<pre><code>\n  \n</code></pre>\n",
    "start_line": 1601,
    "section": "Fenced code blocks",
    "markdown": "```\n\n  \n```\n"
  },
  {
    "end_line": 1620,
    "example": 94,
    "html": "<pre><code></code></pre>\n",
    "start_line": 1615,
    "section": "Fenced code blocks",
    "markdown": "```\n```\n"
  },
  {
    "end_line": 1636,
    "example": 95,
    "html": "<pre><code>aaa\naaa\n</code></pre>\n",
    "start_line": 1627,
    "section": "Fenced code blocks",
    "markdown": " ```\n aaa\naaa\n```\n"
  },
  {
    "end_line": 1650,
    "example": 96,
    "html": "<pre><code>aaa\naaa\naaa\n</code></pre>\n",
    "start_line": 1639,
    "section": "Fenced code blocks",
    "markdown": "  ```\naaa\n  aaa\naaa\n  ```\n"
  },
  {
    "end_line": 1664,
    "example": 97,
    "html": "<pre><code>aaa\n aaa\naaa\n</code></pre>\n",
    "start_line": 1653,
    "section": "Fenced code blocks",
    "markdown": "   ```\n   aaa\n    aaa\n  aaa\n   ```\n"
  },
  {
    "end_line": 1678,
    "example": 98,
    "html": "<pre><code>```\naaa\n```\n</code></pre>\n",
    "start_line": 1669,
    "section": "Fenced code blocks",
    "markdown": "    ```\n    aaa\n    ```\n"
  },
  {
    "end_line": 1691,
    "example": 99,
    "html": "<pre><code>aaa\n</code></pre>\n",
    "start_line": 1684,
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n  ```\n"
  },
  {
    "end_line": 1701,
    "example": 100,
    "html": "<pre><code>aaa\n</code></pre>\n",
    "start_line": 1694,
    "section": "Fenced code blocks",
    "markdown": "   ```\naaa\n  ```\n"
  },
  {
    "end_line": 1714,
    "example": 101,
    "html": "<pre><code>aaa\n    ```\n</code></pre>\n",
    "start_line": 1706,
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n    ```\n"
  },
  {
    "end_line": 1726,
    "example": 102,
    "html": "<p><code></code>\naaa</p>\n",
    "start_line": 1720,
    "section": "Fenced code blocks",
    "markdown": "``` ```\naaa\n"
  },
  {
    "end_line": 1737,
    "example": 103,
    "html": "<pre><code>aaa\n~~~ ~~\n</code></pre>\n",
    "start_line": 1729,
    "section": "Fenced code blocks",
    "markdown": "~~~~~~\naaa\n~~~ ~~\n"
  },
  {
    "end_line": 1754,
    "example": 104,
    "html": "<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n",
    "start_line": 1743,
    "section": "Fenced code blocks",
    "markdown": "foo\n```\nbar\n```\nbaz\n"
  },
  {
    "end_line": 1772,
    "example": 105,
    "html": "<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n",
    "start_line": 1760,
    "section": "Fenced code blocks",
    "markdown": "foo\n---\n~~~\nbar\n~~~\n# baz\n"
  },
  {
    "end_line": 1791,
    "example": 106,
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "start_line": 1780,
    "section": "Fenced code blocks",
    "markdown": "```ruby\ndef foo(x)\n  return 3\nend\n```\n"
  },
  {
    "end_line": 1805,
    "example": 107,
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "start_line": 1794,
    "section": "Fenced code blocks",
    "markdown": "~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n"
  },
  {
    "end_line": 1813,
    "example": 108,
    "html": "<pre><code class=\"language-;\"></code></pre>\n",
    "start_line": 1808,
    "section": "Fenced code blocks",
    "markdown": "````;\n````\n"
  },
  {
    "end_line": 1824,
    "example": 109,
    "html": "<p><code>aa</code>\nfoo</p>\n",
    "start_line": 1818,
    "section": "Fenced code blocks",
    "markdown": "``` aa ```\nfoo\n"
  },
  {
    "end_line": 1836,
    "example": 110,
    "html": "<pre><code>``` aaa\n</code></pre>\n",
    "start_line": 1829,
    "section": "Fenced code blocks",
    "markdown": "```\n``` aaa\n```\n"
  },
  {
    "end_line": 1922,
    "example": 111,
    "html": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n",
    "start_line": 1903,
    "section": "HTML blocks",
    "markdown": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n"
  },
  {
    "end_line": 1933,
    "example": 112,
    "html": " <div>\n  *hello*\n         <foo><a>\n",
    "start_line": 1925,
    "section": "HTML blocks",
    "markdown": " <div>\n  *hello*\n         <foo><a>\n"
  },
  {
    "end_line": 1944,
    "example": 113,
    "html": "</div>\n*foo*\n",
    "start_line": 1938,
    "section": "HTML blocks",
    "markdown": "</div>\n*foo*\n"
  },
  {
    "end_line": 1959,
    "example": 114,
    "html": "<DIV CLASS=\"foo\">\n<p><em>Markdown</em></p>\n</DIV>\n",
    "start_line": 1949,
    "section": "HTML blocks",
    "markdown": "<DIV CLASS=\"foo\">\n\n*Markdown*\n\n</DIV>\n"
  },
  {
    "end_line": 1973,
    "example": 115,
    "html": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "start_line": 1965,
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n"
  },
  {
    "end_line": 1984,
    "example": 116,
    "html": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "start_line": 1976,
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n"
  },
  {
    "end_line": 1997,
    "example": 117,
    "html": "<div>\n*foo*\n<p><em>bar</em></p>\n",
    "start_line": 1988,
    "section": "HTML blocks",
    "markdown": "<div>\n*foo*\n\n*bar*\n"
  },
  {
    "end_line": 2010,
    "example": 118,
    "html": "<div id=\"foo\"\n*hi*\n",
    "start_line": 2004,
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\"\n*hi*\n"
  },
  {
    "end_line": 2019,
    "example": 119,
    "html": "<div class\nfoo\n",
    "start_line": 2013,
    "section": "HTML blocks",
    "markdown": "<div class\nfoo\n"
  },
  {
    "end_line": 2031,
    "example": 120,
    "html": "<div *???-&&&-<---\n*foo*\n",
    "start_line": 2025,
    "section": "HTML blocks",
    "markdown": "<div *???-&&&-<---\n*foo*\n"
  },
  {
    "end_line": 2041,
    "example": 121,
    "html": "<div><a href=\"bar\">*foo*</a></div>\n",
    "start_line": 2037,
    "section": "HTML blocks",
    "markdown": "<div><a href=\"bar\">*foo*</a></div>\n"
  },
  {
    "end_line": 2052,
    "example": 122,
    "html": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "start_line": 2044,
    "section": "HTML blocks",
    "markdown": "<table><tr><td>\nfoo\n</td></tr></table>\n"
  },
  {
    "end_line": 2071,
    "example": 123,
    "html": "<div></div>\n``` c\nint x = 33;\n```\n",
    "start_line": 2061,
    "section": "HTML blocks",
    "markdown": "<div></div>\n``` c\nint x = 33;\n```\n"
  },
  {
    "end_line": 2086,
    "example": 124,
    "html": "<a href=\"foo\">\n*bar*\n</a>\n",
    "start_line": 2078,
    "section": "HTML blocks",
    "markdown": "<a href=\"foo\">\n*bar*\n</a>\n"
  },
  {
    "end_line": 2099,
    "example": 125,
    "html": "<Warning>\n*bar*\n</Warning>\n",
    "start_line": 2091,
    "section": "HTML blocks",
    "markdown": "<Warning>\n*bar*\n</Warning>\n"
  },
  {
    "end_line": 2110,
    "example": 126,
    "html": "<i class=\"foo\">\n*bar*\n</i>\n",
    "start_line": 2102,
    "section": "HTML blocks",
    "markdown": "<i class=\"foo\">\n*bar*\n</i>\n"
  },
  {
    "end_line": 2119,
    "example": 127,
    "html": "</ins>\n*bar*\n",
    "start_line": 2113,
    "section": "HTML blocks",
    "markdown": "</ins>\n*bar*\n"
  },
  {
    "end_line": 2136,
    "example": 128,
    "html": "<del>\n*foo*\n</del>\n",
    "start_line": 2128,
    "section": "HTML blocks",
    "markdown": "<del>\n*foo*\n</del>\n"
  },
  {
    "end_line": 2153,
    "example": 129,
    "html": "<del>\n<p><em>foo</em></p>\n</del>\n",
    "start_line": 2143,
    "section": "HTML blocks",
    "markdown": "<del>\n\n*foo*\n\n</del>\n"
  },
  {
    "end_line": 2165,
    "example": 130,
    "html": "<p><del><em>foo</em></del></p>\n",
    "start_line": 2161,
    "section": "HTML blocks",
    "markdown": "<del>*foo*</del>\n"
  },
  {
    "end_line": 2191,
    "example": 131,
    "html": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n",
    "start_line": 2177,
    "section": "HTML blocks",
    "markdown": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n"
  },
  {
    "end_line": 2208,
    "example": 132,
    "html": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n",
    "start_line": 2196,
    "section": "HTML blocks",
    "markdown": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n"
  },
  {
    "end_line": 2227,
    "example": 133,
    "html": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n",
    "start_line": 2213,
    "section": "HTML blocks",
    "markdown": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n"
  },
  {
    "end_line": 2244,
    "example": 134,
    "html": "<style\n  type=\"text/css\">\n\nfoo\n",
    "start_line": 2234,
    "section": "HTML blocks",
    "markdown": "<style\n  type=\"text/css\">\n\nfoo\n"
  },
  {
    "end_line": 2258,
    "example": 135,
    "html": "<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n",
    "start_line": 2247,
    "section": "HTML blocks",
    "markdown": "> <div>\n> foo\n\nbar\n"
  },
  {
    "end_line": 2271,
    "example": 136,
    "html": "<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n",
    "start_line": 2261,
    "section": "HTML blocks",
    "markdown": "- <div>\n- foo\n"
  },
  {
    "end_line": 2282,
    "example": 137,
    "html": "<style>p{color:red;}</style>\n<p><em>foo</em></p>\n",
    "start_line": 2276,
    "section": "HTML blocks",
    "markdown": "<style>p{color:red;}</style>\n*foo*\n"
  },
  {
    "end_line": 2291,
    "example": 138,
    "html": "<!-- foo -->*bar*\n<p><em>baz</em></p>\n",
    "start_line": 2285,
    "section": "HTML blocks",
    "markdown": "<!-- foo -->*bar*\n*baz*\n"
  },
  {
    "end_line": 2305,
    "example": 139,
    "html": "<script>\nfoo\n</script>1. *bar*\n",
    "start_line": 2297,
    "section": "HTML blocks",
    "markdown": "<script>\nfoo\n</script>1. *bar*\n"
  },
  {
    "end_line": 2320,
    "example": 140,
    "html": "<!-- Foo\n\nbar\n   baz -->\n",
    "start_line": 2310,
    "section": "HTML blocks",
    "markdown": "<!-- Foo\n\nbar\n   baz -->\n"
  },
  {
    "end_line": 2338,
    "example": 141,
    "html": "<?php\n\n  echo '>';\n\n?>\n",
    "start_line": 2326,
    "section": "HTML blocks",
    "markdown": "<?php\n\n  echo '>';\n\n?>\n"
  },
  {
    "end_line": 2347,
    "example": 142,
    "html": "<!DOCTYPE html>\n",
    "start_line": 2343,
    "section": "HTML blocks",
    "markdown": "<!DOCTYPE html>\n"
  },
  {
    "end_line": 2378,
    "example": 143,
    "html": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n",
    "start_line": 2352,
    "section": "HTML blocks",
    "markdown": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n"
  },
  {
    "end_line": 2391,
    "example": 144,
    "html": "  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n",
    "start_line": 2383,
    "section": "HTML blocks",
    "markdown": "  <!-- foo -->\n\n    <!-- foo -->\n"
  },
  {
    "end_line": 2402,
    "example": 145,
    "html": "  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n",
    "start_line": 2394,
    "section": "HTML blocks",
    "markdown": "  <div>\n\n    <div>\n"
  },
  {
    "end_line": 2418,
    "example": 146,
    "html": "<p>Foo</p>\n<div>\nbar\n</div>\n",
    "start_line": 2408,
    "section": "HTML blocks",
    "markdown": "Foo\n<div>\nbar\n</div>\n"
  },
  {
    "end_line": 2434,
    "example": 147,
    "html": "<div>\nbar\n</div>\n*foo*\n",
    "start_line": 2424,
    "section": "HTML blocks",
    "markdown": "<div>\nbar\n</div>\n*foo*\n"
  },
  {
    "end_line": 2447,
    "example": 148,
    "html": "<p>Foo\n<a href=\"bar\">\nbaz</p>\n",
    "start_line": 2439,
    "section": "HTML blocks",
    "markdown": "Foo\n<a href=\"bar\">\nbaz\n"
  },
  {
    "end_line": 2490,
    "example": 149,
    "html": "<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n",
    "start_line": 2480,
    "section": "HTML blocks",
    "markdown": "<div>\n\n*Emphasized* text.\n\n</div>\n"
  },
  {
    "end_line": 2501,
    "example": 150,
    "html": "<div>\n*Emphasized* text.\n</div>\n",
    "start_line": 2493,
    "section": "HTML blocks",
    "markdown": "<div>\n*Emphasized* text.\n</div>\n"
  },
  {
    "end_line": 2535,
    "example": 151,
    "html": "<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n",
    "start_line": 2515,
    "section": "HTML blocks",
    "markdown": "<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n"
  },
  {
    "end_line": 2563,
    "example": 152,
    "html": "<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n",
    "start_line": 2542,
    "section": "HTML blocks",
    "markdown": "<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n"
  },
  {
    "end_line": 2596,
    "example": 153,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 2590,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url \"title\"\n\n[foo]\n"
  },
  {
    "end_line": 2607,
    "example": 154,
    "html": "<p><a href=\"/url\" title=\"the title\">foo</a></p>\n",
    "start_line": 2599,
    "section": "Link reference definitions",
    "markdown": "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n"
  },
  {
    "end_line": 2616,
    "example": 155,
    "html": "<p><a href=\"my_(url)\" title=\"title (with parens)\">Foo*bar]</a></p>\n",
    "start_line": 2610,
    "section": "Link reference definitions",
    "markdown": "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n"
  },
  {
    "end_line": 2627,
    "example": 156,
    "html": "<p><a href=\"my%20url\" title=\"title\">Foo bar</a></p>\n",
    "start_line": 2619,
    "section": "Link reference definitions",
    "markdown": "[Foo bar]:\n<my%20url>\n'title'\n\n[Foo bar]\n"
  },
  {
    "end_line": 2646,
    "example": 157,
    "html": "<p><a href=\"/url\" title=\"\ntitle\nline1\nline2\n\">foo</a></p>\n",
    "start_line": 2632,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n"
  },
  {
    "end_line": 2661,
    "example": 158,
    "html": "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
    "start_line": 2651,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n"
  },
  {
    "end_line": 2673,
    "example": 159,
    "html": "<p><a href=\"/url\">foo</a></p>\n",
    "start_line": 2666,
    "section": "Link reference definitions",
    "markdown": "[foo]:\n/url\n\n[foo]\n"
  },
  {
    "end_line": 2685,
    "example": 160,
    "html": "<p>[foo]:</p>\n<p>[foo]</p>\n",
    "start_line": 2678,
    "section": "Link reference definitions",
    "markdown": "[foo]:\n\n[foo]\n"
  },
  {
    "end_line": 2697,
    "example": 161,
    "html": "<p><a href=\"/url%5Cbar*baz\" title=\"foo&quot;bar\\baz\">foo</a></p>\n",
    "start_line": 2691,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\\bar\\*baz \"foo\\\"bar\\baz\"\n\n[foo]\n"
  },
  {
    "end_line": 2708,
    "example": 162,
    "html": "<p><a href=\"url\">foo</a></p>\n",
    "start_line": 2702,
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n[foo]: url\n"
  },
  {
    "end_line": 2721,
    "example": 163,
    "html": "<p><a href=\"first\">foo</a></p>\n",
    "start_line": 2714,
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n[foo]: first\n[foo]: second\n"
  },
  {
    "end_line": 2733,
    "example": 164,
    "html": "<p><a href=\"/url\">Foo</a></p>\n",
    "start_line": 2727,
    "section": "Link reference definitions",
    "markdown": "[FOO]: /url\n\n[Foo]\n"
  },
  {
    "end_line": 2742,
    "example": 165,
    "html": "<p><a href=\"/%CF%86%CE%BF%CF%85\">αγω</a></p>\n",
    "start_line": 2736,
    "section": "Link reference definitions",
    "markdown": "[ΑΓΩ]: /φου\n\n[αγω]\n"
  },
  {
    "end_line": 2751,
    "example": 166,
    "html": "",
    "start_line": 2748,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\n"
  },
  {
    "end_line": 2763,
    "example": 167,
    "html": "<p>bar</p>\n",
    "start_line": 2756,
    "section": "Link reference definitions",
    "markdown": "[\nfoo\n]: /url\nbar\n"
  },
  {
    "end_line": 2773,
    "example": 168,
    "html": "<p>[foo]: /url &quot;title&quot; ok</p>\n",
    "start_line": 2769,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url \"title\" ok\n"
  },
  {
    "end_line": 2783,
    "example": 169,
    "html": "<p>&quot;title&quot; ok</p>\n",
    "start_line": 2778,
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\n\"title\" ok\n"
  },
  {
    "end_line": 2797,
    "example": 170,
    "html": "<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n",
    "start_line": 2789,
    "section": "Link reference definitions",
    "markdown": "    [foo]: /url \"title\"\n\n[foo]\n"
  },
  {
    "end_line": 2813,
    "example": 171,
    "html": "<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n",
    "start_line": 2803,
    "section": "Link reference definitions",
    "markdown": "```\n[foo]: /url\n```\n\n[foo]\n"
  },
  {
    "end_line": 2827,
    "example": 172,
    "html": "<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n",
    "start_line": 2818,
    "section": "Link reference definitions",
    "markdown": "Foo\n[bar]: /baz\n\n[bar]\n"
  },
  {
    "end_line": 2842,
    "example": 173,
    "html": "<h1><a href=\"/url\">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "start_line": 2833,
    "section": "Link reference definitions",
    "markdown": "# [Foo]\n[foo]: /url\n> bar\n"
  },
  {
    "end_line": 2861,
    "example": 174,
    "html": "<p><a href=\"/foo-url\" title=\"foo\">foo</a>,\n<a href=\"/bar-url\" title=\"bar\">bar</a>,\n<a href=\"/baz-url\">baz</a></p>\n",
    "start_line": 2848,
    "section": "Link reference definitions",
    "markdown": "[foo]: /foo-url \"foo\"\n[bar]: /bar-url\n  \"bar\"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n"
  },
  {
    "end_line": 2877,
    "example": 175,
    "html": "<p><a href=\"/url\">foo</a></p>\n<blockquote>\n</blockquote>\n",
    "start_line": 2869,
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n> [foo]: /url\n"
  },
  {
    "end_line": 2899,
    "example": 176,
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "start_line": 2892,
    "section": "Paragraphs",
    "markdown": "aaa\n\nbbb\n"
  },
  {
    "end_line": 2915,
    "example": 177,
    "html": "<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n",
    "start_line": 2904,
    "section": "Paragraphs",
    "markdown": "aaa\nbbb\n\nccc\nddd\n"
  },
  {
    "end_line": 2928,
    "example": 178,
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "start_line": 2920,
    "section": "Paragraphs",
    "markdown": "aaa\n\n\nbbb\n"
  },
  {
    "end_line": 2939,
    "example": 179,
    "html": "<p>aaa\nbbb</p>\n",
    "start_line": 2933,
    "section": "Paragraphs",
    "markdown": "  aaa\n bbb\n"
  },
  {
    "end_line": 2953,
    "example": 180,
    "html": "<p>aaa\nbbb\nccc</p>\n",
    "start_line": 2945,
    "section": "Paragraphs",
    "markdown": "aaa\n             bbb\n                                       ccc\n"
  },
  {
    "end_line": 2965,
    "example": 181,
    "html": "<p>aaa\nbbb</p>\n",
    "start_line": 2959,
    "section": "Paragraphs",
    "markdown": "   aaa\nbbb\n"
  },
  {
    "end_line": 2975,
    "example": 182,
    "html": "<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n",
    "start_line": 2968,
    "section": "Paragraphs",
    "markdown": "    aaa\nbbb\n"
  },
  {
    "end_line": 2988,
    "example": 183,
    "html": "<p>aaa<br />\nbbb</p>\n",
    "start_line": 2982,
    "section": "Paragraphs",
    "markdown": "aaa     \nbbb     \n"
  },
  {
    "end_line": 3011,
    "example": 184,
    "html": "<p>aaa</p>\n<h1>aaa</h1>\n",
    "start_line": 2999,
    "section": "Blank lines",
    "markdown": "  \n\naaa\n  \n\n# aaa\n\n  \n"
  },
  {
    "end_line": 3075,
    "example": 185,
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "start_line": 3065,
    "section": "Block quotes",
    "markdown": "> # Foo\n> bar\n> baz\n"
  },
  {
    "end_line": 3090,
    "example": 186,
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "start_line": 3080,
    "section": "Block quotes",
    "markdown": "># Foo\n>bar\n> baz\n"
  },
  {
    "end_line": 3105,
    "example": 187,
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "start_line": 3095,
    "section": "Block quotes",
    "markdown": "   > # Foo\n   > bar\n > baz\n"
  },
  {
    "end_line": 3119,
    "example": 188,
    "html": "<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n",
    "start_line": 3110,
    "section": "Block quotes",
    "markdown": "    > # Foo\n    > bar\n    > baz\n"
  },
  {
    "end_line": 3135,
    "example": 189,
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "start_line": 3125,
    "section": "Block quotes",
    "markdown": "> # Foo\n> bar\nbaz\n"
  },
  {
    "end_line": 3151,
    "example": 190,
    "html": "<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n",
    "start_line": 3141,
    "section": "Block quotes",
    "markdown": "> bar\nbaz\n> foo\n"
  },
  {
    "end_line": 3173,
    "example": 191,
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "start_line": 3165,
    "section": "Block quotes",
    "markdown": "> foo\n---\n"
  },
  {
    "end_line": 3197,
    "example": 192,
    "html": "<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n",
    "start_line": 3185,
    "section": "Block quotes",
    "markdown": "> - foo\n- bar\n"
  },
  {
    "end_line": 3213,
    "example": 193,
    "html": "<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n",
    "start_line": 3203,
    "section": "Block quotes",
    "markdown": ">     foo\n    bar\n"
  },
  {
    "end_line": 3226,
    "example": 194,
    "html": "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n",
    "start_line": 3216,
    "section": "Block quotes",
    "markdown": "> ```\nfoo\n```\n"
  },
  {
    "end_line": 3240,
    "example": 195,
    "html": "<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n",
    "start_line": 3232,
    "section": "Block quotes",
    "markdown": "> foo\n    - bar\n"
  },
  {
    "end_line": 3261,
    "example": 196,
    "html": "<blockquote>\n</blockquote>\n",
    "start_line": 3256,
    "section": "Block quotes",
    "markdown": ">\n"
  },
  {
    "end_line": 3271,
    "example": 197,
    "html": "<blockquote>\n</blockquote>\n",
    "start_line": 3264,
    "section": "Block quotes",
    "markdown": ">\n>  \n> \n"
  },
  {
    "end_line": 3284,
    "example": 198,
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n",
    "start_line": 3276,
    "section": "Block quotes",
    "markdown": ">\n> foo\n>  \n"
  },
  {
    "end_line": 3300,
    "example": 199,
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "start_line": 3289,
    "section": "Block quotes",
    "markdown": "> foo\n\n> bar\n"
  },
  {
    "end_line": 3319,
    "example": 200,
    "html": "<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n",
    "start_line": 3311,
    "section": "Block quotes",
    "markdown": "> foo\n> bar\n"
  },
  {
    "end_line": 3333,
    "example": 201,
    "html": "<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n",
    "start_line": 3324,
    "section": "Block quotes",
    "markdown": "> foo\n>\n> bar\n"
  },
  {
    "end_line": 3346,
    "example": 202,
    "html": "<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "start_line": 3338,
    "section": "Block quotes",
    "markdown": "foo\n> bar\n"
  },
  {
    "end_line": 3364,
    "example": 203,
    "html": "<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n",
    "start_line": 3352,
    "section": "Block quotes",
    "markdown": "> aaa\n***\n> bbb\n"
  },
  {
    "end_line": 3378,
    "example": 204,
    "html": "<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "start_line": 3370,
    "section": "Block quotes",
    "markdown": "> bar\nbaz\n"
  },
  {
    "end_line": 3390,
    "example": 205,
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "start_line": 3381,
    "section": "Block quotes",
    "markdown": "> bar\n\nbaz\n"
  },
  {
    "end_line": 3402,
    "example": 206,
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "start_line": 3393,
    "section": "Block quotes",
    "markdown": "> bar\n>\nbaz\n"
  },
  {
    "end_line": 3421,
    "example": 207,
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "start_line": 3409,
    "section": "Block quotes",
    "markdown": "> > > foo\nbar\n"
  },
  {
    "end_line": 3438,
    "example": 208,
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "start_line": 3424,
    "section": "Block quotes",
    "markdown": ">>> foo\n> bar\n>>baz\n"
  },
  {
    "end_line": 3458,
    "example": 209,
    "html": "<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n",
    "start_line": 3446,
    "section": "Block quotes",
    "markdown": ">     code\n\n>    not code\n"
  },
  {
    "end_line": 3506,
    "example": 210,
    "html": "<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n",
    "start_line": 3491,
    "section": "List items",
    "markdown": "A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n"
  },
  {
    "end_line": 3532,
    "example": 211,
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 3513,
    "section": "List items",
    "markdown": "1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n"
  },
  {
    "end_line": 3555,
    "example": 212,
    "html": "<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n",
    "start_line": 3546,
    "section": "List items",
    "markdown": "- one\n\n two\n"
  },
  {
    "end_line": 3569,
    "example": 213,
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "start_line": 3558,
    "section": "List items",
    "markdown": "- one\n\n  two\n"
  },
  {
    "end_line": 3582,
    "example": 214,
    "html": "<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n",
    "start_line": 3572,
    "section": "List items",
    "markdown": " -    one\n\n     two\n"
  },
  {
    "end_line": 3596,
    "example": 215,
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "start_line": 3585,
    "section": "List items",
    "markdown": " -    one\n\n      two\n"
  },
  {
    "end_line": 3622,
    "example": 216,
    "html": "<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n",
    "start_line": 3607,
    "section": "List items",
    "markdown": "   > > 1.  one\n>>\n>>     two\n"
  },
  {
    "end_line": 3647,
    "example": 217,
    "html": "<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n",
    "start_line": 3634,
    "section": "List items",
    "markdown": ">>- one\n>>\n  >  > two\n"
  },
  {
    "end_line": 3660,
    "example": 218,
    "html": "<p>-one</p>\n<p>2.two</p>\n",
    "start_line": 3653,
    "section": "List items",
    "markdown": "-one\n\n2.two\n"
  },
  {
    "end_line": 3724,
    "example": 219,
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<p>bar</p>\n<ul>\n<li>\n<pre><code>foo\n\n\nbar\n</code></pre>\n</li>\n<li>\n<p>baz</p>\n<ul>\n<li>\n<pre><code>foo\n\n\nbar\n</code></pre>\n</li>\n</ul>\n</li>\n</ul>\n",
    "start_line": 3667,
    "section": "List items",
    "markdown": "- foo\n\n  bar\n\n- foo\n\n\n  bar\n\n- ```\n  foo\n\n\n  bar\n  ```\n\n- baz\n\n  + ```\n    foo\n\n\n    bar\n    ```\n"
  },
  {
    "end_line": 3751,
    "example": 220,
    "html": "<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 3729,
    "section": "List items",
    "markdown": "1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n"
  },
  {
    "end_line": 3775,
    "example": 221,
    "html": "<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\nbaz\n</code></pre>\n</li>\n</ul>\n",
    "start_line": 3759,
    "section": "List items",
    "markdown": "- Foo\n\n      bar\n\n      baz\n"
  },
  {
    "end_line": 3795,
    "example": 222,
    "html": "<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n<pre><code>  baz\n</code></pre>\n",
    "start_line": 3778,
    "section": "List items",
    "markdown": "- Foo\n\n      bar\n\n\n      baz\n"
  },
  {
    "end_line": 3806,
    "example": 223,
    "html": "<ol start=\"123456789\">\n<li>ok</li>\n</ol>\n",
    "start_line": 3800,
    "section": "List items",
    "markdown": "123456789. ok\n"
  },
  {
    "end_line": 3813,
    "example": 224,
    "html": "<p>1234567890. not ok</p>\n",
    "start_line": 3809,
    "section": "List items",
    "markdown": "1234567890. not ok\n"
  },
  {
    "end_line": 3824,
    "example": 225,
    "html": "<ol start=\"0\">\n<li>ok</li>\n</ol>\n",
    "start_line": 3818,
    "section": "List items",
    "markdown": "0. ok\n"
  },
  {
    "end_line": 3833,
    "example": 226,
    "html": "<ol start=\"3\">\n<li>ok</li>\n</ol>\n",
    "start_line": 3827,
    "section": "List items",
    "markdown": "003. ok\n"
  },
  {
    "end_line": 3842,
    "example": 227,
    "html": "<p>-1. not ok</p>\n",
    "start_line": 3838,
    "section": "List items",
    "markdown": "-1. not ok\n"
  },
  {
    "end_line": 3874,
    "example": 228,
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n",
    "start_line": 3862,
    "section": "List items",
    "markdown": "- foo\n\n      bar\n"
  },
  {
    "end_line": 3891,
    "example": 229,
    "html": "<ol start=\"10\">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n",
    "start_line": 3879,
    "section": "List items",
    "markdown": "  10.  foo\n\n           bar\n"
  },
  {
    "end_line": 3910,
    "example": 230,
    "html": "<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n",
    "start_line": 3898,
    "section": "List items",
    "markdown": "    indented code\n\nparagraph\n\n    more code\n"
  },
  {
    "end_line": 3929,
    "example": 231,
    "html": "<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "start_line": 3913,
    "section": "List items",
    "markdown": "1.     indented code\n\n   paragraph\n\n       more code\n"
  },
  {
    "end_line": 3951,
    "example": 232,
    "html": "<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "start_line": 3935,
    "section": "List items",
    "markdown": "1.      indented code\n\n   paragraph\n\n       more code\n"
  },
  {
    "end_line": 3969,
    "example": 233,
    "html": "<p>foo</p>\n<p>bar</p>\n",
    "start_line": 3962,
    "section": "List items",
    "markdown": "   foo\n\nbar\n"
  },
  {
    "end_line": 3981,
    "example": 234,
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n",
    "start_line": 3972,
    "section": "List items",
    "markdown": "-    foo\n\n  bar\n"
  },
  {
    "end_line": 4000,
    "example": 235,
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "start_line": 3989,
    "section": "List items",
    "markdown": "-  foo\n\n   bar\n"
  },
  {
    "end_line": 4038,
    "example": 236,
    "html": "<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n",
    "start_line": 4017,
    "section": "List items",
    "markdown": "-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n"
  },
  {
    "end_line": 4054,
    "example": 237,
    "html": "<ul>\n<li></li>\n</ul>\n<p>foo</p>\n",
    "start_line": 4045,
    "section": "List items",
    "markdown": "-\n\n  foo\n"
  },
  {
    "end_line": 4069,
    "example": 238,
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "start_line": 4059,
    "section": "List items",
    "markdown": "- foo\n-\n- bar\n"
  },
  {
    "end_line": 4084,
    "example": 239,
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "start_line": 4074,
    "section": "List items",
    "markdown": "- foo\n-   \n- bar\n"
  },
  {
    "end_line": 4099,
    "example": 240,
    "html": "<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n",
    "start_line": 4089,
    "section": "List items",
    "markdown": "1. foo\n2.\n3. bar\n"
  },
  {
    "end_line": 4110,
    "example": 241,
    "html": "<ul>\n<li></li>\n</ul>\n",
    "start_line": 4104,
    "section": "List items",
    "markdown": "*\n"
  },
  {
    "end_line": 4141,
    "example": 242,
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 4122,
    "section": "List items",
    "markdown": " 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n"
  },
  {
    "end_line": 4165,
    "example": 243,
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 4146,
    "section": "List items",
    "markdown": "  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n"
  },
  {
    "end_line": 4189,
    "example": 244,
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 4170,
    "section": "List items",
    "markdown": "   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n"
  },
  {
    "end_line": 4209,
    "example": 245,
    "html": "<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n",
    "start_line": 4194,
    "section": "List items",
    "markdown": "    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n"
  },
  {
    "end_line": 4243,
    "example": 246,
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "start_line": 4224,
    "section": "List items",
    "markdown": "  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n"
  },
  {
    "end_line": 4256,
    "example": 247,
    "html": "<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n",
    "start_line": 4248,
    "section": "List items",
    "markdown": "  1.  A paragraph\n    with two lines.\n"
  },
  {
    "end_line": 4275,
    "example": 248,
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "start_line": 4261,
    "section": "List items",
    "markdown": "> 1. > Blockquote\ncontinued here.\n"
  },
  {
    "end_line": 4292,
    "example": 249,
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "start_line": 4278,
    "section": "List items",
    "markdown": "> 1. > Blockquote\n> continued here.\n"
  },
  {
    "end_line": 4321,
    "example": 250,
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "start_line": 4305,
    "section": "List items",
    "markdown": "- foo\n  - bar\n    - baz\n"
  },
  {
    "end_line": 4336,
    "example": 251,
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "start_line": 4326,
    "section": "List items",
    "markdown": "- foo\n - bar\n  - baz\n"
  },
  {
    "end_line": 4352,
    "example": 252,
    "html": "<ol start=\"10\">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "start_line": 4341,
    "section": "List items",
    "markdown": "10) foo\n    - bar\n"
  },
  {
    "end_line": 4367,
    "example": 253,
    "html": "<ol start=\"10\">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n",
    "start_line": 4357,
    "section": "List items",
    "markdown": "10) foo\n   - bar\n"
  },
  {
    "end_line": 4382,
    "example": 254,
    "html": "<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n",
    "start_line": 4372,
    "section": "List items",
    "markdown": "- - foo\n"
  },
  {
    "end_line": 4399,
    "example": 255,
    "html": "<ol>\n<li>\n<ul>\n<li>\n<ol start=\"2\">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n",
    "start_line": 4385,
    "section": "List items",
    "markdown": "1. - 2. foo\n"
  },
  {
    "end_line": 4418,
    "example": 256,
    "html": "<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n",
    "start_line": 4404,
    "section": "List items",
    "markdown": "- # Foo\n- Bar\n  ---\n  baz\n"
  },
  {
    "end_line": 4653,
    "example": 257,
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "start_line": 4641,
    "section": "Lists",
    "markdown": "- foo\n- bar\n+ baz\n"
  },
  {
    "end_line": 4668,
    "example": 258,
    "html": "<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start=\"3\">\n<li>baz</li>\n</ol>\n",
    "start_line": 4656,
    "section": "Lists",
    "markdown": "1. foo\n2. bar\n3) baz\n"
  },
  {
    "end_line": 4685,
    "example": 259,
    "html": "<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "start_line": 4675,
    "section": "Lists",
    "markdown": "Foo\n- bar\n- baz\n"
  },
  {
    "end_line": 4699,
    "example": 260,
    "html": "<p>The number of windows in my house is</p>\n<ol start=\"14\">\n<li>The number of doors is 6.</li>\n</ol>\n",
    "start_line": 4691,
    "section": "Lists",
    "markdown": "The number of windows in my house is\n14.  The number of doors is 6.\n"
  },
  {
    "end_line": 4776,
    "example": 261,
    "html": "<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "start_line": 4757,
    "section": "Lists",
    "markdown": "- foo\n\n- bar\n\n\n- baz\n"
  },
  {
    "end_line": 4797,
    "example": 262,
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n<ul>\n<li>baz</li>\n</ul>\n",
    "start_line": 4783,
    "section": "Lists",
    "markdown": "- foo\n\n\n  bar\n- baz\n"
  },
  {
    "end_line": 4823,
    "example": 263,
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<pre><code>  bim\n</code></pre>\n",
    "start_line": 4802,
    "section": "Lists",
    "markdown": "- foo\n  - bar\n    - baz\n\n\n      bim\n"
  },
  {
    "end_line": 4847,
    "example": 264,
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n",
    "start_line": 4831,
    "section": "Lists",
    "markdown": "- foo\n- bar\n\n\n- baz\n- bim\n"
  },
  {
    "end_line": 4871,
    "example": 265,
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<pre><code>code\n</code></pre>\n",
    "start_line": 4850,
    "section": "Lists",
    "markdown": "-   foo\n\n    notcode\n\n-   foo\n\n\n    code\n"
  },
  {
    "end_line": 4901,
    "example": 266,
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n<li>h</li>\n<li>i</li>\n</ul>\n",
    "start_line": 4879,
    "section": "Lists",
    "markdown": "- a\n - b\n  - c\n   - d\n    - e\n   - f\n  - g\n - h\n- i\n"
  },
  {
    "end_line": 4922,
    "example": 267,
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n",
    "start_line": 4904,
    "section": "Lists",
    "markdown": "1. a\n\n  2. b\n\n    3. c\n"
  },
  {
    "end_line": 4945,
    "example": 268,
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "start_line": 4928,
    "section": "Lists",
    "markdown": "- a\n- b\n\n- c\n"
  },
  {
    "end_line": 4965,
    "example": 269,
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "start_line": 4950,
    "section": "Lists",
    "markdown": "* a\n*\n\n* c\n"
  },
  {
    "end_line": 4991,
    "example": 270,
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "start_line": 4972,
    "section": "Lists",
    "markdown": "- a\n- b\n\n  c\n- d\n"
  },
  {
    "end_line": 5012,
    "example": 271,
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "start_line": 4994,
    "section": "Lists",
    "markdown": "- a\n- b\n\n  [ref]: /url\n- d\n"
  },
  {
    "end_line": 5036,
    "example": 272,
    "html": "<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n",
    "start_line": 5017,
    "section": "Lists",
    "markdown": "- a\n- ```\n  b\n\n\n  ```\n- c\n"
  },
  {
    "end_line": 5061,
    "example": 273,
    "html": "<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n",
    "start_line": 5043,
    "section": "Lists",
    "markdown": "- a\n  - b\n\n    c\n- d\n"
  },
  {
    "end_line": 5081,
    "example": 274,
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n",
    "start_line": 5067,
    "section": "Lists",
    "markdown": "* a\n  > b\n  >\n* c\n"
  },
  {
    "end_line": 5105,
    "example": 275,
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n",
    "start_line": 5087,
    "section": "Lists",
    "markdown": "- a\n  > b\n  ```\n  c\n  ```\n- d\n"
  },
  {
    "end_line": 5116,
    "example": 276,
    "html": "<ul>\n<li>a</li>\n</ul>\n",
    "start_line": 5110,
    "section": "Lists",
    "markdown": "- a\n"
  },
  {
    "end_line": 5130,
    "example": 277,
    "html": "<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n",
    "start_line": 5119,
    "section": "Lists",
    "markdown": "- a\n  - b\n"
  },
  {
    "end_line": 5150,
    "example": 278,
    "html": "<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n",
    "start_line": 5136,
    "section": "Lists",
    "markdown": "1. ```\n   foo\n   ```\n\n   bar\n"
  },
  {
    "end_line": 5170,
    "example": 279,
    "html": "<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n",
    "start_line": 5155,
    "section": "Lists",
    "markdown": "* foo\n  * bar\n\n  baz\n"
  },
  {
    "end_line": 5198,
    "example": 280,
    "html": "<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n",
    "start_line": 5173,
    "section": "Lists",
    "markdown": "- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n"
  },
  {
    "end_line": 5211,
    "example": 281,
    "html": "<p><code>hi</code>lo`</p>\n",
    "start_line": 5207,
    "section": "Inlines",
    "markdown": "`hi`lo`\n"
  },
  {
    "end_line": 5225,
    "example": 282,
    "html": "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
    "start_line": 5221,
    "section": "Backslash escapes",
    "markdown": "\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n"
  },
  {
    "end_line": 5235,
    "example": 283,
    "html": "<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n",
    "start_line": 5231,
    "section": "Backslash escapes",
    "markdown": "\\\t\\A\\a\\ \\3\\φ\\«\n"
  },
  {
    "end_line": 5259,
    "example": 284,
    "html": "<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;</p>\n",
    "start_line": 5241,
    "section": "Backslash escapes",
    "markdown": "\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url \"not a reference\"\n"
  },
  {
    "end_line": 5268,
    "example": 285,
    "html": "<p>\\<em>emphasis</em></p>\n",
    "start_line": 5264,
    "section": "Backslash escapes",
    "markdown": "\\\\*emphasis*\n"
  },
  {
    "end_line": 5279,
    "example": 286,
    "html": "<p>foo<br />\nbar</p>\n",
    "start_line": 5273,
    "section": "Backslash escapes",
    "markdown": "foo\\\nbar\n"
  },
  {
    "end_line": 5289,
    "example": 287,
    "html": "<p><code>\\[\\`</code></p>\n",
    "start_line": 5285,
    "section": "Backslash escapes",
    "markdown": "`` \\[\\` ``\n"
  },
  {
    "end_line": 5297,
    "example": 288,
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "start_line": 5292,
    "section": "Backslash escapes",
    "markdown": "    \\[\\]\n"
  },
  {
    "end_line": 5307,
    "example": 289,
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "start_line": 5300,
    "section": "Backslash escapes",
    "markdown": "~~~\n\\[\\]\n~~~\n"
  },
  {
    "end_line": 5314,
    "example": 290,
    "html": "<p><a href=\"http://example.com?find=%5C*\">http://example.com?find=\\*</a></p>\n",
    "start_line": 5310,
    "section": "Backslash escapes",
    "markdown": "<http://example.com?find=\\*>\n"
  },
  {
    "end_line": 5321,
    "example": 291,
    "html": "<a href=\"/bar\\/)\">\n",
    "start_line": 5317,
    "section": "Backslash escapes",
    "markdown": "<a href=\"/bar\\/)\">\n"
  },
  {
    "end_line": 5331,
    "example": 292,
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "start_line": 5327,
    "section": "Backslash escapes",
    "markdown": "[foo](/bar\\* \"ti\\*tle\")\n"
  },
  {
    "end_line": 5340,
    "example": 293,
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "start_line": 5334,
    "section": "Backslash escapes",
    "markdown": "[foo]\n\n[foo]: /bar\\* \"ti\\*tle\"\n"
  },
  {
    "end_line": 5350,
    "example": 294,
    "html": "<pre><code class=\"language-foo+bar\">foo\n</code></pre>\n",
    "start_line": 5343,
    "section": "Backslash escapes",
    "markdown": "``` foo\\+bar\nfoo\n```\n"
  },
  {
    "end_line": 5378,
    "example": 295,
    "html": "<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n",
    "start_line": 5370,
    "section": "Entity and numeric character references",
    "markdown": "&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n"
  },
  {
    "end_line": 5393,
    "example": 296,
    "html": "<p># Ӓ Ϡ � �</p>\n",
    "start_line": 5389,
    "section": "Entity and numeric character references",
    "markdown": "&#35; &#1234; &#992; &#98765432; &#0;\n"
  },
  {
    "end_line": 5406,
    "example": 297,
    "html": "<p>&quot; ആ ಫ</p>\n",
    "start_line": 5402,
    "section": "Entity and numeric character references",
    "markdown": "&#X22; &#XD06; &#xcab;\n"
  },
  {
    "end_line": 5417,
    "example": 298,
    "html": "<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;ThisIsNotDefined; &amp;hi?;</p>\n",
    "start_line": 5411,
    "section": "Entity and numeric character references",
    "markdown": "&nbsp &x; &#; &#x;\n&ThisIsNotDefined; &hi?;\n"
  },
  {
    "end_line": 5428,
    "example": 299,
    "html": "<p>&amp;copy</p>\n",
    "start_line": 5424,
    "section": "Entity and numeric character references",
    "markdown": "&copy\n"
  },
  {
    "end_line": 5438,
    "example": 300,
    "html": "<p>&amp;MadeUpEntity;</p>\n",
    "start_line": 5434,
    "section": "Entity and numeric character references",
    "markdown": "&MadeUpEntity;\n"
  },
  {
    "end_line": 5449,
    "example": 301,
    "html": "<a href=\"&ouml;&ouml;.html\">\n",
    "start_line": 5445,
    "section": "Entity and numeric character references",
    "markdown": "<a href=\"&ouml;&ouml;.html\">\n"
  },
  {
    "end_line": 5456,
    "example": 302,
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "start_line": 5452,
    "section": "Entity and numeric character references",
    "markdown": "[foo](/f&ouml;&ouml; \"f&ouml;&ouml;\")\n"
  },
  {
    "end_line": 5465,
    "example": 303,
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "start_line": 5459,
    "section": "Entity and numeric character references",
    "markdown": "[foo]\n\n[foo]: /f&ouml;&ouml; \"f&ouml;&ouml;\"\n"
  },
  {
    "end_line": 5475,
    "example": 304,
    "html": "<pre><code class=\"language-föö\">foo\n</code></pre>\n",
    "start_line": 5468,
    "section": "Entity and numeric character references",
    "markdown": "``` f&ouml;&ouml;\nfoo\n```\n"
  },
  {
    "end_line": 5485,
    "example": 305,
    "html": "<p><code>f&amp;ouml;&amp;ouml;</code></p>\n",
    "start_line": 5481,
    "section": "Entity and numeric character references",
    "markdown": "`f&ouml;&ouml;`\n"
  },
  {
    "end_line": 5493,
    "example": 306,
    "html": "<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n",
    "start_line": 5488,
    "section": "Entity and numeric character references",
    "markdown": "    f&ouml;f&ouml;\n"
  },
  {
    "end_line": 5514,
    "example": 307,
    "html": "<p><code>foo</code></p>\n",
    "start_line": 5510,
    "section": "Code spans",
    "markdown": "`foo`\n"
  },
  {
    "end_line": 5524,
    "example": 308,
    "html": "<p><code>foo ` bar</code></p>\n",
    "start_line": 5520,
    "section": "Code spans",
    "markdown": "`` foo ` bar  ``\n"
  },
  {
    "end_line": 5534,
    "example": 309,
    "html": "<p><code>``</code></p>\n",
    "start_line": 5530,
    "section": "Code spans",
    "markdown": "` `` `\n"
  },
  {
    "end_line": 5545,
    "example": 310,
    "html": "<p><code>foo</code></p>\n",
    "start_line": 5539,
    "section": "Code spans",
    "markdown": "``\nfoo\n``\n"
  },
  {
    "end_line": 5556,
    "example": 311,
    "html": "<p><code>foo bar baz</code></p>\n",
    "start_line": 5551,
    "section": "Code spans",
    "markdown": "`foo   bar\n  baz`\n"
  },
  {
    "end_line": 5576,
    "example": 312,
    "html": "<p><code>foo `` bar</code></p>\n",
    "start_line": 5572,
    "section": "Code spans",
    "markdown": "`foo `` bar`\n"
  },
  {
    "end_line": 5586,
    "example": 313,
    "html": "<p><code>foo\\</code>bar`</p>\n",
    "start_line": 5582,
    "section": "Code spans",
    "markdown": "`foo\\`bar`\n"
  },
  {
    "end_line": 5602,
    "example": 314,
    "html": "<p>*foo<code>*</code></p>\n",
    "start_line": 5598,
    "section": "Code spans",
    "markdown": "*foo`*`\n"
  },
  {
    "end_line": 5611,
    "example": 315,
    "html": "<p>[not a <code>link](/foo</code>)</p>\n",
    "start_line": 5607,
    "section": "Code spans",
    "markdown": "[not a `link](/foo`)\n"
  },
  {
    "end_line": 5621,
    "example": 316,
    "html": "<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n",
    "start_line": 5617,
    "section": "Code spans",
    "markdown": "`<a href=\"`\">`\n"
  },
  {
    "end_line": 5630,
    "example": 317,
    "html": "<p><a href=\"`\">`</p>\n",
    "start_line": 5626,
    "section": "Code spans",
    "markdown": "<a href=\"`\">`\n"
  },
  {
    "end_line": 5639,
    "example": 318,
    "html": "<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>\n",
    "start_line": 5635,
    "section": "Code spans",
    "markdown": "`<http://foo.bar.`baz>`\n"
  },
  {
    "end_line": 5648,
    "example": 319,
    "html": "<p><a href=\"http://foo.bar.%60baz\">http://foo.bar.`baz</a>`</p>\n",
    "start_line": 5644,
    "section": "Code spans",
    "markdown": "<http://foo.bar.`baz>`\n"
  },
  {
    "end_line": 5658,
    "example": 320,
    "html": "<p>```foo``</p>\n",
    "start_line": 5654,
    "section": "Code spans",
    "markdown": "```foo``\n"
  },
  {
    "end_line": 5665,
    "example": 321,
    "html": "<p>`foo</p>\n",
    "start_line": 5661,
    "section": "Code spans",
    "markdown": "`foo\n"
  },
  {
    "end_line": 5875,
    "example": 322,
    "html": "<p><em>foo bar</em></p>\n",
    "start_line": 5871,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar*\n"
  },
  {
    "end_line": 5885,
    "example": 323,
    "html": "<p>a * foo bar*</p>\n",
    "start_line": 5881,
    "section": "Emphasis and strong emphasis",
    "markdown": "a * foo bar*\n"
  },
  {
    "end_line": 5896,
    "example": 324,
    "html": "<p>a*&quot;foo&quot;*</p>\n",
    "start_line": 5892,
    "section": "Emphasis and strong emphasis",
    "markdown": "a*\"foo\"*\n"
  },
  {
    "end_line": 5905,
    "example": 325,
    "html": "<p>* a *</p>\n",
    "start_line": 5901,
    "section": "Emphasis and strong emphasis",
    "markdown": "* a *\n"
  },
  {
    "end_line": 5914,
    "example": 326,
    "html": "<p>foo<em>bar</em></p>\n",
    "start_line": 5910,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo*bar*\n"
  },
  {
    "end_line": 5921,
    "example": 327,
    "html": "<p>5<em>6</em>78</p>\n",
    "start_line": 5917,
    "section": "Emphasis and strong emphasis",
    "markdown": "5*6*78\n"
  },
  {
    "end_line": 5930,
    "example": 328,
    "html": "<p><em>foo bar</em></p>\n",
    "start_line": 5926,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo bar_\n"
  },
  {
    "end_line": 5940,
    "example": 329,
    "html": "<p>_ foo bar_</p>\n",
    "start_line": 5936,
    "section": "Emphasis and strong emphasis",
    "markdown": "_ foo bar_\n"
  },
  {
    "end_line": 5950,
    "example": 330,
    "html": "<p>a_&quot;foo&quot;_</p>\n",
    "start_line": 5946,
    "section": "Emphasis and strong emphasis",
    "markdown": "a_\"foo\"_\n"
  },
  {
    "end_line": 5959,
    "example": 331,
    "html": "<p>foo_bar_</p>\n",
    "start_line": 5955,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo_bar_\n"
  },
  {
    "end_line": 5966,
    "example": 332,
    "html": "<p>5_6_78</p>\n",
    "start_line": 5962,
    "section": "Emphasis and strong emphasis",
    "markdown": "5_6_78\n"
  },
  {
    "end_line": 5973,
    "example": 333,
    "html": "<p>пристаням_стремятся_</p>\n",
    "start_line": 5969,
    "section": "Emphasis and strong emphasis",
    "markdown": "пристаням_стремятся_\n"
  },
  {
    "end_line": 5983,
    "example": 334,
    "html": "<p>aa_&quot;bb&quot;_cc</p>\n",
    "start_line": 5979,
    "section": "Emphasis and strong emphasis",
    "markdown": "aa_\"bb\"_cc\n"
  },
  {
    "end_line": 5994,
    "example": 335,
    "html": "<p>foo-<em>(bar)</em></p>\n",
    "start_line": 5990,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo-_(bar)_\n"
  },
  {
    "end_line": 6006,
    "example": 336,
    "html": "<p>_foo*</p>\n",
    "start_line": 6002,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo*\n"
  },
  {
    "end_line": 6016,
    "example": 337,
    "html": "<p>*foo bar *</p>\n",
    "start_line": 6012,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar *\n"
  },
  {
    "end_line": 6029,
    "example": 338,
    "html": "<p>*foo bar</p>\n<ul>\n<li></li>\n</ul>\n",
    "start_line": 6021,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar\n*\n"
  },
  {
    "end_line": 6040,
    "example": 339,
    "html": "<p>*(*foo)</p>\n",
    "start_line": 6036,
    "section": "Emphasis and strong emphasis",
    "markdown": "*(*foo)\n"
  },
  {
    "end_line": 6050,
    "example": 340,
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "start_line": 6046,
    "section": "Emphasis and strong emphasis",
    "markdown": "*(*foo*)*\n"
  },
  {
    "end_line": 6059,
    "example": 341,
    "html": "<p><em>foo</em>bar</p>\n",
    "start_line": 6055,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo*bar\n"
  },
  {
    "end_line": 6072,
    "example": 342,
    "html": "<p>_foo bar _</p>\n",
    "start_line": 6068,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo bar _\n"
  },
  {
    "end_line": 6082,
    "example": 343,
    "html": "<p>_(_foo)</p>\n",
    "start_line": 6078,
    "section": "Emphasis and strong emphasis",
    "markdown": "_(_foo)\n"
  },
  {
    "end_line": 6091,
    "example": 344,
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "start_line": 6087,
    "section": "Emphasis and strong emphasis",
    "markdown": "_(_foo_)_\n"
  },
  {
    "end_line": 6100,
    "example": 345,
    "html": "<p>_foo_bar</p>\n",
    "start_line": 6096,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo_bar\n"
  },
  {
    "end_line": 6107,
    "example": 346,
    "html": "<p>_пристаням_стремятся</p>\n",
    "start_line": 6103,
    "section": "Emphasis and strong emphasis",
    "markdown": "_пристаням_стремятся\n"
  },
  {
    "end_line": 6114,
    "example": 347,
    "html": "<p><em>foo_bar_baz</em></p>\n",
    "start_line": 6110,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo_bar_baz_\n"
  },
  {
    "end_line": 6125,
    "example": 348,
    "html": "<p><em>(bar)</em>.</p>\n",
    "start_line": 6121,
    "section": "Emphasis and strong emphasis",
    "markdown": "_(bar)_.\n"
  },
  {
    "end_line": 6134,
    "example": 349,
    "html": "<p><strong>foo bar</strong></p>\n",
    "start_line": 6130,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo bar**\n"
  },
  {
    "end_line": 6144,
    "example": 350,
    "html": "<p>** foo bar**</p>\n",
    "start_line": 6140,
    "section": "Emphasis and strong emphasis",
    "markdown": "** foo bar**\n"
  },
  {
    "end_line": 6155,
    "example": 351,
    "html": "<p>a**&quot;foo&quot;**</p>\n",
    "start_line": 6151,
    "section": "Emphasis and strong emphasis",
    "markdown": "a**\"foo\"**\n"
  },
  {
    "end_line": 6164,
    "example": 352,
    "html": "<p>foo<strong>bar</strong></p>\n",
    "start_line": 6160,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo**bar**\n"
  },
  {
    "end_line": 6173,
    "example": 353,
    "html": "<p><strong>foo bar</strong></p>\n",
    "start_line": 6169,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo bar__\n"
  },
  {
    "end_line": 6183,
    "example": 354,
    "html": "<p>__ foo bar__</p>\n",
    "start_line": 6179,
    "section": "Emphasis and strong emphasis",
    "markdown": "__ foo bar__\n"
  },
  {
    "end_line": 6193,
    "example": 355,
    "html": "<p>__\nfoo bar__</p>\n",
    "start_line": 6187,
    "section": "Emphasis and strong emphasis",
    "markdown": "__\nfoo bar__\n"
  },
  {
    "end_line": 6203,
    "example": 356,
    "html": "<p>a__&quot;foo&quot;__</p>\n",
    "start_line": 6199,
    "section": "Emphasis and strong emphasis",
    "markdown": "a__\"foo\"__\n"
  },
  {
    "end_line": 6212,
    "example": 357,
    "html": "<p>foo__bar__</p>\n",
    "start_line": 6208,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo__bar__\n"
  },
  {
    "end_line": 6219,
    "example": 358,
    "html": "<p>5__6__78</p>\n",
    "start_line": 6215,
    "section": "Emphasis and strong emphasis",
    "markdown": "5__6__78\n"
  },
  {
    "end_line": 6226,
    "example": 359,
    "html": "<p>пристаням__стремятся__</p>\n",
    "start_line": 6222,
    "section": "Emphasis and strong emphasis",
    "markdown": "пристаням__стремятся__\n"
  },
  {
    "end_line": 6233,
    "example": 360,
    "html": "<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n",
    "start_line": 6229,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo, __bar__, baz__\n"
  },
  {
    "end_line": 6244,
    "example": 361,
    "html": "<p>foo-<strong>(bar)</strong></p>\n",
    "start_line": 6240,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo-__(bar)__\n"
  },
  {
    "end_line": 6257,
    "example": 362,
    "html": "<p>**foo bar **</p>\n",
    "start_line": 6253,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo bar **\n"
  },
  {
    "end_line": 6270,
    "example": 363,
    "html": "<p>**(**foo)</p>\n",
    "start_line": 6266,
    "section": "Emphasis and strong emphasis",
    "markdown": "**(**foo)\n"
  },
  {
    "end_line": 6280,
    "example": 364,
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "start_line": 6276,
    "section": "Emphasis and strong emphasis",
    "markdown": "*(**foo**)*\n"
  },
  {
    "end_line": 6289,
    "example": 365,
    "html": "<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n",
    "start_line": 6283,
    "section": "Emphasis and strong emphasis",
    "markdown": "**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n"
  },
  {
    "end_line": 6296,
    "example": 366,
    "html": "<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n",
    "start_line": 6292,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo \"*bar*\" foo**\n"
  },
  {
    "end_line": 6305,
    "example": 367,
    "html": "<p><strong>foo</strong>bar</p>\n",
    "start_line": 6301,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo**bar\n"
  },
  {
    "end_line": 6317,
    "example": 368,
    "html": "<p>__foo bar __</p>\n",
    "start_line": 6313,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo bar __\n"
  },
  {
    "end_line": 6327,
    "example": 369,
    "html": "<p>__(__foo)</p>\n",
    "start_line": 6323,
    "section": "Emphasis and strong emphasis",
    "markdown": "__(__foo)\n"
  },
  {
    "end_line": 6337,
    "example": 370,
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "start_line": 6333,
    "section": "Emphasis and strong emphasis",
    "markdown": "_(__foo__)_\n"
  },
  {
    "end_line": 6346,
    "example": 371,
    "html": "<p>__foo__bar</p>\n",
    "start_line": 6342,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__bar\n"
  },
  {
    "end_line": 6353,
    "example": 372,
    "html": "<p>__пристаням__стремятся</p>\n",
    "start_line": 6349,
    "section": "Emphasis and strong emphasis",
    "markdown": "__пристаням__стремятся\n"
  },
  {
    "end_line": 6360,
    "example": 373,
    "html": "<p><strong>foo__bar__baz</strong></p>\n",
    "start_line": 6356,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__bar__baz__\n"
  },
  {
    "end_line": 6371,
    "example": 374,
    "html": "<p><strong>(bar)</strong>.</p>\n",
    "start_line": 6367,
    "section": "Emphasis and strong emphasis",
    "markdown": "__(bar)__.\n"
  },
  {
    "end_line": 6383,
    "example": 375,
    "html": "<p><em>foo <a href=\"/url\">bar</a></em></p>\n",
    "start_line": 6379,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo [bar](/url)*\n"
  },
  {
    "end_line": 6392,
    "example": 376,
    "html": "<p><em>foo\nbar</em></p>\n",
    "start_line": 6386,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo\nbar*\n"
  },
  {
    "end_line": 6402,
    "example": 377,
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "start_line": 6398,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo __bar__ baz_\n"
  },
  {
    "end_line": 6409,
    "example": 378,
    "html": "<p><em>foo <em>bar</em> baz</em></p>\n",
    "start_line": 6405,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo _bar_ baz_\n"
  },
  {
    "end_line": 6416,
    "example": 379,
    "html": "<p><em><em>foo</em> bar</em></p>\n",
    "start_line": 6412,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo_ bar_\n"
  },
  {
    "end_line": 6423,
    "example": 380,
    "html": "<p><em>foo <em>bar</em></em></p>\n",
    "start_line": 6419,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo *bar**\n"
  },
  {
    "end_line": 6430,
    "example": 381,
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "start_line": 6426,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar** baz*\n"
  },
  {
    "end_line": 6439,
    "example": 382,
    "html": "<p><em>foo</em><em>bar</em><em>baz</em></p>\n",
    "start_line": 6435,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**bar**baz*\n"
  },
  {
    "end_line": 6449,
    "example": 383,
    "html": "<p><em><strong>foo</strong> bar</em></p>\n",
    "start_line": 6445,
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo** bar*\n"
  },
  {
    "end_line": 6456,
    "example": 384,
    "html": "<p><em>foo <strong>bar</strong></em></p>\n",
    "start_line": 6452,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar***\n"
  },
  {
    "end_line": 6467,
    "example": 385,
    "html": "<p><em>foo</em><em>bar</em>**</p>\n",
    "start_line": 6463,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**bar***\n"
  },
  {
    "end_line": 6477,
    "example": 386,
    "html": "<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n",
    "start_line": 6473,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar *baz* bim** bop*\n"
  },
  {
    "end_line": 6484,
    "example": 387,
    "html": "<p><em>foo <a href=\"/url\"><em>bar</em></a></em></p>\n",
    "start_line": 6480,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo [*bar*](/url)*\n"
  },
  {
    "end_line": 6493,
    "example": 388,
    "html": "<p>** is not an empty emphasis</p>\n",
    "start_line": 6489,
    "section": "Emphasis and strong emphasis",
    "markdown": "** is not an empty emphasis\n"
  },
  {
    "end_line": 6500,
    "example": 389,
    "html": "<p>**** is not an empty strong emphasis</p>\n",
    "start_line": 6496,
    "section": "Emphasis and strong emphasis",
    "markdown": "**** is not an empty strong emphasis\n"
  },
  {
    "end_line": 6513,
    "example": 390,
    "html": "<p><strong>foo <a href=\"/url\">bar</a></strong></p>\n",
    "start_line": 6509,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo [bar](/url)**\n"
  },
  {
    "end_line": 6522,
    "example": 391,
    "html": "<p><strong>foo\nbar</strong></p>\n",
    "start_line": 6516,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo\nbar**\n"
  },
  {
    "end_line": 6532,
    "example": 392,
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "start_line": 6528,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo _bar_ baz__\n"
  },
  {
    "end_line": 6539,
    "example": 393,
    "html": "<p><strong>foo <strong>bar</strong> baz</strong></p>\n",
    "start_line": 6535,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo __bar__ baz__\n"
  },
  {
    "end_line": 6546,
    "example": 394,
    "html": "<p><strong><strong>foo</strong> bar</strong></p>\n",
    "start_line": 6542,
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo__ bar__\n"
  },
  {
    "end_line": 6553,
    "example": 395,
    "html": "<p><strong>foo <strong>bar</strong></strong></p>\n",
    "start_line": 6549,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo **bar****\n"
  },
  {
    "end_line": 6560,
    "example": 396,
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "start_line": 6556,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar* baz**\n"
  },
  {
    "end_line": 6569,
    "example": 397,
    "html": "<p><em><em>foo</em>bar</em>baz**</p>\n",
    "start_line": 6565,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*bar*baz**\n"
  },
  {
    "end_line": 6579,
    "example": 398,
    "html": "<p><strong><em>foo</em> bar</strong></p>\n",
    "start_line": 6575,
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo* bar**\n"
  },
  {
    "end_line": 6586,
    "example": 399,
    "html": "<p><strong>foo <em>bar</em></strong></p>\n",
    "start_line": 6582,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar***\n"
  },
  {
    "end_line": 6597,
    "example": 400,
    "html": "<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n",
    "start_line": 6591,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar **baz**\nbim* bop**\n"
  },
  {
    "end_line": 6604,
    "example": 401,
    "html": "<p><strong>foo <a href=\"/url\"><em>bar</em></a></strong></p>\n",
    "start_line": 6600,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo [*bar*](/url)**\n"
  },
  {
    "end_line": 6613,
    "example": 402,
    "html": "<p>__ is not an empty emphasis</p>\n",
    "start_line": 6609,
    "section": "Emphasis and strong emphasis",
    "markdown": "__ is not an empty emphasis\n"
  },
  {
    "end_line": 6620,
    "example": 403,
    "html": "<p>____ is not an empty strong emphasis</p>\n",
    "start_line": 6616,
    "section": "Emphasis and strong emphasis",
    "markdown": "____ is not an empty strong emphasis\n"
  },
  {
    "end_line": 6630,
    "example": 404,
    "html": "<p>foo ***</p>\n",
    "start_line": 6626,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo ***\n"
  },
  {
    "end_line": 6637,
    "example": 405,
    "html": "<p>foo <em>*</em></p>\n",
    "start_line": 6633,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *\\**\n"
  },
  {
    "end_line": 6644,
    "example": 406,
    "html": "<p>foo <em>_</em></p>\n",
    "start_line": 6640,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *_*\n"
  },
  {
    "end_line": 6651,
    "example": 407,
    "html": "<p>foo *****</p>\n",
    "start_line": 6647,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *****\n"
  },
  {
    "end_line": 6658,
    "example": 408,
    "html": "<p>foo <strong>*</strong></p>\n",
    "start_line": 6654,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo **\\***\n"
  },
  {
    "end_line": 6665,
    "example": 409,
    "html": "<p>foo <strong>_</strong></p>\n",
    "start_line": 6661,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo **_**\n"
  },
  {
    "end_line": 6676,
    "example": 410,
    "html": "<p>*<em>foo</em></p>\n",
    "start_line": 6672,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*\n"
  },
  {
    "end_line": 6683,
    "example": 411,
    "html": "<p><em>foo</em>*</p>\n",
    "start_line": 6679,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**\n"
  },
  {
    "end_line": 6690,
    "example": 412,
    "html": "<p>*<strong>foo</strong></p>\n",
    "start_line": 6686,
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo**\n"
  },
  {
    "end_line": 6697,
    "example": 413,
    "html": "<p>***<em>foo</em></p>\n",
    "start_line": 6693,
    "section": "Emphasis and strong emphasis",
    "markdown": "****foo*\n"
  },
  {
    "end_line": 6704,
    "example": 414,
    "html": "<p><strong>foo</strong>*</p>\n",
    "start_line": 6700,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo***\n"
  },
  {
    "end_line": 6711,
    "example": 415,
    "html": "<p><em>foo</em>***</p>\n",
    "start_line": 6707,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo****\n"
  },
  {
    "end_line": 6721,
    "example": 416,
    "html": "<p>foo ___</p>\n",
    "start_line": 6717,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo ___\n"
  },
  {
    "end_line": 6728,
    "example": 417,
    "html": "<p>foo <em>_</em></p>\n",
    "start_line": 6724,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _\\__\n"
  },
  {
    "end_line": 6735,
    "example": 418,
    "html": "<p>foo <em>*</em></p>\n",
    "start_line": 6731,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _*_\n"
  },
  {
    "end_line": 6742,
    "example": 419,
    "html": "<p>foo _____</p>\n",
    "start_line": 6738,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _____\n"
  },
  {
    "end_line": 6749,
    "example": 420,
    "html": "<p>foo <strong>_</strong></p>\n",
    "start_line": 6745,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo __\\___\n"
  },
  {
    "end_line": 6756,
    "example": 421,
    "html": "<p>foo <strong>*</strong></p>\n",
    "start_line": 6752,
    "section": "Emphasis and strong emphasis",
    "markdown": "foo __*__\n"
  },
  {
    "end_line": 6763,
    "example": 422,
    "html": "<p>_<em>foo</em></p>\n",
    "start_line": 6759,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo_\n"
  },
  {
    "end_line": 6774,
    "example": 423,
    "html": "<p><em>foo</em>_</p>\n",
    "start_line": 6770,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo__\n"
  },
  {
    "end_line": 6781,
    "example": 424,
    "html": "<p>_<strong>foo</strong></p>\n",
    "start_line": 6777,
    "section": "Emphasis and strong emphasis",
    "markdown": "___foo__\n"
  },
  {
    "end_line": 6788,
    "example": 425,
    "html": "<p>___<em>foo</em></p>\n",
    "start_line": 6784,
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo_\n"
  },
  {
    "end_line": 6795,
    "example": 426,
    "html": "<p><strong>foo</strong>_</p>\n",
    "start_line": 6791,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo___\n"
  },
  {
    "end_line": 6802,
    "example": 427,
    "html": "<p><em>foo</em>___</p>\n",
    "start_line": 6798,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo____\n"
  },
  {
    "end_line": 6812,
    "example": 428,
    "html": "<p><strong>foo</strong></p>\n",
    "start_line": 6808,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo**\n"
  },
  {
    "end_line": 6819,
    "example": 429,
    "html": "<p><em><em>foo</em></em></p>\n",
    "start_line": 6815,
    "section": "Emphasis and strong emphasis",
    "markdown": "*_foo_*\n"
  },
  {
    "end_line": 6826,
    "example": 430,
    "html": "<p><strong>foo</strong></p>\n",
    "start_line": 6822,
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__\n"
  },
  {
    "end_line": 6833,
    "example": 431,
    "html": "<p><em><em>foo</em></em></p>\n",
    "start_line": 6829,
    "section": "Emphasis and strong emphasis",
    "markdown": "_*foo*_\n"
  },
  {
    "end_line": 6843,
    "example": 432,
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "start_line": 6839,
    "section": "Emphasis and strong emphasis",
    "markdown": "****foo****\n"
  },
  {
    "end_line": 6850,
    "example": 433,
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "start_line": 6846,
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo____\n"
  },
  {
    "end_line": 6861,
    "example": 434,
    "html": "<p><strong><strong><strong>foo</strong></strong></strong></p>\n",
    "start_line": 6857,
    "section": "Emphasis and strong emphasis",
    "markdown": "******foo******\n"
  },
  {
    "end_line": 6870,
    "example": 435,
    "html": "<p><strong><em>foo</em></strong></p>\n",
    "start_line": 6866,
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo***\n"
  },
  {
    "end_line": 6877,
    "example": 436,
    "html": "<p><strong><strong><em>foo</em></strong></strong></p>\n",
    "start_line": 6873,
    "section": "Emphasis and strong emphasis",
    "markdown": "_____foo_____\n"
  },
  {
    "end_line": 6886,
    "example": 437,
    "html": "<p><em>foo _bar</em> baz_</p>\n",
    "start_line": 6882,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo _bar* baz_\n"
  },
  {
    "end_line": 6893,
    "example": 438,
    "html": "<p><em><em>foo</em>bar</em>*</p>\n",
    "start_line": 6889,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*bar**\n"
  },
  {
    "end_line": 6900,
    "example": 439,
    "html": "<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n",
    "start_line": 6896,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo __bar *baz bim__ bam*\n"
  },
  {
    "end_line": 6909,
    "example": 440,
    "html": "<p>**foo <strong>bar baz</strong></p>\n",
    "start_line": 6905,
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo **bar baz**\n"
  },
  {
    "end_line": 6916,
    "example": 441,
    "html": "<p>*foo <em>bar baz</em></p>\n",
    "start_line": 6912,
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo *bar baz*\n"
  },
  {
    "end_line": 6925,
    "example": 442,
    "html": "<p>*<a href=\"/url\">bar*</a></p>\n",
    "start_line": 6921,
    "section": "Emphasis and strong emphasis",
    "markdown": "*[bar*](/url)\n"
  },
  {
    "end_line": 6932,
    "example": 443,
    "html": "<p>_foo <a href=\"/url\">bar_</a></p>\n",
    "start_line": 6928,
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo [bar_](/url)\n"
  },
  {
    "end_line": 6939,
    "example": 444,
    "html": "<p>*<img src=\"foo\" title=\"*\"/></p>\n",
    "start_line": 6935,
    "section": "Emphasis and strong emphasis",
    "markdown": "*<img src=\"foo\" title=\"*\"/>\n"
  },
  {
    "end_line": 6946,
    "example": 445,
    "html": "<p>**<a href=\"**\"></p>\n",
    "start_line": 6942,
    "section": "Emphasis and strong emphasis",
    "markdown": "**<a href=\"**\">\n"
  },
  {
    "end_line": 6953,
    "example": 446,
    "html": "<p>__<a href=\"__\"></p>\n",
    "start_line": 6949,
    "section": "Emphasis and strong emphasis",
    "markdown": "__<a href=\"__\">\n"
  },
  {
    "end_line": 6960,
    "example": 447,
    "html": "<p><em>a <code>*</code></em></p>\n",
    "start_line": 6956,
    "section": "Emphasis and strong emphasis",
    "markdown": "*a `*`*\n"
  },
  {
    "end_line": 6967,
    "example": 448,
    "html": "<p><em>a <code>_</code></em></p>\n",
    "start_line": 6963,
    "section": "Emphasis and strong emphasis",
    "markdown": "_a `_`_\n"
  },
  {
    "end_line": 6974,
    "example": 449,
    "html": "<p>**a<a href=\"http://foo.bar/?q=**\">http://foo.bar/?q=**</a></p>\n",
    "start_line": 6970,
    "section": "Emphasis and strong emphasis",
    "markdown": "**a<http://foo.bar/?q=**>\n"
  },
  {
    "end_line": 6981,
    "example": 450,
    "html": "<p>__a<a href=\"http://foo.bar/?q=__\">http://foo.bar/?q=__</a></p>\n",
    "start_line": 6977,
    "section": "Emphasis and strong emphasis",
    "markdown": "__a<http://foo.bar/?q=__>\n"
  },
  {
    "end_line": 7061,
    "example": 451,
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "start_line": 7057,
    "section": "Links",
    "markdown": "[link](/uri \"title\")\n"
  },
  {
    "end_line": 7070,
    "example": 452,
    "html": "<p><a href=\"/uri\">link</a></p>\n",
    "start_line": 7066,
    "section": "Links",
    "markdown": "[link](/uri)\n"
  },
  {
    "end_line": 7079,
    "example": 453,
    "html": "<p><a href=\"\">link</a></p>\n",
    "start_line": 7075,
    "section": "Links",
    "markdown": "[link]()\n"
  },
  {
    "end_line": 7086,
    "example": 454,
    "html": "<p><a href=\"\">link</a></p>\n",
    "start_line": 7082,
    "section": "Links",
    "markdown": "[link](<>)\n"
  },
  {
    "end_line": 7096,
    "example": 455,
    "html": "<p>[link](/my uri)</p>\n",
    "start_line": 7092,
    "section": "Links",
    "markdown": "[link](/my uri)\n"
  },
  {
    "end_line": 7103,
    "example": 456,
    "html": "<p>[link](&lt;/my uri&gt;)</p>\n",
    "start_line": 7099,
    "section": "Links",
    "markdown": "[link](</my uri>)\n"
  },
  {
    "end_line": 7112,
    "example": 457,
    "html": "<p>[link](foo\nbar)</p>\n",
    "start_line": 7106,
    "section": "Links",
    "markdown": "[link](foo\nbar)\n"
  },
  {
    "end_line": 7121,
    "example": 458,
    "html": "<p>[link](<foo\nbar>)</p>\n",
    "start_line": 7115,
    "section": "Links",
    "markdown": "[link](<foo\nbar>)\n"
  },
  {
    "end_line": 7129,
    "example": 459,
    "html": "<p><a href=\"(foo)\">link</a></p>\n",
    "start_line": 7125,
    "section": "Links",
    "markdown": "[link](\\(foo\\))\n"
  },
  {
    "end_line": 7137,
    "example": 460,
    "html": "<p><a href=\"(foo)and(bar)\">link</a></p>\n",
    "start_line": 7133,
    "section": "Links",
    "markdown": "[link]((foo)and(bar))\n"
  },
  {
    "end_line": 7146,
    "example": 461,
    "html": "<p>[link](foo(and(bar)))</p>\n",
    "start_line": 7142,
    "section": "Links",
    "markdown": "[link](foo(and(bar)))\n"
  },
  {
    "end_line": 7153,
    "example": 462,
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "start_line": 7149,
    "section": "Links",
    "markdown": "[link](foo(and\\(bar\\)))\n"
  },
  {
    "end_line": 7160,
    "example": 463,
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "start_line": 7156,
    "section": "Links",
    "markdown": "[link](<foo(and(bar))>)\n"
  },
  {
    "end_line": 7170,
    "example": 464,
    "html": "<p><a href=\"foo):\">link</a></p>\n",
    "start_line": 7166,
    "section": "Links",
    "markdown": "[link](foo\\)\\:)\n"
  },
  {
    "end_line": 7185,
    "example": 465,
    "html": "<p><a href=\"#fragment\">link</a></p>\n<p><a href=\"http://example.com#fragment\">link</a></p>\n<p><a href=\"http://example.com?foo=3#frag\">link</a></p>\n",
    "start_line": 7175,
    "section": "Links",
    "markdown": "[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=3#frag)\n"
  },
  {
    "end_line": 7195,
    "example": 466,
    "html": "<p><a href=\"foo%5Cbar\">link</a></p>\n",
    "start_line": 7191,
    "section": "Links",
    "markdown": "[link](foo\\bar)\n"
  },
  {
    "end_line": 7211,
    "example": 467,
    "html": "<p><a href=\"foo%20b%C3%A4\">link</a></p>\n",
    "start_line": 7207,
    "section": "Links",
    "markdown": "[link](foo%20b&auml;)\n"
  },
  {
    "end_line": 7222,
    "example": 468,
    "html": "<p><a href=\"%22title%22\">link</a></p>\n",
    "start_line": 7218,
    "section": "Links",
    "markdown": "[link](\"title\")\n"
  },
  {
    "end_line": 7235,
    "example": 469,
    "html": "<p><a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a></p>\n",
    "start_line": 7227,
    "section": "Links",
    "markdown": "[link](/url \"title\")\n[link](/url 'title')\n[link](/url (title))\n"
  },
  {
    "end_line": 7245,
    "example": 470,
    "html": "<p><a href=\"/url\" title=\"title &quot;&quot;\">link</a></p>\n",
    "start_line": 7241,
    "section": "Links",
    "markdown": "[link](/url \"title \\\"&quot;\")\n"
  },
  {
    "end_line": 7254,
    "example": 471,
    "html": "<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n",
    "start_line": 7250,
    "section": "Links",
    "markdown": "[link](/url \"title \"and\" title\")\n"
  },
  {
    "end_line": 7263,
    "example": 472,
    "html": "<p><a href=\"/url\" title=\"title &quot;and&quot; title\">link</a></p>\n",
    "start_line": 7259,
    "section": "Links",
    "markdown": "[link](/url 'title \"and\" title')\n"
  },
  {
    "end_line": 7288,
    "example": 473,
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "start_line": 7283,
    "section": "Links",
    "markdown": "[link](   /uri\n  \"title\"  )\n"
  },
  {
    "end_line": 7298,
    "example": 474,
    "html": "<p>[link] (/uri)</p>\n",
    "start_line": 7294,
    "section": "Links",
    "markdown": "[link] (/uri)\n"
  },
  {
    "end_line": 7308,
    "example": 475,
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "start_line": 7304,
    "section": "Links",
    "markdown": "[link [foo [bar]]](/uri)\n"
  },
  {
    "end_line": 7315,
    "example": 476,
    "html": "<p>[link] bar](/uri)</p>\n",
    "start_line": 7311,
    "section": "Links",
    "markdown": "[link] bar](/uri)\n"
  },
  {
    "end_line": 7322,
    "example": 477,
    "html": "<p>[link <a href=\"/uri\">bar</a></p>\n",
    "start_line": 7318,
    "section": "Links",
    "markdown": "[link [bar](/uri)\n"
  },
  {
    "end_line": 7329,
    "example": 478,
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "start_line": 7325,
    "section": "Links",
    "markdown": "[link \\[bar](/uri)\n"
  },
  {
    "end_line": 7338,
    "example": 479,
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "start_line": 7334,
    "section": "Links",
    "markdown": "[link *foo **bar** `#`*](/uri)\n"
  },
  {
    "end_line": 7345,
    "example": 480,
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "start_line": 7341,
    "section": "Links",
    "markdown": "[![moon](moon.jpg)](/uri)\n"
  },
  {
    "end_line": 7354,
    "example": 481,
    "html": "<p>[foo <a href=\"/uri\">bar</a>](/uri)</p>\n",
    "start_line": 7350,
    "section": "Links",
    "markdown": "[foo [bar](/uri)](/uri)\n"
  },
  {
    "end_line": 7361,
    "example": 482,
    "html": "<p>[foo <em>[bar <a href=\"/uri\">baz</a>](/uri)</em>](/uri)</p>\n",
    "start_line": 7357,
    "section": "Links",
    "markdown": "[foo *[bar [baz](/uri)](/uri)*](/uri)\n"
  },
  {
    "end_line": 7368,
    "example": 483,
    "html": "<p><img src=\"uri3\" alt=\"[foo](uri2)\" /></p>\n",
    "start_line": 7364,
    "section": "Links",
    "markdown": "![[[foo](uri1)](uri2)](uri3)\n"
  },
  {
    "end_line": 7378,
    "example": 484,
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "start_line": 7374,
    "section": "Links",
    "markdown": "*[foo*](/uri)\n"
  },
  {
    "end_line": 7385,
    "example": 485,
    "html": "<p><a href=\"baz*\">foo *bar</a></p>\n",
    "start_line": 7381,
    "section": "Links",
    "markdown": "[foo *bar](baz*)\n"
  },
  {
    "end_line": 7395,
    "example": 486,
    "html": "<p><em>foo [bar</em> baz]</p>\n",
    "start_line": 7391,
    "section": "Links",
    "markdown": "*foo [bar* baz]\n"
  },
  {
    "end_line": 7405,
    "example": 487,
    "html": "<p>[foo <bar attr=\"](baz)\"></p>\n",
    "start_line": 7401,
    "section": "Links",
    "markdown": "[foo <bar attr=\"](baz)\">\n"
  },
  {
    "end_line": 7412,
    "example": 488,
    "html": "<p>[foo<code>](/uri)</code></p>\n",
    "start_line": 7408,
    "section": "Links",
    "markdown": "[foo`](/uri)`\n"
  },
  {
    "end_line": 7419,
    "example": 489,
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D(uri)\">http://example.com/?search=](uri)</a></p>\n",
    "start_line": 7415,
    "section": "Links",
    "markdown": "[foo<http://example.com/?search=](uri)>\n"
  },
  {
    "end_line": 7456,
    "example": 490,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 7450,
    "section": "Links",
    "markdown": "[foo][bar]\n\n[bar]: /url \"title\"\n"
  },
  {
    "end_line": 7471,
    "example": 491,
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "start_line": 7465,
    "section": "Links",
    "markdown": "[link [foo [bar]]][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7480,
    "example": 492,
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "start_line": 7474,
    "section": "Links",
    "markdown": "[link \\[bar][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7491,
    "example": 493,
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "start_line": 7485,
    "section": "Links",
    "markdown": "[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7500,
    "example": 494,
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "start_line": 7494,
    "section": "Links",
    "markdown": "[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7511,
    "example": 495,
    "html": "<p>[foo <a href=\"/uri\">bar</a>]<a href=\"/uri\">ref</a></p>\n",
    "start_line": 7505,
    "section": "Links",
    "markdown": "[foo [bar](/uri)][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7520,
    "example": 496,
    "html": "<p>[foo <em>bar <a href=\"/uri\">baz</a></em>]<a href=\"/uri\">ref</a></p>\n",
    "start_line": 7514,
    "section": "Links",
    "markdown": "[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7535,
    "example": 497,
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "start_line": 7529,
    "section": "Links",
    "markdown": "*[foo*][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7544,
    "example": 498,
    "html": "<p><a href=\"/uri\">foo *bar</a></p>\n",
    "start_line": 7538,
    "section": "Links",
    "markdown": "[foo *bar][ref]\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7556,
    "example": 499,
    "html": "<p>[foo <bar attr=\"][ref]\"></p>\n",
    "start_line": 7550,
    "section": "Links",
    "markdown": "[foo <bar attr=\"][ref]\">\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7565,
    "example": 500,
    "html": "<p>[foo<code>][ref]</code></p>\n",
    "start_line": 7559,
    "section": "Links",
    "markdown": "[foo`][ref]`\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7574,
    "example": 501,
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D%5Bref%5D\">http://example.com/?search=][ref]</a></p>\n",
    "start_line": 7568,
    "section": "Links",
    "markdown": "[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri\n"
  },
  {
    "end_line": 7585,
    "example": 502,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 7579,
    "section": "Links",
    "markdown": "[foo][BaR]\n\n[bar]: /url \"title\"\n"
  },
  {
    "end_line": 7596,
    "example": 503,
    "html": "<p><a href=\"/url\">Толпой</a> is a Russian word.</p>\n",
    "start_line": 7590,
    "section": "Links",
    "markdown": "[Толпой][Толпой] is a Russian word.\n\n[ТОЛПОЙ]: /url\n"
  },
  {
    "end_line": 7609,
    "example": 504,
    "html": "<p><a href=\"/url\">Baz</a></p>\n",
    "start_line": 7602,
    "section": "Links",
    "markdown": "[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n"
  },
  {
    "end_line": 7621,
    "example": 505,
    "html": "<p>[foo] <a href=\"/url\" title=\"title\">bar</a></p>\n",
    "start_line": 7615,
    "section": "Links",
    "markdown": "[foo] [bar]\n\n[bar]: /url \"title\"\n"
  },
  {
    "end_line": 7632,
    "example": 506,
    "html": "<p>[foo]\n<a href=\"/url\" title=\"title\">bar</a></p>\n",
    "start_line": 7624,
    "section": "Links",
    "markdown": "[foo]\n[bar]\n\n[bar]: /url \"title\"\n"
  },
  {
    "end_line": 7673,
    "example": 507,
    "html": "<p><a href=\"/url1\">bar</a></p>\n",
    "start_line": 7665,
    "section": "Links",
    "markdown": "[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n"
  },
  {
    "end_line": 7686,
    "example": 508,
    "html": "<p>[bar][foo!]</p>\n",
    "start_line": 7680,
    "section": "Links",
    "markdown": "[bar][foo\\!]\n\n[foo!]: /url\n"
  },
  {
    "end_line": 7699,
    "example": 509,
    "html": "<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n",
    "start_line": 7692,
    "section": "Links",
    "markdown": "[foo][ref[]\n\n[ref[]: /uri\n"
  },
  {
    "end_line": 7709,
    "example": 510,
    "html": "<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n",
    "start_line": 7702,
    "section": "Links",
    "markdown": "[foo][ref[bar]]\n\n[ref[bar]]: /uri\n"
  },
  {
    "end_line": 7719,
    "example": 511,
    "html": "<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n",
    "start_line": 7712,
    "section": "Links",
    "markdown": "[[[foo]]]\n\n[[[foo]]]: /url\n"
  },
  {
    "end_line": 7728,
    "example": 512,
    "html": "<p><a href=\"/uri\">foo</a></p>\n",
    "start_line": 7722,
    "section": "Links",
    "markdown": "[foo][ref\\[]\n\n[ref\\[]: /uri\n"
  },
  {
    "end_line": 7739,
    "example": 513,
    "html": "<p><a href=\"/uri\">bar\\</a></p>\n",
    "start_line": 7733,
    "section": "Links",
    "markdown": "[bar\\\\]: /uri\n\n[bar\\\\]\n"
  },
  {
    "end_line": 7751,
    "example": 514,
    "html": "<p>[]</p>\n<p>[]: /uri</p>\n",
    "start_line": 7744,
    "section": "Links",
    "markdown": "[]\n\n[]: /uri\n"
  },
  {
    "end_line": 7765,
    "example": 515,
    "html": "<p>[\n]</p>\n<p>[\n]: /uri</p>\n",
    "start_line": 7754,
    "section": "Links",
    "markdown": "[\n ]\n\n[\n ]: /uri\n"
  },
  {
    "end_line": 7783,
    "example": 516,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 7777,
    "section": "Links",
    "markdown": "[foo][]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7792,
    "example": 517,
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "start_line": 7786,
    "section": "Links",
    "markdown": "[*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n"
  },
  {
    "end_line": 7803,
    "example": 518,
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "start_line": 7797,
    "section": "Links",
    "markdown": "[Foo][]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7818,
    "example": 519,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a>\n[]</p>\n",
    "start_line": 7810,
    "section": "Links",
    "markdown": "[foo] \n[]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7836,
    "example": 520,
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 7830,
    "section": "Links",
    "markdown": "[foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7845,
    "example": 521,
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "start_line": 7839,
    "section": "Links",
    "markdown": "[*foo* bar]\n\n[*foo* bar]: /url \"title\"\n"
  },
  {
    "end_line": 7854,
    "example": 522,
    "html": "<p>[<a href=\"/url\" title=\"title\"><em>foo</em> bar</a>]</p>\n",
    "start_line": 7848,
    "section": "Links",
    "markdown": "[[*foo* bar]]\n\n[*foo* bar]: /url \"title\"\n"
  },
  {
    "end_line": 7863,
    "example": 523,
    "html": "<p>[[bar <a href=\"/url\">foo</a></p>\n",
    "start_line": 7857,
    "section": "Links",
    "markdown": "[[bar [foo]\n\n[foo]: /url\n"
  },
  {
    "end_line": 7874,
    "example": 524,
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "start_line": 7868,
    "section": "Links",
    "markdown": "[Foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7885,
    "example": 525,
    "html": "<p><a href=\"/url\">foo</a> bar</p>\n",
    "start_line": 7879,
    "section": "Links",
    "markdown": "[foo] bar\n\n[foo]: /url\n"
  },
  {
    "end_line": 7897,
    "example": 526,
    "html": "<p>[foo]</p>\n",
    "start_line": 7891,
    "section": "Links",
    "markdown": "\\[foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 7909,
    "example": 527,
    "html": "<p>*<a href=\"/url\">foo*</a></p>\n",
    "start_line": 7903,
    "section": "Links",
    "markdown": "[foo*]: /url\n\n*[foo*]\n"
  },
  {
    "end_line": 7921,
    "example": 528,
    "html": "<p><a href=\"/url2\">foo</a></p>\n",
    "start_line": 7914,
    "section": "Links",
    "markdown": "[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n"
  },
  {
    "end_line": 7933,
    "example": 529,
    "html": "<p>[foo]<a href=\"/url\">bar</a></p>\n",
    "start_line": 7927,
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url\n"
  },
  {
    "end_line": 7946,
    "example": 530,
    "html": "<p><a href=\"/url2\">foo</a><a href=\"/url1\">baz</a></p>\n",
    "start_line": 7939,
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n"
  },
  {
    "end_line": 7959,
    "example": 531,
    "html": "<p>[foo]<a href=\"/url1\">bar</a></p>\n",
    "start_line": 7952,
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n"
  },
  {
    "end_line": 7979,
    "example": 532,
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "start_line": 7975,
    "section": "Images",
    "markdown": "![foo](/url \"title\")\n"
  },
  {
    "end_line": 7988,
    "example": 533,
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "start_line": 7982,
    "section": "Images",
    "markdown": "![foo *bar*]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n"
  },
  {
    "end_line": 7995,
    "example": 534,
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "start_line": 7991,
    "section": "Images",
    "markdown": "![foo ![bar](/url)](/url2)\n"
  },
  {
    "end_line": 8002,
    "example": 535,
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "start_line": 7998,
    "section": "Images",
    "markdown": "![foo [bar](/url)](/url2)\n"
  },
  {
    "end_line": 8018,
    "example": 536,
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "start_line": 8012,
    "section": "Images",
    "markdown": "![foo *bar*][]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n"
  },
  {
    "end_line": 8027,
    "example": 537,
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "start_line": 8021,
    "section": "Images",
    "markdown": "![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg \"train & tracks\"\n"
  },
  {
    "end_line": 8034,
    "example": 538,
    "html": "<p><img src=\"train.jpg\" alt=\"foo\" /></p>\n",
    "start_line": 8030,
    "section": "Images",
    "markdown": "![foo](train.jpg)\n"
  },
  {
    "end_line": 8041,
    "example": 539,
    "html": "<p>My <img src=\"/path/to/train.jpg\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "start_line": 8037,
    "section": "Images",
    "markdown": "My ![foo bar](/path/to/train.jpg  \"title\"   )\n"
  },
  {
    "end_line": 8048,
    "example": 540,
    "html": "<p><img src=\"url\" alt=\"foo\" /></p>\n",
    "start_line": 8044,
    "section": "Images",
    "markdown": "![foo](<url>)\n"
  },
  {
    "end_line": 8055,
    "example": 541,
    "html": "<p><img src=\"/url\" alt=\"\" /></p>\n",
    "start_line": 8051,
    "section": "Images",
    "markdown": "![](/url)\n"
  },
  {
    "end_line": 8066,
    "example": 542,
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "start_line": 8060,
    "section": "Images",
    "markdown": "![foo][bar]\n\n[bar]: /url\n"
  },
  {
    "end_line": 8075,
    "example": 543,
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "start_line": 8069,
    "section": "Images",
    "markdown": "![foo][bar]\n\n[BAR]: /url\n"
  },
  {
    "end_line": 8086,
    "example": 544,
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "start_line": 8080,
    "section": "Images",
    "markdown": "![foo][]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8095,
    "example": 545,
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "start_line": 8089,
    "section": "Images",
    "markdown": "![*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n"
  },
  {
    "end_line": 8106,
    "example": 546,
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "start_line": 8100,
    "section": "Images",
    "markdown": "![Foo][]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8120,
    "example": 547,
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" />\n[]</p>\n",
    "start_line": 8112,
    "section": "Images",
    "markdown": "![foo] \n[]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8131,
    "example": 548,
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "start_line": 8125,
    "section": "Images",
    "markdown": "![foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8140,
    "example": 549,
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "start_line": 8134,
    "section": "Images",
    "markdown": "![*foo* bar]\n\n[*foo* bar]: /url \"title\"\n"
  },
  {
    "end_line": 8152,
    "example": 550,
    "html": "<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n",
    "start_line": 8145,
    "section": "Images",
    "markdown": "![[foo]]\n\n[[foo]]: /url \"title\"\n"
  },
  {
    "end_line": 8163,
    "example": 551,
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "start_line": 8157,
    "section": "Images",
    "markdown": "![Foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8175,
    "example": 552,
    "html": "<p>![foo]</p>\n",
    "start_line": 8169,
    "section": "Images",
    "markdown": "\\!\\[foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8187,
    "example": 553,
    "html": "<p>!<a href=\"/url\" title=\"title\">foo</a></p>\n",
    "start_line": 8181,
    "section": "Images",
    "markdown": "\\![foo]\n\n[foo]: /url \"title\"\n"
  },
  {
    "end_line": 8218,
    "example": 554,
    "html": "<p><a href=\"http://foo.bar.baz\">http://foo.bar.baz</a></p>\n",
    "start_line": 8214,
    "section": "Autolinks",
    "markdown": "<http://foo.bar.baz>\n"
  },
  {
    "end_line": 8225,
    "example": 555,
    "html": "<p><a href=\"http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean\">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n",
    "start_line": 8221,
    "section": "Autolinks",
    "markdown": "<http://foo.bar.baz/test?q=hello&id=22&boolean>\n"
  },
  {
    "end_line": 8232,
    "example": 556,
    "html": "<p><a href=\"irc://foo.bar:2233/baz\">irc://foo.bar:2233/baz</a></p>\n",
    "start_line": 8228,
    "section": "Autolinks",
    "markdown": "<irc://foo.bar:2233/baz>\n"
  },
  {
    "end_line": 8241,
    "example": 557,
    "html": "<p><a href=\"MAILTO:FOO@BAR.BAZ\">MAILTO:FOO@BAR.BAZ</a></p>\n",
    "start_line": 8237,
    "section": "Autolinks",
    "markdown": "<MAILTO:FOO@BAR.BAZ>\n"
  },
  {
    "end_line": 8253,
    "example": 558,
    "html": "<p><a href=\"a+b+c:d\">a+b+c:d</a></p>\n",
    "start_line": 8249,
    "section": "Autolinks",
    "markdown": "<a+b+c:d>\n"
  },
  {
    "end_line": 8260,
    "example": 559,
    "html": "<p><a href=\"made-up-scheme://foo,bar\">made-up-scheme://foo,bar</a></p>\n",
    "start_line": 8256,
    "section": "Autolinks",
    "markdown": "<made-up-scheme://foo,bar>\n"
  },
  {
    "end_line": 8267,
    "example": 560,
    "html": "<p><a href=\"http://../\">http://../</a></p>\n",
    "start_line": 8263,
    "section": "Autolinks",
    "markdown": "<http://../>\n"
  },
  {
    "end_line": 8274,
    "example": 561,
    "html": "<p><a href=\"localhost:5001/foo\">localhost:5001/foo</a></p>\n",
    "start_line": 8270,
    "section": "Autolinks",
    "markdown": "<localhost:5001/foo>\n"
  },
  {
    "end_line": 8283,
    "example": 562,
    "html": "<p>&lt;http://foo.bar/baz bim&gt;</p>\n",
    "start_line": 8279,
    "section": "Autolinks",
    "markdown": "<http://foo.bar/baz bim>\n"
  },
  {
    "end_line": 8292,
    "example": 563,
    "html": "<p><a href=\"http://example.com/%5C%5B%5C\">http://example.com/\\[\\</a></p>\n",
    "start_line": 8288,
    "section": "Autolinks",
    "markdown": "<http://example.com/\\[\\>\n"
  },
  {
    "end_line": 8314,
    "example": 564,
    "html": "<p><a href=\"mailto:foo@bar.example.com\">foo@bar.example.com</a></p>\n",
    "start_line": 8310,
    "section": "Autolinks",
    "markdown": "<foo@bar.example.com>\n"
  },
  {
    "end_line": 8321,
    "example": 565,
    "html": "<p><a href=\"mailto:foo+special@Bar.baz-bar0.com\">foo+special@Bar.baz-bar0.com</a></p>\n",
    "start_line": 8317,
    "section": "Autolinks",
    "markdown": "<foo+special@Bar.baz-bar0.com>\n"
  },
  {
    "end_line": 8330,
    "example": 566,
    "html": "<p>&lt;foo+@bar.example.com&gt;</p>\n",
    "start_line": 8326,
    "section": "Autolinks",
    "markdown": "<foo\\+@bar.example.com>\n"
  },
  {
    "end_line": 8339,
    "example": 567,
    "html": "<p>&lt;&gt;</p>\n",
    "start_line": 8335,
    "section": "Autolinks",
    "markdown": "<>\n"
  },
  {
    "end_line": 8346,
    "example": 568,
    "html": "<p>&lt; http://foo.bar &gt;</p>\n",
    "start_line": 8342,
    "section": "Autolinks",
    "markdown": "< http://foo.bar >\n"
  },
  {
    "end_line": 8353,
    "example": 569,
    "html": "<p>&lt;m:abc&gt;</p>\n",
    "start_line": 8349,
    "section": "Autolinks",
    "markdown": "<m:abc>\n"
  },
  {
    "end_line": 8360,
    "example": 570,
    "html": "<p>&lt;foo.bar.baz&gt;</p>\n",
    "start_line": 8356,
    "section": "Autolinks",
    "markdown": "<foo.bar.baz>\n"
  },
  {
    "end_line": 8367,
    "example": 571,
    "html": "<p>http://example.com</p>\n",
    "start_line": 8363,
    "section": "Autolinks",
    "markdown": "http://example.com\n"
  },
  {
    "end_line": 8374,
    "example": 572,
    "html": "<p>foo@bar.example.com</p>\n",
    "start_line": 8370,
    "section": "Autolinks",
    "markdown": "foo@bar.example.com\n"
  },
  {
    "end_line": 8456,
    "example": 573,
    "html": "<p><a><bab><c2c></p>\n",
    "start_line": 8452,
    "section": "Raw HTML",
    "markdown": "<a><bab><c2c>\n"
  },
  {
    "end_line": 8465,
    "example": 574,
    "html": "<p><a/><b2/></p>\n",
    "start_line": 8461,
    "section": "Raw HTML",
    "markdown": "<a/><b2/>\n"
  },
  {
    "end_line": 8476,
    "example": 575,
    "html": "<p><a  /><b2\ndata=\"foo\" ></p>\n",
    "start_line": 8470,
    "section": "Raw HTML",
    "markdown": "<a  /><b2\ndata=\"foo\" >\n"
  },
  {
    "end_line": 8487,
    "example": 576,
    "html": "<p><a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 /></p>\n",
    "start_line": 8481,
    "section": "Raw HTML",
    "markdown": "<a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 />\n"
  },
  {
    "end_line": 8496,
    "example": 577,
    "html": "<p>Foo <responsive-image src=\"foo.jpg\" /></p>\n",
    "start_line": 8492,
    "section": "Raw HTML",
    "markdown": "Foo <responsive-image src=\"foo.jpg\" />\n"
  },
  {
    "end_line": 8505,
    "example": 578,
    "html": "<p>&lt;33&gt; &lt;__&gt;</p>\n",
    "start_line": 8501,
    "section": "Raw HTML",
    "markdown": "<33> <__>\n"
  },
  {
    "end_line": 8514,
    "example": 579,
    "html": "<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n",
    "start_line": 8510,
    "section": "Raw HTML",
    "markdown": "<a h*#ref=\"hi\">\n"
  },
  {
    "end_line": 8523,
    "example": 580,
    "html": "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
    "start_line": 8519,
    "section": "Raw HTML",
    "markdown": "<a href=\"hi'> <a href=hi'>\n"
  },
  {
    "end_line": 8534,
    "example": 581,
    "html": "<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;</p>\n",
    "start_line": 8528,
    "section": "Raw HTML",
    "markdown": "< a><\nfoo><bar/ >\n"
  },
  {
    "end_line": 8543,
    "example": 582,
    "html": "<p>&lt;a href='bar'title=title&gt;</p>\n",
    "start_line": 8539,
    "section": "Raw HTML",
    "markdown": "<a href='bar'title=title>\n"
  },
  {
    "end_line": 8552,
    "example": 583,
    "html": "<p></a></foo ></p>\n",
    "start_line": 8548,
    "section": "Raw HTML",
    "markdown": "</a></foo >\n"
  },
  {
    "end_line": 8561,
    "example": 584,
    "html": "<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n",
    "start_line": 8557,
    "section": "Raw HTML",
    "markdown": "</a href=\"foo\">\n"
  },
  {
    "end_line": 8572,
    "example": 585,
    "html": "<p>foo <!-- this is a\ncomment - with hyphen --></p>\n",
    "start_line": 8566,
    "section": "Raw HTML",
    "markdown": "foo <!-- this is a\ncomment - with hyphen -->\n"
  },
  {
    "end_line": 8579,
    "example": 586,
    "html": "<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>\n",
    "start_line": 8575,
    "section": "Raw HTML",
    "markdown": "foo <!-- not a comment -- two hyphens -->\n"
  },
  {
    "end_line": 8591,
    "example": 587,
    "html": "<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>\n",
    "start_line": 8584,
    "section": "Raw HTML",
    "markdown": "foo <!--> foo -->\n\nfoo <!-- foo--->\n"
  },
  {
    "end_line": 8600,
    "example": 588,
    "html": "<p>foo <?php echo $a; ?></p>\n",
    "start_line": 8596,
    "section": "Raw HTML",
    "markdown": "foo <?php echo $a; ?>\n"
  },
  {
    "end_line": 8609,
    "example": 589,
    "html": "<p>foo <!ELEMENT br EMPTY></p>\n",
    "start_line": 8605,
    "section": "Raw HTML",
    "markdown": "foo <!ELEMENT br EMPTY>\n"
  },
  {
    "end_line": 8618,
    "example": 590,
    "html": "<p>foo <![CDATA[>&<]]></p>\n",
    "start_line": 8614,
    "section": "Raw HTML",
    "markdown": "foo <![CDATA[>&<]]>\n"
  },
  {
    "end_line": 8628,
    "example": 591,
    "html": "<p>foo <a href=\"&ouml;\"></p>\n",
    "start_line": 8624,
    "section": "Raw HTML",
    "markdown": "foo <a href=\"&ouml;\">\n"
  },
  {
    "end_line": 8637,
    "example": 592,
    "html": "<p>foo <a href=\"\\*\"></p>\n",
    "start_line": 8633,
    "section": "Raw HTML",
    "markdown": "foo <a href=\"\\*\">\n"
  },
  {
    "end_line": 8644,
    "example": 593,
    "html": "<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n",
    "start_line": 8640,
    "section": "Raw HTML",
    "markdown": "<a href=\"\\\"\">\n"
  },
  {
    "end_line": 8660,
    "example": 594,
    "html": "<p>foo<br />\nbaz</p>\n",
    "start_line": 8654,
    "section": "Hard line breaks",
    "markdown": "foo  \nbaz\n"
  },
  {
    "end_line": 8672,
    "example": 595,
    "html": "<p>foo<br />\nbaz</p>\n",
    "start_line": 8666,
    "section": "Hard line breaks",
    "markdown": "foo\\\nbaz\n"
  },
  {
    "end_line": 8683,
    "example": 596,
    "html": "<p>foo<br />\nbaz</p>\n",
    "start_line": 8677,
    "section": "Hard line breaks",
    "markdown": "foo       \nbaz\n"
  },
  {
    "end_line": 8694,
    "example": 597,
    "html": "<p>foo<br />\nbar</p>\n",
    "start_line": 8688,
    "section": "Hard line breaks",
    "markdown": "foo  \n     bar\n"
  },
  {
    "end_line": 8703,
    "example": 598,
    "html": "<p>foo<br />\nbar</p>\n",
    "start_line": 8697,
    "section": "Hard line breaks",
    "markdown": "foo\\\n     bar\n"
  },
  {
    "end_line": 8715,
    "example": 599,
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "start_line": 8709,
    "section": "Hard line breaks",
    "markdown": "*foo  \nbar*\n"
  },
  {
    "end_line": 8724,
    "example": 600,
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "start_line": 8718,
    "section": "Hard line breaks",
    "markdown": "*foo\\\nbar*\n"
  },
  {
    "end_line": 8734,
    "example": 601,
    "html": "<p><code>code span</code></p>\n",
    "start_line": 8729,
    "section": "Hard line breaks",
    "markdown": "`code  \nspan`\n"
  },
  {
    "end_line": 8742,
    "example": 602,
    "html": "<p><code>code\\ span</code></p>\n",
    "start_line": 8737,
    "section": "Hard line breaks",
    "markdown": "`code\\\nspan`\n"
  },
  {
    "end_line": 8753,
    "example": 603,
    "html": "<p><a href=\"foo  \nbar\"></p>\n",
    "start_line": 8747,
    "section": "Hard line breaks",
    "markdown": "<a href=\"foo  \nbar\">\n"
  },
  {
    "end_line": 8762,
    "example": 604,
    "html": "<p><a href=\"foo\\\nbar\"></p>\n",
    "start_line": 8756,
    "section": "Hard line breaks",
    "markdown": "<a href=\"foo\\\nbar\">\n"
  },
  {
    "end_line": 8773,
    "example": 605,
    "html": "<p>foo\\</p>\n",
    "start_line": 8769,
    "section": "Hard line breaks",
    "markdown": "foo\\\n"
  },
  {
    "end_line": 8780,
    "example": 606,
    "html": "<p>foo</p>\n",
    "start_line": 8776,
    "section": "Hard line breaks",
    "markdown": "foo  \n"
  },
  {
    "end_line": 8787,
    "example": 607,
    "html": "<h3>foo\\</h3>\n",
    "start_line": 8783,
    "section": "Hard line breaks",
    "markdown": "### foo\\\n"
  },
  {
    "end_line": 8794,
    "example": 608,
    "html": "<h3>foo</h3>\n",
    "start_line": 8790,
    "section": "Hard line breaks",
    "markdown": "### foo  \n"
  },
  {
    "end_line": 8811,
    "example": 609,
    "html": "<p>foo\nbaz</p>\n",
    "start_line": 8805,
    "section": "Soft line breaks",
    "markdown": "foo\nbaz\n"
  },
  {
    "end_line": 8823,
    "example": 610,
    "html": "<p>foo\nbaz</p>\n",
    "start_line": 8817,
    "section": "Soft line breaks",
    "markdown": "foo \n baz\n"
  },
  {
    "end_line": 8841,
    "example": 611,
    "html": "<p>hello $.;'there</p>\n",
    "start_line": 8837,
    "section": "Textual content",
    "markdown": "hello $.;'there\n"
  },
  {
    "end_line": 8848,
    "example": 612,
    "html": "<p>Foo χρῆν</p>\n",
    "start_line": 8844,
    "section": "Textual content",
    "markdown": "Foo χρῆν\n"
  },
  {
    "end_line": 8857,
    "example": 613,
    "html": "<p>Multiple     spaces</p>\n",
    "start_line": 8853,
    "section": "Textual content",
    "markdown": "Multiple     spaces\n"
  }
];

export default tests;