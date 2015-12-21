interface TestData {
	html: string;
	section: string;
	markdown: string;
	start_line: number;
	example: number;
	end_line: number;
}

var tests:[TestData] = [
  {
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "section": "Tabs",
    "markdown": "\tfoo\tbaz\t\tbim\n",
    "start_line": 265,
    "example": 1,
    "end_line": 270
  },
  {
    "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
    "section": "Tabs",
    "markdown": "  \tfoo\tbaz\t\tbim\n",
    "start_line": 272,
    "example": 2,
    "end_line": 277
  },
  {
    "html": "<pre><code>a\ta\nὐ\ta\n</code></pre>\n",
    "section": "Tabs",
    "markdown": "    a\ta\n    ὐ\ta\n",
    "start_line": 279,
    "example": 3,
    "end_line": 286
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "section": "Tabs",
    "markdown": "  - foo\n\n\tbar\n",
    "start_line": 288,
    "example": 4,
    "end_line": 299
  },
  {
    "html": "<blockquote>\n<p>foo\tbar</p>\n</blockquote>\n",
    "section": "Tabs",
    "markdown": ">\tfoo\tbar\n",
    "start_line": 301,
    "example": 5,
    "end_line": 307
  },
  {
    "html": "<pre><code>foo\nbar\n</code></pre>\n",
    "section": "Tabs",
    "markdown": "    foo\n\tbar\n",
    "start_line": 309,
    "example": 6,
    "end_line": 316
  },
  {
    "html": "<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n",
    "section": "Precedence",
    "markdown": "- `one\n- two`\n",
    "start_line": 339,
    "example": 7,
    "end_line": 347
  },
  {
    "html": "<hr />\n<hr />\n<hr />\n",
    "section": "Horizontal rules",
    "markdown": "***\n---\n___\n",
    "start_line": 377,
    "example": 8,
    "end_line": 385
  },
  {
    "html": "<p>+++</p>\n",
    "section": "Horizontal rules",
    "markdown": "+++\n",
    "start_line": 389,
    "example": 9,
    "end_line": 393
  },
  {
    "html": "<p>===</p>\n",
    "section": "Horizontal rules",
    "markdown": "===\n",
    "start_line": 395,
    "example": 10,
    "end_line": 399
  },
  {
    "html": "<p>--\n**\n__</p>\n",
    "section": "Horizontal rules",
    "markdown": "--\n**\n__\n",
    "start_line": 403,
    "example": 11,
    "end_line": 411
  },
  {
    "html": "<hr />\n<hr />\n<hr />\n",
    "section": "Horizontal rules",
    "markdown": " ***\n  ***\n   ***\n",
    "start_line": 415,
    "example": 12,
    "end_line": 423
  },
  {
    "html": "<pre><code>***\n</code></pre>\n",
    "section": "Horizontal rules",
    "markdown": "    ***\n",
    "start_line": 427,
    "example": 13,
    "end_line": 432
  },
  {
    "html": "<p>Foo\n***</p>\n",
    "section": "Horizontal rules",
    "markdown": "Foo\n    ***\n",
    "start_line": 434,
    "example": 14,
    "end_line": 440
  },
  {
    "html": "<hr />\n",
    "section": "Horizontal rules",
    "markdown": "_____________________________________\n",
    "start_line": 444,
    "example": 15,
    "end_line": 448
  },
  {
    "html": "<hr />\n",
    "section": "Horizontal rules",
    "markdown": " - - -\n",
    "start_line": 452,
    "example": 16,
    "end_line": 456
  },
  {
    "html": "<hr />\n",
    "section": "Horizontal rules",
    "markdown": " **  * ** * ** * **\n",
    "start_line": 458,
    "example": 17,
    "end_line": 462
  },
  {
    "html": "<hr />\n",
    "section": "Horizontal rules",
    "markdown": "-     -      -      -\n",
    "start_line": 464,
    "example": 18,
    "end_line": 468
  },
  {
    "html": "<hr />\n",
    "section": "Horizontal rules",
    "markdown": "- - - -    \n",
    "start_line": 472,
    "example": 19,
    "end_line": 476
  },
  {
    "html": "<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n",
    "section": "Horizontal rules",
    "markdown": "_ _ _ _ a\n\na------\n\n---a---\n",
    "start_line": 480,
    "example": 20,
    "end_line": 490
  },
  {
    "html": "<p><em>-</em></p>\n",
    "section": "Horizontal rules",
    "markdown": " *-*\n",
    "start_line": 495,
    "example": 21,
    "end_line": 499
  },
  {
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n",
    "section": "Horizontal rules",
    "markdown": "- foo\n***\n- bar\n",
    "start_line": 503,
    "example": 22,
    "end_line": 515
  },
  {
    "html": "<p>Foo</p>\n<hr />\n<p>bar</p>\n",
    "section": "Horizontal rules",
    "markdown": "Foo\n***\nbar\n",
    "start_line": 519,
    "example": 23,
    "end_line": 527
  },
  {
    "html": "<h2>Foo</h2>\n<p>bar</p>\n",
    "section": "Horizontal rules",
    "markdown": "Foo\n---\nbar\n",
    "start_line": 535,
    "example": 24,
    "end_line": 542
  },
  {
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n",
    "section": "Horizontal rules",
    "markdown": "* Foo\n* * *\n* Bar\n",
    "start_line": 547,
    "example": 25,
    "end_line": 559
  },
  {
    "html": "<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n",
    "section": "Horizontal rules",
    "markdown": "- Foo\n- * * *\n",
    "start_line": 563,
    "example": 26,
    "end_line": 573
  },
  {
    "html": "<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n",
    "section": "ATX headers",
    "markdown": "# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n",
    "start_line": 591,
    "example": 27,
    "end_line": 605
  },
  {
    "html": "<p>####### foo</p>\n",
    "section": "ATX headers",
    "markdown": "####### foo\n",
    "start_line": 609,
    "example": 28,
    "end_line": 613
  },
  {
    "html": "<p>#5 bolt</p>\n<p>#foobar</p>\n",
    "section": "ATX headers",
    "markdown": "#5 bolt\n\n#foobar\n",
    "start_line": 623,
    "example": 29,
    "end_line": 630
  },
  {
    "html": "<p>## foo</p>\n",
    "section": "ATX headers",
    "markdown": "\\## foo\n",
    "start_line": 634,
    "example": 30,
    "end_line": 638
  },
  {
    "html": "<h1>foo <em>bar</em> *baz*</h1>\n",
    "section": "ATX headers",
    "markdown": "# foo *bar* \\*baz\\*\n",
    "start_line": 642,
    "example": 31,
    "end_line": 646
  },
  {
    "html": "<h1>foo</h1>\n",
    "section": "ATX headers",
    "markdown": "#                  foo                     \n",
    "start_line": 650,
    "example": 32,
    "end_line": 654
  },
  {
    "html": "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n",
    "section": "ATX headers",
    "markdown": " ### foo\n  ## foo\n   # foo\n",
    "start_line": 658,
    "example": 33,
    "end_line": 666
  },
  {
    "html": "<pre><code># foo\n</code></pre>\n",
    "section": "ATX headers",
    "markdown": "    # foo\n",
    "start_line": 670,
    "example": 34,
    "end_line": 675
  },
  {
    "html": "<p>foo\n# bar</p>\n",
    "section": "ATX headers",
    "markdown": "foo\n    # bar\n",
    "start_line": 677,
    "example": 35,
    "end_line": 683
  },
  {
    "html": "<h2>foo</h2>\n<h3>bar</h3>\n",
    "section": "ATX headers",
    "markdown": "## foo ##\n  ###   bar    ###\n",
    "start_line": 687,
    "example": 36,
    "end_line": 693
  },
  {
    "html": "<h1>foo</h1>\n<h5>foo</h5>\n",
    "section": "ATX headers",
    "markdown": "# foo ##################################\n##### foo ##\n",
    "start_line": 697,
    "example": 37,
    "end_line": 703
  },
  {
    "html": "<h3>foo</h3>\n",
    "section": "ATX headers",
    "markdown": "### foo ###     \n",
    "start_line": 707,
    "example": 38,
    "end_line": 711
  },
  {
    "html": "<h3>foo ### b</h3>\n",
    "section": "ATX headers",
    "markdown": "### foo ### b\n",
    "start_line": 717,
    "example": 39,
    "end_line": 721
  },
  {
    "html": "<h1>foo#</h1>\n",
    "section": "ATX headers",
    "markdown": "# foo#\n",
    "start_line": 725,
    "example": 40,
    "end_line": 729
  },
  {
    "html": "<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n",
    "section": "ATX headers",
    "markdown": "### foo \\###\n## foo #\\##\n# foo \\#\n",
    "start_line": 734,
    "example": 41,
    "end_line": 742
  },
  {
    "html": "<hr />\n<h2>foo</h2>\n<hr />\n",
    "section": "ATX headers",
    "markdown": "****\n## foo\n****\n",
    "start_line": 747,
    "example": 42,
    "end_line": 755
  },
  {
    "html": "<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n",
    "section": "ATX headers",
    "markdown": "Foo bar\n# baz\nBar foo\n",
    "start_line": 757,
    "example": 43,
    "end_line": 765
  },
  {
    "html": "<h2></h2>\n<h1></h1>\n<h3></h3>\n",
    "section": "ATX headers",
    "markdown": "## \n#\n### ###\n",
    "start_line": 769,
    "example": 44,
    "end_line": 777
  },
  {
    "html": "<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n",
    "section": "Setext headers",
    "markdown": "Foo *bar*\n=========\n\nFoo *bar*\n---------\n",
    "start_line": 810,
    "example": 45,
    "end_line": 819
  },
  {
    "html": "<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "section": "Setext headers",
    "markdown": "Foo\n-------------------------\n\nFoo\n=\n",
    "start_line": 823,
    "example": 46,
    "end_line": 832
  },
  {
    "html": "<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n",
    "section": "Setext headers",
    "markdown": "   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n",
    "start_line": 837,
    "example": 47,
    "end_line": 850
  },
  {
    "html": "<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "    Foo\n    ---\n\n    Foo\n---\n",
    "start_line": 854,
    "example": 48,
    "end_line": 867
  },
  {
    "html": "<h2>Foo</h2>\n",
    "section": "Setext headers",
    "markdown": "Foo\n   ----      \n",
    "start_line": 872,
    "example": 49,
    "end_line": 877
  },
  {
    "html": "<p>Foo\n---</p>\n",
    "section": "Setext headers",
    "markdown": "Foo\n    ---\n",
    "start_line": 881,
    "example": 50,
    "end_line": 887
  },
  {
    "html": "<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "Foo\n= =\n\nFoo\n--- -\n",
    "start_line": 891,
    "example": 51,
    "end_line": 902
  },
  {
    "html": "<h2>Foo</h2>\n",
    "section": "Setext headers",
    "markdown": "Foo  \n-----\n",
    "start_line": 906,
    "example": 52,
    "end_line": 911
  },
  {
    "html": "<h2>Foo\\</h2>\n",
    "section": "Setext headers",
    "markdown": "Foo\\\n----\n",
    "start_line": 915,
    "example": 53,
    "end_line": 920
  },
  {
    "html": "<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n",
    "section": "Setext headers",
    "markdown": "`Foo\n----\n`\n\n<a title=\"a lot\n---\nof dashes\"/>\n",
    "start_line": 925,
    "example": 54,
    "end_line": 938
  },
  {
    "html": "<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "> Foo\n---\n",
    "start_line": 943,
    "example": 55,
    "end_line": 951
  },
  {
    "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "- Foo\n---\n",
    "start_line": 953,
    "example": 56,
    "end_line": 961
  },
  {
    "html": "<p>Foo\nBar</p>\n<hr />\n<p>Foo\nBar\n===</p>\n",
    "section": "Setext headers",
    "markdown": "Foo\nBar\n---\n\nFoo\nBar\n===\n",
    "start_line": 965,
    "example": 57,
    "end_line": 980
  },
  {
    "html": "<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n",
    "section": "Setext headers",
    "markdown": "---\nFoo\n---\nBar\n---\nBaz\n",
    "start_line": 984,
    "example": 58,
    "end_line": 996
  },
  {
    "html": "<p>====</p>\n",
    "section": "Setext headers",
    "markdown": "\n====\n",
    "start_line": 1000,
    "example": 59,
    "end_line": 1005
  },
  {
    "html": "<hr />\n<hr />\n",
    "section": "Setext headers",
    "markdown": "---\n---\n",
    "start_line": 1011,
    "example": 60,
    "end_line": 1017
  },
  {
    "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "- foo\n-----\n",
    "start_line": 1019,
    "example": 61,
    "end_line": 1027
  },
  {
    "html": "<pre><code>foo\n</code></pre>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "    foo\n---\n",
    "start_line": 1029,
    "example": 62,
    "end_line": 1036
  },
  {
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "section": "Setext headers",
    "markdown": "> foo\n-----\n",
    "start_line": 1038,
    "example": 63,
    "end_line": 1046
  },
  {
    "html": "<h2>&gt; foo</h2>\n",
    "section": "Setext headers",
    "markdown": "\\> foo\n------\n",
    "start_line": 1051,
    "example": 64,
    "end_line": 1056
  },
  {
    "html": "<pre><code>a simple\n  indented code block\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "    a simple\n      indented code block\n",
    "start_line": 1073,
    "example": 65,
    "end_line": 1080
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "section": "Indented code blocks",
    "markdown": "  - foo\n\n    bar\n",
    "start_line": 1086,
    "example": 66,
    "end_line": 1097
  },
  {
    "html": "<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "section": "Indented code blocks",
    "markdown": "1.  foo\n\n    - bar\n",
    "start_line": 1099,
    "example": 67,
    "end_line": 1112
  },
  {
    "html": "<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "    <a/>\n    *hi*\n\n    - one\n",
    "start_line": 1118,
    "example": 68,
    "end_line": 1129
  },
  {
    "html": "<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n",
    "start_line": 1133,
    "example": 69,
    "end_line": 1150
  },
  {
    "html": "<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "    chunk1\n      \n      chunk2\n",
    "start_line": 1155,
    "example": 70,
    "end_line": 1164
  },
  {
    "html": "<p>Foo\nbar</p>\n",
    "section": "Indented code blocks",
    "markdown": "Foo\n    bar\n\n",
    "start_line": 1169,
    "example": 71,
    "end_line": 1176
  },
  {
    "html": "<pre><code>foo\n</code></pre>\n<p>bar</p>\n",
    "section": "Indented code blocks",
    "markdown": "    foo\nbar\n",
    "start_line": 1182,
    "example": 72,
    "end_line": 1189
  },
  {
    "html": "<h1>Header</h1>\n<pre><code>foo\n</code></pre>\n<h2>Header</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n",
    "section": "Indented code blocks",
    "markdown": "# Header\n    foo\nHeader\n------\n    foo\n----\n",
    "start_line": 1194,
    "example": 73,
    "end_line": 1209
  },
  {
    "html": "<pre><code>    foo\nbar\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "        foo\n    bar\n",
    "start_line": 1213,
    "example": 74,
    "end_line": 1220
  },
  {
    "html": "<pre><code>foo\n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "\n    \n    foo\n    \n\n",
    "start_line": 1225,
    "example": 75,
    "end_line": 1234
  },
  {
    "html": "<pre><code>foo  \n</code></pre>\n",
    "section": "Indented code blocks",
    "markdown": "    foo  \n",
    "start_line": 1238,
    "example": 76,
    "end_line": 1243
  },
  {
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\n<\n >\n```\n",
    "start_line": 1292,
    "example": 77,
    "end_line": 1301
  },
  {
    "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "~~~\n<\n >\n~~~\n",
    "start_line": 1305,
    "example": 78,
    "end_line": 1314
  },
  {
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n~~~\n```\n",
    "start_line": 1319,
    "example": 79,
    "end_line": 1328
  },
  {
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "~~~\naaa\n```\n~~~\n",
    "start_line": 1330,
    "example": 80,
    "end_line": 1339
  },
  {
    "html": "<pre><code>aaa\n```\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "````\naaa\n```\n``````\n",
    "start_line": 1343,
    "example": 81,
    "end_line": 1352
  },
  {
    "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "~~~~\naaa\n~~~\n~~~~\n",
    "start_line": 1354,
    "example": 82,
    "end_line": 1363
  },
  {
    "html": "<pre><code></code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\n",
    "start_line": 1368,
    "example": 83,
    "end_line": 1372
  },
  {
    "html": "<pre><code>\n```\naaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "`````\n\n```\naaa\n",
    "start_line": 1374,
    "example": 84,
    "end_line": 1384
  },
  {
    "html": "<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n",
    "section": "Fenced code blocks",
    "markdown": "> ```\n> aaa\n\nbbb\n",
    "start_line": 1386,
    "example": 85,
    "end_line": 1397
  },
  {
    "html": "<pre><code>\n  \n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\n\n  \n```\n",
    "start_line": 1401,
    "example": 86,
    "end_line": 1410
  },
  {
    "html": "<pre><code></code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\n```\n",
    "start_line": 1414,
    "example": 87,
    "end_line": 1419
  },
  {
    "html": "<pre><code>aaa\naaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": " ```\n aaa\naaa\n```\n",
    "start_line": 1425,
    "example": 88,
    "end_line": 1434
  },
  {
    "html": "<pre><code>aaa\naaa\naaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "  ```\naaa\n  aaa\naaa\n  ```\n",
    "start_line": 1436,
    "example": 89,
    "end_line": 1447
  },
  {
    "html": "<pre><code>aaa\n aaa\naaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "   ```\n   aaa\n    aaa\n  aaa\n   ```\n",
    "start_line": 1449,
    "example": 90,
    "end_line": 1460
  },
  {
    "html": "<pre><code>```\naaa\n```\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "    ```\n    aaa\n    ```\n",
    "start_line": 1464,
    "example": 91,
    "end_line": 1473
  },
  {
    "html": "<pre><code>aaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n  ```\n",
    "start_line": 1478,
    "example": 92,
    "end_line": 1485
  },
  {
    "html": "<pre><code>aaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "   ```\naaa\n  ```\n",
    "start_line": 1487,
    "example": 93,
    "end_line": 1494
  },
  {
    "html": "<pre><code>aaa\n    ```\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\naaa\n    ```\n",
    "start_line": 1498,
    "example": 94,
    "end_line": 1506
  },
  {
    "html": "<p><code></code>\naaa</p>\n",
    "section": "Fenced code blocks",
    "markdown": "``` ```\naaa\n",
    "start_line": 1511,
    "example": 95,
    "end_line": 1517
  },
  {
    "html": "<pre><code>aaa\n~~~ ~~\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "~~~~~~\naaa\n~~~ ~~\n",
    "start_line": 1519,
    "example": 96,
    "end_line": 1527
  },
  {
    "html": "<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n",
    "section": "Fenced code blocks",
    "markdown": "foo\n```\nbar\n```\nbaz\n",
    "start_line": 1532,
    "example": 97,
    "end_line": 1543
  },
  {
    "html": "<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n",
    "section": "Fenced code blocks",
    "markdown": "foo\n---\n~~~\nbar\n~~~\n# baz\n",
    "start_line": 1548,
    "example": 98,
    "end_line": 1560
  },
  {
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```ruby\ndef foo(x)\n  return 3\nend\n```\n",
    "start_line": 1567,
    "example": 99,
    "end_line": 1578
  },
  {
    "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n",
    "start_line": 1580,
    "example": 100,
    "end_line": 1591
  },
  {
    "html": "<pre><code class=\"language-;\"></code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "````;\n````\n",
    "start_line": 1593,
    "example": 101,
    "end_line": 1598
  },
  {
    "html": "<p><code>aa</code>\nfoo</p>\n",
    "section": "Fenced code blocks",
    "markdown": "``` aa ```\nfoo\n",
    "start_line": 1602,
    "example": 102,
    "end_line": 1608
  },
  {
    "html": "<pre><code>``` aaa\n</code></pre>\n",
    "section": "Fenced code blocks",
    "markdown": "```\n``` aaa\n```\n",
    "start_line": 1612,
    "example": 103,
    "end_line": 1619
  },
  {
    "html": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n",
    "section": "HTML blocks",
    "markdown": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n",
    "start_line": 1685,
    "example": 104,
    "end_line": 1704
  },
  {
    "html": " <div>\n  *hello*\n         <foo><a>\n",
    "section": "HTML blocks",
    "markdown": " <div>\n  *hello*\n         <foo><a>\n",
    "start_line": 1706,
    "example": 105,
    "end_line": 1714
  },
  {
    "html": "</div>\n*foo*\n",
    "section": "HTML blocks",
    "markdown": "</div>\n*foo*\n",
    "start_line": 1718,
    "example": 106,
    "end_line": 1724
  },
  {
    "html": "<DIV CLASS=\"foo\">\n<p><em>Markdown</em></p>\n</DIV>\n",
    "section": "HTML blocks",
    "markdown": "<DIV CLASS=\"foo\">\n\n*Markdown*\n\n</DIV>\n",
    "start_line": 1728,
    "example": 107,
    "end_line": 1738
  },
  {
    "html": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
    "start_line": 1743,
    "example": 108,
    "end_line": 1751
  },
  {
    "html": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
    "start_line": 1753,
    "example": 109,
    "end_line": 1761
  },
  {
    "html": "<div>\n*foo*\n<p><em>bar</em></p>\n",
    "section": "HTML blocks",
    "markdown": "<div>\n*foo*\n\n*bar*\n",
    "start_line": 1764,
    "example": 110,
    "end_line": 1773
  },
  {
    "html": "<div id=\"foo\"\n*hi*\n",
    "section": "HTML blocks",
    "markdown": "<div id=\"foo\"\n*hi*\n",
    "start_line": 1779,
    "example": 111,
    "end_line": 1785
  },
  {
    "html": "<div class\nfoo\n",
    "section": "HTML blocks",
    "markdown": "<div class\nfoo\n",
    "start_line": 1787,
    "example": 112,
    "end_line": 1793
  },
  {
    "html": "<div *???-&&&-<---\n*foo*\n",
    "section": "HTML blocks",
    "markdown": "<div *???-&&&-<---\n*foo*\n",
    "start_line": 1798,
    "example": 113,
    "end_line": 1804
  },
  {
    "html": "<div><a href=\"bar\">*foo*</a></div>\n",
    "section": "HTML blocks",
    "markdown": "<div><a href=\"bar\">*foo*</a></div>\n",
    "start_line": 1809,
    "example": 114,
    "end_line": 1813
  },
  {
    "html": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "section": "HTML blocks",
    "markdown": "<table><tr><td>\nfoo\n</td></tr></table>\n",
    "start_line": 1815,
    "example": 115,
    "end_line": 1823
  },
  {
    "html": "<div></div>\n``` c\nint x = 33;\n```\n",
    "section": "HTML blocks",
    "markdown": "<div></div>\n``` c\nint x = 33;\n```\n",
    "start_line": 1831,
    "example": 116,
    "end_line": 1841
  },
  {
    "html": "<a href=\"foo\">\n*bar*\n</a>\n",
    "section": "HTML blocks",
    "markdown": "<a href=\"foo\">\n*bar*\n</a>\n",
    "start_line": 1847,
    "example": 117,
    "end_line": 1855
  },
  {
    "html": "<Warning>\n*bar*\n</Warning>\n",
    "section": "HTML blocks",
    "markdown": "<Warning>\n*bar*\n</Warning>\n",
    "start_line": 1859,
    "example": 118,
    "end_line": 1867
  },
  {
    "html": "<i class=\"foo\">\n*bar*\n</i>\n",
    "section": "HTML blocks",
    "markdown": "<i class=\"foo\">\n*bar*\n</i>\n",
    "start_line": 1869,
    "example": 119,
    "end_line": 1877
  },
  {
    "html": "</ins>\n*bar*\n",
    "section": "HTML blocks",
    "markdown": "</ins>\n*bar*\n",
    "start_line": 1879,
    "example": 120,
    "end_line": 1885
  },
  {
    "html": "<del>\n*foo*\n</del>\n",
    "section": "HTML blocks",
    "markdown": "<del>\n*foo*\n</del>\n",
    "start_line": 1893,
    "example": 121,
    "end_line": 1901
  },
  {
    "html": "<del>\n<p><em>foo</em></p>\n</del>\n",
    "section": "HTML blocks",
    "markdown": "<del>\n\n*foo*\n\n</del>\n",
    "start_line": 1907,
    "example": 122,
    "end_line": 1917
  },
  {
    "html": "<p><del><em>foo</em></del></p>\n",
    "section": "HTML blocks",
    "markdown": "<del>*foo*</del>\n",
    "start_line": 1924,
    "example": 123,
    "end_line": 1928
  },
  {
    "html": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n",
    "section": "HTML blocks",
    "markdown": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n",
    "start_line": 1939,
    "example": 124,
    "end_line": 1953
  },
  {
    "html": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n",
    "section": "HTML blocks",
    "markdown": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n",
    "start_line": 1957,
    "example": 125,
    "end_line": 1969
  },
  {
    "html": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n",
    "section": "HTML blocks",
    "markdown": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n",
    "start_line": 1973,
    "example": 126,
    "end_line": 1987
  },
  {
    "html": "<style\n  type=\"text/css\">\n\nfoo\n",
    "section": "HTML blocks",
    "markdown": "<style\n  type=\"text/css\">\n\nfoo\n",
    "start_line": 1993,
    "example": 127,
    "end_line": 2003
  },
  {
    "html": "<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n",
    "section": "HTML blocks",
    "markdown": "> <div>\n> foo\n\nbar\n",
    "start_line": 2005,
    "example": 128,
    "end_line": 2016
  },
  {
    "html": "<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n",
    "section": "HTML blocks",
    "markdown": "- <div>\n- foo\n",
    "start_line": 2018,
    "example": 129,
    "end_line": 2028
  },
  {
    "html": "<style>p{color:red;}</style>\n<p><em>foo</em></p>\n",
    "section": "HTML blocks",
    "markdown": "<style>p{color:red;}</style>\n*foo*\n",
    "start_line": 2032,
    "example": 130,
    "end_line": 2038
  },
  {
    "html": "<!-- foo -->*bar*\n<p><em>baz</em></p>\n",
    "section": "HTML blocks",
    "markdown": "<!-- foo -->*bar*\n*baz*\n",
    "start_line": 2040,
    "example": 131,
    "end_line": 2046
  },
  {
    "html": "<script>\nfoo\n</script>1. *bar*\n",
    "section": "HTML blocks",
    "markdown": "<script>\nfoo\n</script>1. *bar*\n",
    "start_line": 2051,
    "example": 132,
    "end_line": 2059
  },
  {
    "html": "<!-- Foo\n\nbar\n   baz -->\n",
    "section": "HTML blocks",
    "markdown": "<!-- Foo\n\nbar\n   baz -->\n",
    "start_line": 2063,
    "example": 133,
    "end_line": 2073
  },
  {
    "html": "<?php\n\n  echo '>';\n\n?>\n",
    "section": "HTML blocks",
    "markdown": "<?php\n\n  echo '>';\n\n?>\n",
    "start_line": 2078,
    "example": 134,
    "end_line": 2090
  },
  {
    "html": "<!DOCTYPE html>\n",
    "section": "HTML blocks",
    "markdown": "<!DOCTYPE html>\n",
    "start_line": 2094,
    "example": 135,
    "end_line": 2098
  },
  {
    "html": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n",
    "section": "HTML blocks",
    "markdown": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n",
    "start_line": 2102,
    "example": 136,
    "end_line": 2128
  },
  {
    "html": "  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n",
    "section": "HTML blocks",
    "markdown": "  <!-- foo -->\n\n    <!-- foo -->\n",
    "start_line": 2132,
    "example": 137,
    "end_line": 2140
  },
  {
    "html": "  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n",
    "section": "HTML blocks",
    "markdown": "  <div>\n\n    <div>\n",
    "start_line": 2142,
    "example": 138,
    "end_line": 2150
  },
  {
    "html": "<p>Foo</p>\n<div>\nbar\n</div>\n",
    "section": "HTML blocks",
    "markdown": "Foo\n<div>\nbar\n</div>\n",
    "start_line": 2155,
    "example": 139,
    "end_line": 2165
  },
  {
    "html": "<div>\nbar\n</div>\n*foo*\n",
    "section": "HTML blocks",
    "markdown": "<div>\nbar\n</div>\n*foo*\n",
    "start_line": 2170,
    "example": 140,
    "end_line": 2180
  },
  {
    "html": "<p>Foo\n<a href=\"bar\">\nbaz</p>\n",
    "section": "HTML blocks",
    "markdown": "Foo\n<a href=\"bar\">\nbaz\n",
    "start_line": 2184,
    "example": 141,
    "end_line": 2192
  },
  {
    "html": "<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n",
    "section": "HTML blocks",
    "markdown": "<div>\n\n*Emphasized* text.\n\n</div>\n",
    "start_line": 2224,
    "example": 142,
    "end_line": 2234
  },
  {
    "html": "<div>\n*Emphasized* text.\n</div>\n",
    "section": "HTML blocks",
    "markdown": "<div>\n*Emphasized* text.\n</div>\n",
    "start_line": 2236,
    "example": 143,
    "end_line": 2244
  },
  {
    "html": "<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n",
    "section": "HTML blocks",
    "markdown": "<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n",
    "start_line": 2257,
    "example": 144,
    "end_line": 2277
  },
  {
    "html": "<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n",
    "section": "HTML blocks",
    "markdown": "<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n",
    "start_line": 2283,
    "example": 145,
    "end_line": 2304
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url \"title\"\n\n[foo]\n",
    "start_line": 2330,
    "example": 146,
    "end_line": 2336
  },
  {
    "html": "<p><a href=\"/url\" title=\"the title\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n",
    "start_line": 2338,
    "example": 147,
    "end_line": 2346
  },
  {
    "html": "<p><a href=\"my_(url)\" title=\"title (with parens)\">Foo*bar]</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n",
    "start_line": 2348,
    "example": 148,
    "end_line": 2354
  },
  {
    "html": "<p><a href=\"my%20url\" title=\"title\">Foo bar</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[Foo bar]:\n<my url>\n'title'\n\n[Foo bar]\n",
    "start_line": 2356,
    "example": 149,
    "end_line": 2364
  },
  {
    "html": "<p><a href=\"/url\" title=\"\ntitle\nline1\nline2\n\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n",
    "start_line": 2368,
    "example": 150,
    "end_line": 2382
  },
  {
    "html": "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n",
    "start_line": 2386,
    "example": 151,
    "end_line": 2396
  },
  {
    "html": "<p><a href=\"/url\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]:\n/url\n\n[foo]\n",
    "start_line": 2400,
    "example": 152,
    "end_line": 2407
  },
  {
    "html": "<p>[foo]:</p>\n<p>[foo]</p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]:\n\n[foo]\n",
    "start_line": 2411,
    "example": 153,
    "end_line": 2418
  },
  {
    "html": "<p><a href=\"/url%5Cbar*baz\" title=\"foo&quot;bar\\baz\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\\bar\\*baz \"foo\\\"bar\\baz\"\n\n[foo]\n",
    "start_line": 2423,
    "example": 154,
    "end_line": 2429
  },
  {
    "html": "<p><a href=\"url\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n[foo]: url\n",
    "start_line": 2433,
    "example": 155,
    "end_line": 2439
  },
  {
    "html": "<p><a href=\"first\">foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n[foo]: first\n[foo]: second\n",
    "start_line": 2444,
    "example": 156,
    "end_line": 2451
  },
  {
    "html": "<p><a href=\"/url\">Foo</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[FOO]: /url\n\n[Foo]\n",
    "start_line": 2456,
    "example": 157,
    "end_line": 2462
  },
  {
    "html": "<p><a href=\"/%CF%86%CE%BF%CF%85\">αγω</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[ΑΓΩ]: /φου\n\n[αγω]\n",
    "start_line": 2464,
    "example": 158,
    "end_line": 2470
  },
  {
    "html": "",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\n",
    "start_line": 2475,
    "example": 159,
    "end_line": 2478
  },
  {
    "html": "<p>bar</p>\n",
    "section": "Link reference definitions",
    "markdown": "[\nfoo\n]: /url\nbar\n",
    "start_line": 2482,
    "example": 160,
    "end_line": 2489
  },
  {
    "html": "<p>[foo]: /url &quot;title&quot; ok</p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url \"title\" ok\n",
    "start_line": 2494,
    "example": 161,
    "end_line": 2498
  },
  {
    "html": "<p>&quot;title&quot; ok</p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /url\n\"title\" ok\n",
    "start_line": 2502,
    "example": 162,
    "end_line": 2507
  },
  {
    "html": "<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n",
    "section": "Link reference definitions",
    "markdown": "    [foo]: /url \"title\"\n\n[foo]\n",
    "start_line": 2512,
    "example": 163,
    "end_line": 2520
  },
  {
    "html": "<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n",
    "section": "Link reference definitions",
    "markdown": "```\n[foo]: /url\n```\n\n[foo]\n",
    "start_line": 2525,
    "example": 164,
    "end_line": 2535
  },
  {
    "html": "<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n",
    "section": "Link reference definitions",
    "markdown": "Foo\n[bar]: /baz\n\n[bar]\n",
    "start_line": 2539,
    "example": 165,
    "end_line": 2548
  },
  {
    "html": "<h1><a href=\"/url\">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "section": "Link reference definitions",
    "markdown": "# [Foo]\n[foo]: /url\n> bar\n",
    "start_line": 2553,
    "example": 166,
    "end_line": 2562
  },
  {
    "html": "<p><a href=\"/foo-url\" title=\"foo\">foo</a>,\n<a href=\"/bar-url\" title=\"bar\">bar</a>,\n<a href=\"/baz-url\">baz</a></p>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]: /foo-url \"foo\"\n[bar]: /bar-url\n  \"bar\"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n",
    "start_line": 2567,
    "example": 167,
    "end_line": 2580
  },
  {
    "html": "<p><a href=\"/url\">foo</a></p>\n<blockquote>\n</blockquote>\n",
    "section": "Link reference definitions",
    "markdown": "[foo]\n\n> [foo]: /url\n",
    "start_line": 2587,
    "example": 168,
    "end_line": 2595
  },
  {
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "section": "Paragraphs",
    "markdown": "aaa\n\nbbb\n",
    "start_line": 2609,
    "example": 169,
    "end_line": 2616
  },
  {
    "html": "<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n",
    "section": "Paragraphs",
    "markdown": "aaa\nbbb\n\nccc\nddd\n",
    "start_line": 2620,
    "example": 170,
    "end_line": 2631
  },
  {
    "html": "<p>aaa</p>\n<p>bbb</p>\n",
    "section": "Paragraphs",
    "markdown": "aaa\n\n\nbbb\n",
    "start_line": 2635,
    "example": 171,
    "end_line": 2643
  },
  {
    "html": "<p>aaa\nbbb</p>\n",
    "section": "Paragraphs",
    "markdown": "  aaa\n bbb\n",
    "start_line": 2647,
    "example": 172,
    "end_line": 2653
  },
  {
    "html": "<p>aaa\nbbb\nccc</p>\n",
    "section": "Paragraphs",
    "markdown": "aaa\n             bbb\n                                       ccc\n",
    "start_line": 2658,
    "example": 173,
    "end_line": 2666
  },
  {
    "html": "<p>aaa\nbbb</p>\n",
    "section": "Paragraphs",
    "markdown": "   aaa\nbbb\n",
    "start_line": 2671,
    "example": 174,
    "end_line": 2677
  },
  {
    "html": "<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n",
    "section": "Paragraphs",
    "markdown": "    aaa\nbbb\n",
    "start_line": 2679,
    "example": 175,
    "end_line": 2686
  },
  {
    "html": "<p>aaa<br />\nbbb</p>\n",
    "section": "Paragraphs",
    "markdown": "aaa     \nbbb     \n",
    "start_line": 2692,
    "example": 176,
    "end_line": 2698
  },
  {
    "html": "<p>aaa</p>\n<h1>aaa</h1>\n",
    "section": "Blank lines",
    "markdown": "  \n\naaa\n  \n\n# aaa\n\n  \n",
    "start_line": 2708,
    "example": 177,
    "end_line": 2720
  },
  {
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> # Foo\n> bar\n> baz\n",
    "start_line": 2773,
    "example": 178,
    "end_line": 2783
  },
  {
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "># Foo\n>bar\n> baz\n",
    "start_line": 2787,
    "example": 179,
    "end_line": 2797
  },
  {
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "   > # Foo\n   > bar\n > baz\n",
    "start_line": 2801,
    "example": 180,
    "end_line": 2811
  },
  {
    "html": "<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n",
    "section": "Block quotes",
    "markdown": "    > # Foo\n    > bar\n    > baz\n",
    "start_line": 2815,
    "example": 181,
    "end_line": 2824
  },
  {
    "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> # Foo\n> bar\nbaz\n",
    "start_line": 2829,
    "example": 182,
    "end_line": 2839
  },
  {
    "html": "<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> bar\nbaz\n> foo\n",
    "start_line": 2844,
    "example": 183,
    "end_line": 2854
  },
  {
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
    "section": "Block quotes",
    "markdown": "> foo\n---\n",
    "start_line": 2867,
    "example": 184,
    "end_line": 2875
  },
  {
    "html": "<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n",
    "section": "Block quotes",
    "markdown": "> - foo\n- bar\n",
    "start_line": 2886,
    "example": 185,
    "end_line": 2898
  },
  {
    "html": "<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n",
    "section": "Block quotes",
    "markdown": ">     foo\n    bar\n",
    "start_line": 2903,
    "example": 186,
    "end_line": 2913
  },
  {
    "html": "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n",
    "section": "Block quotes",
    "markdown": "> ```\nfoo\n```\n",
    "start_line": 2915,
    "example": 187,
    "end_line": 2925
  },
  {
    "html": "<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> foo\n    - bar\n",
    "start_line": 2930,
    "example": 188,
    "end_line": 2938
  },
  {
    "html": "<blockquote>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": ">\n",
    "start_line": 2953,
    "example": 189,
    "end_line": 2958
  },
  {
    "html": "<blockquote>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": ">\n>  \n> \n",
    "start_line": 2960,
    "example": 190,
    "end_line": 2967
  },
  {
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": ">\n> foo\n>  \n",
    "start_line": 2971,
    "example": 191,
    "end_line": 2979
  },
  {
    "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> foo\n\n> bar\n",
    "start_line": 2983,
    "example": 192,
    "end_line": 2994
  },
  {
    "html": "<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> foo\n> bar\n",
    "start_line": 3004,
    "example": 193,
    "end_line": 3012
  },
  {
    "html": "<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> foo\n>\n> bar\n",
    "start_line": 3016,
    "example": 194,
    "end_line": 3025
  },
  {
    "html": "<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "foo\n> bar\n",
    "start_line": 3029,
    "example": 195,
    "end_line": 3037
  },
  {
    "html": "<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> aaa\n***\n> bbb\n",
    "start_line": 3042,
    "example": 196,
    "end_line": 3054
  },
  {
    "html": "<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> bar\nbaz\n",
    "start_line": 3059,
    "example": 197,
    "end_line": 3067
  },
  {
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "section": "Block quotes",
    "markdown": "> bar\n\nbaz\n",
    "start_line": 3069,
    "example": 198,
    "end_line": 3078
  },
  {
    "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
    "section": "Block quotes",
    "markdown": "> bar\n>\nbaz\n",
    "start_line": 3080,
    "example": 199,
    "end_line": 3089
  },
  {
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": "> > > foo\nbar\n",
    "start_line": 3095,
    "example": 200,
    "end_line": 3107
  },
  {
    "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": ">>> foo\n> bar\n>>baz\n",
    "start_line": 3109,
    "example": 201,
    "end_line": 3123
  },
  {
    "html": "<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n",
    "section": "Block quotes",
    "markdown": ">     code\n\n>    not code\n",
    "start_line": 3130,
    "example": 202,
    "end_line": 3142
  },
  {
    "html": "<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n",
    "section": "List items",
    "markdown": "A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n",
    "start_line": 3174,
    "example": 203,
    "end_line": 3189
  },
  {
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n",
    "start_line": 3195,
    "example": 204,
    "end_line": 3214
  },
  {
    "html": "<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n",
    "section": "List items",
    "markdown": "- one\n\n two\n",
    "start_line": 3227,
    "example": 205,
    "end_line": 3236
  },
  {
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- one\n\n  two\n",
    "start_line": 3238,
    "example": 206,
    "end_line": 3249
  },
  {
    "html": "<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n",
    "section": "List items",
    "markdown": " -    one\n\n     two\n",
    "start_line": 3251,
    "example": 207,
    "end_line": 3261
  },
  {
    "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": " -    one\n\n      two\n",
    "start_line": 3263,
    "example": 208,
    "end_line": 3274
  },
  {
    "html": "<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n",
    "section": "List items",
    "markdown": "   > > 1.  one\n>>\n>>     two\n",
    "start_line": 3284,
    "example": 209,
    "end_line": 3299
  },
  {
    "html": "<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n",
    "section": "List items",
    "markdown": ">>- one\n>>\n  >  > two\n",
    "start_line": 3310,
    "example": 210,
    "end_line": 3323
  },
  {
    "html": "<p>-one</p>\n<p>2.two</p>\n",
    "section": "List items",
    "markdown": "-one\n\n2.two\n",
    "start_line": 3328,
    "example": 211,
    "end_line": 3335
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<p>bar</p>\n<ul>\n<li>\n<pre><code>foo\n\n\nbar\n</code></pre>\n</li>\n<li>\n<p>baz</p>\n<ul>\n<li>\n<pre><code>foo\n\n\nbar\n</code></pre>\n</li>\n</ul>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n\n  bar\n\n- foo\n\n\n  bar\n\n- ```\n  foo\n\n\n  bar\n  ```\n\n- baz\n\n  + ```\n    foo\n\n\n    bar\n    ```\n",
    "start_line": 3341,
    "example": 212,
    "end_line": 3398
  },
  {
    "html": "<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n",
    "start_line": 3402,
    "example": 213,
    "end_line": 3424
  },
  {
    "html": "<ol start=\"123456789\">\n<li>ok</li>\n</ol>\n",
    "section": "List items",
    "markdown": "123456789. ok\n",
    "start_line": 3428,
    "example": 214,
    "end_line": 3434
  },
  {
    "html": "<p>1234567890. not ok</p>\n",
    "section": "List items",
    "markdown": "1234567890. not ok\n",
    "start_line": 3436,
    "example": 215,
    "end_line": 3440
  },
  {
    "html": "<ol start=\"0\">\n<li>ok</li>\n</ol>\n",
    "section": "List items",
    "markdown": "0. ok\n",
    "start_line": 3444,
    "example": 216,
    "end_line": 3450
  },
  {
    "html": "<ol start=\"3\">\n<li>ok</li>\n</ol>\n",
    "section": "List items",
    "markdown": "003. ok\n",
    "start_line": 3452,
    "example": 217,
    "end_line": 3458
  },
  {
    "html": "<p>-1. not ok</p>\n",
    "section": "List items",
    "markdown": "-1. not ok\n",
    "start_line": 3462,
    "example": 218,
    "end_line": 3466
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n\n      bar\n",
    "start_line": 3485,
    "example": 219,
    "end_line": 3497
  },
  {
    "html": "<ol start=\"10\">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "  10.  foo\n\n           bar\n",
    "start_line": 3501,
    "example": 220,
    "end_line": 3513
  },
  {
    "html": "<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n",
    "section": "List items",
    "markdown": "    indented code\n\nparagraph\n\n    more code\n",
    "start_line": 3519,
    "example": 221,
    "end_line": 3531
  },
  {
    "html": "<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1.     indented code\n\n   paragraph\n\n       more code\n",
    "start_line": 3533,
    "example": 222,
    "end_line": 3549
  },
  {
    "html": "<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1.      indented code\n\n   paragraph\n\n       more code\n",
    "start_line": 3554,
    "example": 223,
    "end_line": 3570
  },
  {
    "html": "<p>foo</p>\n<p>bar</p>\n",
    "section": "List items",
    "markdown": "   foo\n\nbar\n",
    "start_line": 3580,
    "example": 224,
    "end_line": 3587
  },
  {
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n",
    "section": "List items",
    "markdown": "-    foo\n\n  bar\n",
    "start_line": 3589,
    "example": 225,
    "end_line": 3598
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "-  foo\n\n   bar\n",
    "start_line": 3605,
    "example": 226,
    "end_line": 3616
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n",
    "start_line": 3632,
    "example": 227,
    "end_line": 3653
  },
  {
    "html": "<ul>\n<li></li>\n</ul>\n<p>foo</p>\n",
    "section": "List items",
    "markdown": "-\n\n  foo\n",
    "start_line": 3659,
    "example": 228,
    "end_line": 3668
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n-\n- bar\n",
    "start_line": 3672,
    "example": 229,
    "end_line": 3682
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n-   \n- bar\n",
    "start_line": 3686,
    "example": 230,
    "end_line": 3696
  },
  {
    "html": "<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1. foo\n2.\n3. bar\n",
    "start_line": 3700,
    "example": 231,
    "end_line": 3710
  },
  {
    "html": "<ul>\n<li></li>\n</ul>\n",
    "section": "List items",
    "markdown": "*\n",
    "start_line": 3714,
    "example": 232,
    "end_line": 3720
  },
  {
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": " 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n",
    "start_line": 3731,
    "example": 233,
    "end_line": 3750
  },
  {
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n",
    "start_line": 3754,
    "example": 234,
    "end_line": 3773
  },
  {
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n",
    "start_line": 3777,
    "example": 235,
    "end_line": 3796
  },
  {
    "html": "<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n",
    "section": "List items",
    "markdown": "    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n",
    "start_line": 3800,
    "example": 236,
    "end_line": 3815
  },
  {
    "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n",
    "start_line": 3829,
    "example": 237,
    "end_line": 3848
  },
  {
    "html": "<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n",
    "section": "List items",
    "markdown": "  1.  A paragraph\n    with two lines.\n",
    "start_line": 3852,
    "example": 238,
    "end_line": 3860
  },
  {
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "section": "List items",
    "markdown": "> 1. > Blockquote\ncontinued here.\n",
    "start_line": 3864,
    "example": 239,
    "end_line": 3878
  },
  {
    "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
    "section": "List items",
    "markdown": "> 1. > Blockquote\n> continued here.\n",
    "start_line": 3880,
    "example": 240,
    "end_line": 3894
  },
  {
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n  - bar\n    - baz\n",
    "start_line": 3906,
    "example": 241,
    "end_line": 3922
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- foo\n - bar\n  - baz\n",
    "start_line": 3926,
    "example": 242,
    "end_line": 3936
  },
  {
    "html": "<ol start=\"10\">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "10) foo\n    - bar\n",
    "start_line": 3940,
    "example": 243,
    "end_line": 3951
  },
  {
    "html": "<ol start=\"10\">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n",
    "section": "List items",
    "markdown": "10) foo\n   - bar\n",
    "start_line": 3955,
    "example": 244,
    "end_line": 3965
  },
  {
    "html": "<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- - foo\n",
    "start_line": 3969,
    "example": 245,
    "end_line": 3979
  },
  {
    "html": "<ol>\n<li>\n<ul>\n<li>\n<ol start=\"2\">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n",
    "section": "List items",
    "markdown": "1. - 2. foo\n",
    "start_line": 3981,
    "example": 246,
    "end_line": 3995
  },
  {
    "html": "<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n",
    "section": "List items",
    "markdown": "- # Foo\n- Bar\n  ---\n  baz\n",
    "start_line": 3999,
    "example": 247,
    "end_line": 4013
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- foo\n- bar\n+ baz\n",
    "start_line": 4235,
    "example": 248,
    "end_line": 4247
  },
  {
    "html": "<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start=\"3\">\n<li>baz</li>\n</ol>\n",
    "section": "Lists",
    "markdown": "1. foo\n2. bar\n3) baz\n",
    "start_line": 4249,
    "example": 249,
    "end_line": 4261
  },
  {
    "html": "<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "Foo\n- bar\n- baz\n",
    "start_line": 4267,
    "example": 250,
    "end_line": 4277
  },
  {
    "html": "<p>The number of windows in my house is</p>\n<ol start=\"14\">\n<li>The number of doors is 6.</li>\n</ol>\n",
    "section": "Lists",
    "markdown": "The number of windows in my house is\n14.  The number of doors is 6.\n",
    "start_line": 4282,
    "example": 251,
    "end_line": 4290
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- foo\n\n- bar\n\n\n- baz\n",
    "start_line": 4347,
    "example": 252,
    "end_line": 4366
  },
  {
    "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n<ul>\n<li>baz</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- foo\n\n\n  bar\n- baz\n",
    "start_line": 4372,
    "example": 253,
    "end_line": 4386
  },
  {
    "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<pre><code>  bim\n</code></pre>\n",
    "section": "Lists",
    "markdown": "- foo\n  - bar\n    - baz\n\n\n      bim\n",
    "start_line": 4390,
    "example": 254,
    "end_line": 4411
  },
  {
    "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- foo\n- bar\n\n\n- baz\n- bim\n",
    "start_line": 4418,
    "example": 255,
    "end_line": 4434
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<pre><code>code\n</code></pre>\n",
    "section": "Lists",
    "markdown": "-   foo\n\n    notcode\n\n-   foo\n\n\n    code\n",
    "start_line": 4436,
    "example": 256,
    "end_line": 4457
  },
  {
    "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n<li>h</li>\n<li>i</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n - b\n  - c\n   - d\n    - e\n   - f\n  - g\n - h\n- i\n",
    "start_line": 4464,
    "example": 257,
    "end_line": 4486
  },
  {
    "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n",
    "section": "Lists",
    "markdown": "1. a\n\n  2. b\n\n    3. c\n",
    "start_line": 4488,
    "example": 258,
    "end_line": 4506
  },
  {
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n- b\n\n- c\n",
    "start_line": 4511,
    "example": 259,
    "end_line": 4528
  },
  {
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "* a\n*\n\n* c\n",
    "start_line": 4532,
    "example": 260,
    "end_line": 4547
  },
  {
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n- b\n\n  c\n- d\n",
    "start_line": 4553,
    "example": 261,
    "end_line": 4572
  },
  {
    "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n- b\n\n  [ref]: /url\n- d\n",
    "start_line": 4574,
    "example": 262,
    "end_line": 4592
  },
  {
    "html": "<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n- ```\n  b\n\n\n  ```\n- c\n",
    "start_line": 4596,
    "example": 263,
    "end_line": 4615
  },
  {
    "html": "<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n  - b\n\n    c\n- d\n",
    "start_line": 4621,
    "example": 264,
    "end_line": 4639
  },
  {
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "* a\n  > b\n  >\n* c\n",
    "start_line": 4644,
    "example": 265,
    "end_line": 4658
  },
  {
    "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n  > b\n  ```\n  c\n  ```\n- d\n",
    "start_line": 4663,
    "example": 266,
    "end_line": 4681
  },
  {
    "html": "<ul>\n<li>a</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n",
    "start_line": 4685,
    "example": 267,
    "end_line": 4691
  },
  {
    "html": "<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n  - b\n",
    "start_line": 4693,
    "example": 268,
    "end_line": 4704
  },
  {
    "html": "<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n",
    "section": "Lists",
    "markdown": "1. ```\n   foo\n   ```\n\n   bar\n",
    "start_line": 4709,
    "example": 269,
    "end_line": 4723
  },
  {
    "html": "<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "* foo\n  * bar\n\n  baz\n",
    "start_line": 4727,
    "example": 270,
    "end_line": 4742
  },
  {
    "html": "<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n",
    "section": "Lists",
    "markdown": "- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n",
    "start_line": 4744,
    "example": 271,
    "end_line": 4769
  },
  {
    "html": "<p><code>hi</code>lo`</p>\n",
    "section": "Inlines",
    "markdown": "`hi`lo`\n",
    "start_line": 4777,
    "example": 272,
    "end_line": 4781
  },
  {
    "html": "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
    "section": "Backslash escapes",
    "markdown": "\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n",
    "start_line": 4790,
    "example": 273,
    "end_line": 4794
  },
  {
    "html": "<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n",
    "section": "Backslash escapes",
    "markdown": "\\\t\\A\\a\\ \\3\\φ\\«\n",
    "start_line": 4799,
    "example": 274,
    "end_line": 4803
  },
  {
    "html": "<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a header\n[foo]: /url &quot;not a reference&quot;</p>\n",
    "section": "Backslash escapes",
    "markdown": "\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a header\n\\[foo]: /url \"not a reference\"\n",
    "start_line": 4808,
    "example": 275,
    "end_line": 4826
  },
  {
    "html": "<p>\\<em>emphasis</em></p>\n",
    "section": "Backslash escapes",
    "markdown": "\\\\*emphasis*\n",
    "start_line": 4830,
    "example": 276,
    "end_line": 4834
  },
  {
    "html": "<p>foo<br />\nbar</p>\n",
    "section": "Backslash escapes",
    "markdown": "foo\\\nbar\n",
    "start_line": 4838,
    "example": 277,
    "end_line": 4844
  },
  {
    "html": "<p><code>\\[\\`</code></p>\n",
    "section": "Backslash escapes",
    "markdown": "`` \\[\\` ``\n",
    "start_line": 4849,
    "example": 278,
    "end_line": 4853
  },
  {
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "section": "Backslash escapes",
    "markdown": "    \\[\\]\n",
    "start_line": 4855,
    "example": 279,
    "end_line": 4860
  },
  {
    "html": "<pre><code>\\[\\]\n</code></pre>\n",
    "section": "Backslash escapes",
    "markdown": "~~~\n\\[\\]\n~~~\n",
    "start_line": 4862,
    "example": 280,
    "end_line": 4869
  },
  {
    "html": "<p><a href=\"http://example.com?find=%5C*\">http://example.com?find=\\*</a></p>\n",
    "section": "Backslash escapes",
    "markdown": "<http://example.com?find=\\*>\n",
    "start_line": 4871,
    "example": 281,
    "end_line": 4875
  },
  {
    "html": "<a href=\"/bar\\/)\">\n",
    "section": "Backslash escapes",
    "markdown": "<a href=\"/bar\\/)\">\n",
    "start_line": 4877,
    "example": 282,
    "end_line": 4881
  },
  {
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "section": "Backslash escapes",
    "markdown": "[foo](/bar\\* \"ti\\*tle\")\n",
    "start_line": 4886,
    "example": 283,
    "end_line": 4890
  },
  {
    "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
    "section": "Backslash escapes",
    "markdown": "[foo]\n\n[foo]: /bar\\* \"ti\\*tle\"\n",
    "start_line": 4892,
    "example": 284,
    "end_line": 4898
  },
  {
    "html": "<pre><code class=\"language-foo+bar\">foo\n</code></pre>\n",
    "section": "Backslash escapes",
    "markdown": "``` foo\\+bar\nfoo\n```\n",
    "start_line": 4900,
    "example": 285,
    "end_line": 4907
  },
  {
    "html": "<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n",
    "section": "Entities",
    "markdown": "&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n",
    "start_line": 4926,
    "example": 286,
    "end_line": 4934
  },
  {
    "html": "<p># Ӓ Ϡ � �</p>\n",
    "section": "Entities",
    "markdown": "&#35; &#1234; &#992; &#98765432; &#0;\n",
    "start_line": 4943,
    "example": 287,
    "end_line": 4947
  },
  {
    "html": "<p>&quot; ആ ಫ</p>\n",
    "section": "Entities",
    "markdown": "&#X22; &#XD06; &#xcab;\n",
    "start_line": 4954,
    "example": 288,
    "end_line": 4958
  },
  {
    "html": "<p>&amp;nbsp &amp;x; &amp;#; &amp;#x; &amp;ThisIsWayTooLongToBeAnEntityIsntIt; &amp;hi?;</p>\n",
    "section": "Entities",
    "markdown": "&nbsp &x; &#; &#x; &ThisIsWayTooLongToBeAnEntityIsntIt; &hi?;\n",
    "start_line": 4962,
    "example": 289,
    "end_line": 4966
  },
  {
    "html": "<p>&amp;copy</p>\n",
    "section": "Entities",
    "markdown": "&copy\n",
    "start_line": 4972,
    "example": 290,
    "end_line": 4976
  },
  {
    "html": "<p>&amp;MadeUpEntity;</p>\n",
    "section": "Entities",
    "markdown": "&MadeUpEntity;\n",
    "start_line": 4981,
    "example": 291,
    "end_line": 4985
  },
  {
    "html": "<a href=\"&ouml;&ouml;.html\">\n",
    "section": "Entities",
    "markdown": "<a href=\"&ouml;&ouml;.html\">\n",
    "start_line": 4991,
    "example": 292,
    "end_line": 4995
  },
  {
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "section": "Entities",
    "markdown": "[foo](/f&ouml;&ouml; \"f&ouml;&ouml;\")\n",
    "start_line": 4997,
    "example": 293,
    "end_line": 5001
  },
  {
    "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
    "section": "Entities",
    "markdown": "[foo]\n\n[foo]: /f&ouml;&ouml; \"f&ouml;&ouml;\"\n",
    "start_line": 5003,
    "example": 294,
    "end_line": 5009
  },
  {
    "html": "<pre><code class=\"language-föö\">foo\n</code></pre>\n",
    "section": "Entities",
    "markdown": "``` f&ouml;&ouml;\nfoo\n```\n",
    "start_line": 5011,
    "example": 295,
    "end_line": 5018
  },
  {
    "html": "<p><code>f&amp;ouml;&amp;ouml;</code></p>\n",
    "section": "Entities",
    "markdown": "`f&ouml;&ouml;`\n",
    "start_line": 5022,
    "example": 296,
    "end_line": 5026
  },
  {
    "html": "<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n",
    "section": "Entities",
    "markdown": "    f&ouml;f&ouml;\n",
    "start_line": 5028,
    "example": 297,
    "end_line": 5033
  },
  {
    "html": "<p><code>foo</code></p>\n",
    "section": "Code spans",
    "markdown": "`foo`\n",
    "start_line": 5049,
    "example": 298,
    "end_line": 5053
  },
  {
    "html": "<p><code>foo ` bar</code></p>\n",
    "section": "Code spans",
    "markdown": "`` foo ` bar  ``\n",
    "start_line": 5058,
    "example": 299,
    "end_line": 5062
  },
  {
    "html": "<p><code>``</code></p>\n",
    "section": "Code spans",
    "markdown": "` `` `\n",
    "start_line": 5067,
    "example": 300,
    "end_line": 5071
  },
  {
    "html": "<p><code>foo</code></p>\n",
    "section": "Code spans",
    "markdown": "``\nfoo\n``\n",
    "start_line": 5075,
    "example": 301,
    "end_line": 5081
  },
  {
    "html": "<p><code>foo bar baz</code></p>\n",
    "section": "Code spans",
    "markdown": "`foo   bar\n  baz`\n",
    "start_line": 5086,
    "example": 302,
    "end_line": 5091
  },
  {
    "html": "<p><code>foo `` bar</code></p>\n",
    "section": "Code spans",
    "markdown": "`foo `` bar`\n",
    "start_line": 5106,
    "example": 303,
    "end_line": 5110
  },
  {
    "html": "<p><code>foo\\</code>bar`</p>\n",
    "section": "Code spans",
    "markdown": "`foo\\`bar`\n",
    "start_line": 5115,
    "example": 304,
    "end_line": 5119
  },
  {
    "html": "<p>*foo<code>*</code></p>\n",
    "section": "Code spans",
    "markdown": "*foo`*`\n",
    "start_line": 5130,
    "example": 305,
    "end_line": 5134
  },
  {
    "html": "<p>[not a <code>link](/foo</code>)</p>\n",
    "section": "Code spans",
    "markdown": "[not a `link](/foo`)\n",
    "start_line": 5138,
    "example": 306,
    "end_line": 5142
  },
  {
    "html": "<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n",
    "section": "Code spans",
    "markdown": "`<a href=\"`\">`\n",
    "start_line": 5147,
    "example": 307,
    "end_line": 5151
  },
  {
    "html": "<p><a href=\"`\">`</p>\n",
    "section": "Code spans",
    "markdown": "<a href=\"`\">`\n",
    "start_line": 5155,
    "example": 308,
    "end_line": 5159
  },
  {
    "html": "<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>\n",
    "section": "Code spans",
    "markdown": "`<http://foo.bar.`baz>`\n",
    "start_line": 5163,
    "example": 309,
    "end_line": 5167
  },
  {
    "html": "<p><a href=\"http://foo.bar.%60baz\">http://foo.bar.`baz</a>`</p>\n",
    "section": "Code spans",
    "markdown": "<http://foo.bar.`baz>`\n",
    "start_line": 5171,
    "example": 310,
    "end_line": 5175
  },
  {
    "html": "<p>```foo``</p>\n",
    "section": "Code spans",
    "markdown": "```foo``\n",
    "start_line": 5180,
    "example": 311,
    "end_line": 5184
  },
  {
    "html": "<p>`foo</p>\n",
    "section": "Code spans",
    "markdown": "`foo\n",
    "start_line": 5186,
    "example": 312,
    "end_line": 5190
  },
  {
    "html": "<p><em>foo bar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar*\n",
    "start_line": 5395,
    "example": 313,
    "end_line": 5399
  },
  {
    "html": "<p>a * foo bar*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "a * foo bar*\n",
    "start_line": 5404,
    "example": 314,
    "end_line": 5408
  },
  {
    "html": "<p>a*&quot;foo&quot;*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "a*\"foo\"*\n",
    "start_line": 5414,
    "example": 315,
    "end_line": 5418
  },
  {
    "html": "<p>* a *</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "* a *\n",
    "start_line": 5422,
    "example": 316,
    "end_line": 5426
  },
  {
    "html": "<p>foo<em>bar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo*bar*\n",
    "start_line": 5430,
    "example": 317,
    "end_line": 5434
  },
  {
    "html": "<p>5<em>6</em>78</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "5*6*78\n",
    "start_line": 5436,
    "example": 318,
    "end_line": 5440
  },
  {
    "html": "<p><em>foo bar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo bar_\n",
    "start_line": 5444,
    "example": 319,
    "end_line": 5448
  },
  {
    "html": "<p>_ foo bar_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_ foo bar_\n",
    "start_line": 5453,
    "example": 320,
    "end_line": 5457
  },
  {
    "html": "<p>a_&quot;foo&quot;_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "a_\"foo\"_\n",
    "start_line": 5462,
    "example": 321,
    "end_line": 5466
  },
  {
    "html": "<p>foo_bar_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo_bar_\n",
    "start_line": 5470,
    "example": 322,
    "end_line": 5474
  },
  {
    "html": "<p>5_6_78</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "5_6_78\n",
    "start_line": 5476,
    "example": 323,
    "end_line": 5480
  },
  {
    "html": "<p>пристаням_стремятся_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "пристаням_стремятся_\n",
    "start_line": 5482,
    "example": 324,
    "end_line": 5486
  },
  {
    "html": "<p>aa_&quot;bb&quot;_cc</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "aa_\"bb\"_cc\n",
    "start_line": 5491,
    "example": 325,
    "end_line": 5495
  },
  {
    "html": "<p>foo-<em>(bar)</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo-_(bar)_\n",
    "start_line": 5501,
    "example": 326,
    "end_line": 5505
  },
  {
    "html": "<p>_foo*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo*\n",
    "start_line": 5512,
    "example": 327,
    "end_line": 5516
  },
  {
    "html": "<p>*foo bar *</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar *\n",
    "start_line": 5521,
    "example": 328,
    "end_line": 5525
  },
  {
    "html": "<p>*foo bar</p>\n<ul>\n<li></li>\n</ul>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo bar\n*\n",
    "start_line": 5529,
    "example": 329,
    "end_line": 5537
  },
  {
    "html": "<p>*(*foo)</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*(*foo)\n",
    "start_line": 5543,
    "example": 330,
    "end_line": 5547
  },
  {
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*(*foo*)*\n",
    "start_line": 5552,
    "example": 331,
    "end_line": 5556
  },
  {
    "html": "<p><em>foo</em>bar</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo*bar\n",
    "start_line": 5560,
    "example": 332,
    "end_line": 5564
  },
  {
    "html": "<p>_foo bar _</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo bar _\n",
    "start_line": 5572,
    "example": 333,
    "end_line": 5576
  },
  {
    "html": "<p>_(_foo)</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_(_foo)\n",
    "start_line": 5581,
    "example": 334,
    "end_line": 5585
  },
  {
    "html": "<p><em>(<em>foo</em>)</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_(_foo_)_\n",
    "start_line": 5589,
    "example": 335,
    "end_line": 5593
  },
  {
    "html": "<p>_foo_bar</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo_bar\n",
    "start_line": 5597,
    "example": 336,
    "end_line": 5601
  },
  {
    "html": "<p>_пристаням_стремятся</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_пристаням_стремятся\n",
    "start_line": 5603,
    "example": 337,
    "end_line": 5607
  },
  {
    "html": "<p><em>foo_bar_baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo_bar_baz_\n",
    "start_line": 5609,
    "example": 338,
    "end_line": 5613
  },
  {
    "html": "<p><em>(bar)</em>.</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_(bar)_.\n",
    "start_line": 5619,
    "example": 339,
    "end_line": 5623
  },
  {
    "html": "<p><strong>foo bar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo bar**\n",
    "start_line": 5627,
    "example": 340,
    "end_line": 5631
  },
  {
    "html": "<p>** foo bar**</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "** foo bar**\n",
    "start_line": 5636,
    "example": 341,
    "end_line": 5640
  },
  {
    "html": "<p>a**&quot;foo&quot;**</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "a**\"foo\"**\n",
    "start_line": 5646,
    "example": 342,
    "end_line": 5650
  },
  {
    "html": "<p>foo<strong>bar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo**bar**\n",
    "start_line": 5654,
    "example": 343,
    "end_line": 5658
  },
  {
    "html": "<p><strong>foo bar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo bar__\n",
    "start_line": 5662,
    "example": 344,
    "end_line": 5666
  },
  {
    "html": "<p>__ foo bar__</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__ foo bar__\n",
    "start_line": 5671,
    "example": 345,
    "end_line": 5675
  },
  {
    "html": "<p>__\nfoo bar__</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__\nfoo bar__\n",
    "start_line": 5678,
    "example": 346,
    "end_line": 5684
  },
  {
    "html": "<p>a__&quot;foo&quot;__</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "a__\"foo\"__\n",
    "start_line": 5689,
    "example": 347,
    "end_line": 5693
  },
  {
    "html": "<p>foo__bar__</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo__bar__\n",
    "start_line": 5697,
    "example": 348,
    "end_line": 5701
  },
  {
    "html": "<p>5__6__78</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "5__6__78\n",
    "start_line": 5703,
    "example": 349,
    "end_line": 5707
  },
  {
    "html": "<p>пристаням__стремятся__</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "пристаням__стремятся__\n",
    "start_line": 5709,
    "example": 350,
    "end_line": 5713
  },
  {
    "html": "<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo, __bar__, baz__\n",
    "start_line": 5715,
    "example": 351,
    "end_line": 5719
  },
  {
    "html": "<p>foo-<strong>(bar)</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo-__(bar)__\n",
    "start_line": 5725,
    "example": 352,
    "end_line": 5729
  },
  {
    "html": "<p>**foo bar **</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo bar **\n",
    "start_line": 5737,
    "example": 353,
    "end_line": 5741
  },
  {
    "html": "<p>**(**foo)</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**(**foo)\n",
    "start_line": 5749,
    "example": 354,
    "end_line": 5753
  },
  {
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*(**foo**)*\n",
    "start_line": 5758,
    "example": 355,
    "end_line": 5762
  },
  {
    "html": "<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n",
    "start_line": 5764,
    "example": 356,
    "end_line": 5770
  },
  {
    "html": "<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo \"*bar*\" foo**\n",
    "start_line": 5772,
    "example": 357,
    "end_line": 5776
  },
  {
    "html": "<p><strong>foo</strong>bar</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo**bar\n",
    "start_line": 5780,
    "example": 358,
    "end_line": 5784
  },
  {
    "html": "<p>__foo bar __</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo bar __\n",
    "start_line": 5791,
    "example": 359,
    "end_line": 5795
  },
  {
    "html": "<p>__(__foo)</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__(__foo)\n",
    "start_line": 5800,
    "example": 360,
    "end_line": 5804
  },
  {
    "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_(__foo__)_\n",
    "start_line": 5809,
    "example": 361,
    "end_line": 5813
  },
  {
    "html": "<p>__foo__bar</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__bar\n",
    "start_line": 5817,
    "example": 362,
    "end_line": 5821
  },
  {
    "html": "<p>__пристаням__стремятся</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__пристаням__стремятся\n",
    "start_line": 5823,
    "example": 363,
    "end_line": 5827
  },
  {
    "html": "<p><strong>foo__bar__baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__bar__baz__\n",
    "start_line": 5829,
    "example": 364,
    "end_line": 5833
  },
  {
    "html": "<p><strong>(bar)</strong>.</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__(bar)__.\n",
    "start_line": 5839,
    "example": 365,
    "end_line": 5843
  },
  {
    "html": "<p><em>foo <a href=\"/url\">bar</a></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo [bar](/url)*\n",
    "start_line": 5850,
    "example": 366,
    "end_line": 5854
  },
  {
    "html": "<p><em>foo\nbar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo\nbar*\n",
    "start_line": 5856,
    "example": 367,
    "end_line": 5862
  },
  {
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo __bar__ baz_\n",
    "start_line": 5867,
    "example": 368,
    "end_line": 5871
  },
  {
    "html": "<p><em>foo <em>bar</em> baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo _bar_ baz_\n",
    "start_line": 5873,
    "example": 369,
    "end_line": 5877
  },
  {
    "html": "<p><em><em>foo</em> bar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo_ bar_\n",
    "start_line": 5879,
    "example": 370,
    "end_line": 5883
  },
  {
    "html": "<p><em>foo <em>bar</em></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo *bar**\n",
    "start_line": 5885,
    "example": 371,
    "end_line": 5889
  },
  {
    "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar** baz*\n",
    "start_line": 5891,
    "example": 372,
    "end_line": 5895
  },
  {
    "html": "<p><em>foo</em><em>bar</em><em>baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**bar**baz*\n",
    "start_line": 5899,
    "example": 373,
    "end_line": 5903
  },
  {
    "html": "<p><em><strong>foo</strong> bar</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo** bar*\n",
    "start_line": 5908,
    "example": 374,
    "end_line": 5912
  },
  {
    "html": "<p><em>foo <strong>bar</strong></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar***\n",
    "start_line": 5914,
    "example": 375,
    "end_line": 5918
  },
  {
    "html": "<p><em>foo</em><em>bar</em>**</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**bar***\n",
    "start_line": 5924,
    "example": 376,
    "end_line": 5928
  },
  {
    "html": "<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo **bar *baz* bim** bop*\n",
    "start_line": 5933,
    "example": 377,
    "end_line": 5937
  },
  {
    "html": "<p><em>foo <a href=\"/url\"><em>bar</em></a></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo [*bar*](/url)*\n",
    "start_line": 5939,
    "example": 378,
    "end_line": 5943
  },
  {
    "html": "<p>** is not an empty emphasis</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "** is not an empty emphasis\n",
    "start_line": 5947,
    "example": 379,
    "end_line": 5951
  },
  {
    "html": "<p>**** is not an empty strong emphasis</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**** is not an empty strong emphasis\n",
    "start_line": 5953,
    "example": 380,
    "end_line": 5957
  },
  {
    "html": "<p><strong>foo <a href=\"/url\">bar</a></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo [bar](/url)**\n",
    "start_line": 5965,
    "example": 381,
    "end_line": 5969
  },
  {
    "html": "<p><strong>foo\nbar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo\nbar**\n",
    "start_line": 5971,
    "example": 382,
    "end_line": 5977
  },
  {
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo _bar_ baz__\n",
    "start_line": 5982,
    "example": 383,
    "end_line": 5986
  },
  {
    "html": "<p><strong>foo <strong>bar</strong> baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo __bar__ baz__\n",
    "start_line": 5988,
    "example": 384,
    "end_line": 5992
  },
  {
    "html": "<p><strong><strong>foo</strong> bar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo__ bar__\n",
    "start_line": 5994,
    "example": 385,
    "end_line": 5998
  },
  {
    "html": "<p><strong>foo <strong>bar</strong></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo **bar****\n",
    "start_line": 6000,
    "example": 386,
    "end_line": 6004
  },
  {
    "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar* baz**\n",
    "start_line": 6006,
    "example": 387,
    "end_line": 6010
  },
  {
    "html": "<p><em><em>foo</em>bar</em>baz**</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*bar*baz**\n",
    "start_line": 6014,
    "example": 388,
    "end_line": 6018
  },
  {
    "html": "<p><strong><em>foo</em> bar</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo* bar**\n",
    "start_line": 6023,
    "example": 389,
    "end_line": 6027
  },
  {
    "html": "<p><strong>foo <em>bar</em></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar***\n",
    "start_line": 6029,
    "example": 390,
    "end_line": 6033
  },
  {
    "html": "<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo *bar **baz**\nbim* bop**\n",
    "start_line": 6037,
    "example": 391,
    "end_line": 6043
  },
  {
    "html": "<p><strong>foo <a href=\"/url\"><em>bar</em></a></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo [*bar*](/url)**\n",
    "start_line": 6045,
    "example": 392,
    "end_line": 6049
  },
  {
    "html": "<p>__ is not an empty emphasis</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__ is not an empty emphasis\n",
    "start_line": 6053,
    "example": 393,
    "end_line": 6057
  },
  {
    "html": "<p>____ is not an empty strong emphasis</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "____ is not an empty strong emphasis\n",
    "start_line": 6059,
    "example": 394,
    "end_line": 6063
  },
  {
    "html": "<p>foo ***</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo ***\n",
    "start_line": 6068,
    "example": 395,
    "end_line": 6072
  },
  {
    "html": "<p>foo <em>*</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *\\**\n",
    "start_line": 6074,
    "example": 396,
    "end_line": 6078
  },
  {
    "html": "<p>foo <em>_</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *_*\n",
    "start_line": 6080,
    "example": 397,
    "end_line": 6084
  },
  {
    "html": "<p>foo *****</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo *****\n",
    "start_line": 6086,
    "example": 398,
    "end_line": 6090
  },
  {
    "html": "<p>foo <strong>*</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo **\\***\n",
    "start_line": 6092,
    "example": 399,
    "end_line": 6096
  },
  {
    "html": "<p>foo <strong>_</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo **_**\n",
    "start_line": 6098,
    "example": 400,
    "end_line": 6102
  },
  {
    "html": "<p>*<em>foo</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*\n",
    "start_line": 6108,
    "example": 401,
    "end_line": 6112
  },
  {
    "html": "<p><em>foo</em>*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo**\n",
    "start_line": 6114,
    "example": 402,
    "end_line": 6118
  },
  {
    "html": "<p>*<strong>foo</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo**\n",
    "start_line": 6120,
    "example": 403,
    "end_line": 6124
  },
  {
    "html": "<p>***<em>foo</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "****foo*\n",
    "start_line": 6126,
    "example": 404,
    "end_line": 6130
  },
  {
    "html": "<p><strong>foo</strong>*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo***\n",
    "start_line": 6132,
    "example": 405,
    "end_line": 6136
  },
  {
    "html": "<p><em>foo</em>***</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo****\n",
    "start_line": 6138,
    "example": 406,
    "end_line": 6142
  },
  {
    "html": "<p>foo ___</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo ___\n",
    "start_line": 6147,
    "example": 407,
    "end_line": 6151
  },
  {
    "html": "<p>foo <em>_</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _\\__\n",
    "start_line": 6153,
    "example": 408,
    "end_line": 6157
  },
  {
    "html": "<p>foo <em>*</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _*_\n",
    "start_line": 6159,
    "example": 409,
    "end_line": 6163
  },
  {
    "html": "<p>foo _____</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo _____\n",
    "start_line": 6165,
    "example": 410,
    "end_line": 6169
  },
  {
    "html": "<p>foo <strong>_</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo __\\___\n",
    "start_line": 6171,
    "example": 411,
    "end_line": 6175
  },
  {
    "html": "<p>foo <strong>*</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "foo __*__\n",
    "start_line": 6177,
    "example": 412,
    "end_line": 6181
  },
  {
    "html": "<p>_<em>foo</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo_\n",
    "start_line": 6183,
    "example": 413,
    "end_line": 6187
  },
  {
    "html": "<p><em>foo</em>_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo__\n",
    "start_line": 6193,
    "example": 414,
    "end_line": 6197
  },
  {
    "html": "<p>_<strong>foo</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "___foo__\n",
    "start_line": 6199,
    "example": 415,
    "end_line": 6203
  },
  {
    "html": "<p>___<em>foo</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo_\n",
    "start_line": 6205,
    "example": 416,
    "end_line": 6209
  },
  {
    "html": "<p><strong>foo</strong>_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo___\n",
    "start_line": 6211,
    "example": 417,
    "end_line": 6215
  },
  {
    "html": "<p><em>foo</em>___</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo____\n",
    "start_line": 6217,
    "example": 418,
    "end_line": 6221
  },
  {
    "html": "<p><strong>foo</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo**\n",
    "start_line": 6226,
    "example": 419,
    "end_line": 6230
  },
  {
    "html": "<p><em><em>foo</em></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*_foo_*\n",
    "start_line": 6232,
    "example": 420,
    "end_line": 6236
  },
  {
    "html": "<p><strong>foo</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__foo__\n",
    "start_line": 6238,
    "example": 421,
    "end_line": 6242
  },
  {
    "html": "<p><em><em>foo</em></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_*foo*_\n",
    "start_line": 6244,
    "example": 422,
    "end_line": 6248
  },
  {
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "****foo****\n",
    "start_line": 6253,
    "example": 423,
    "end_line": 6257
  },
  {
    "html": "<p><strong><strong>foo</strong></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "____foo____\n",
    "start_line": 6259,
    "example": 424,
    "end_line": 6263
  },
  {
    "html": "<p><strong><strong><strong>foo</strong></strong></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "******foo******\n",
    "start_line": 6269,
    "example": 425,
    "end_line": 6273
  },
  {
    "html": "<p><strong><em>foo</em></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "***foo***\n",
    "start_line": 6277,
    "example": 426,
    "end_line": 6281
  },
  {
    "html": "<p><strong><strong><em>foo</em></strong></strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_____foo_____\n",
    "start_line": 6283,
    "example": 427,
    "end_line": 6287
  },
  {
    "html": "<p><em>foo _bar</em> baz_</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo _bar* baz_\n",
    "start_line": 6291,
    "example": 428,
    "end_line": 6295
  },
  {
    "html": "<p><em><em>foo</em>bar</em>*</p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo*bar**\n",
    "start_line": 6297,
    "example": 429,
    "end_line": 6301
  },
  {
    "html": "<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo __bar *baz bim__ bam*\n",
    "start_line": 6303,
    "example": 430,
    "end_line": 6307
  },
  {
    "html": "<p>**foo <strong>bar baz</strong></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**foo **bar baz**\n",
    "start_line": 6311,
    "example": 431,
    "end_line": 6315
  },
  {
    "html": "<p>*foo <em>bar baz</em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*foo *bar baz*\n",
    "start_line": 6317,
    "example": 432,
    "end_line": 6321
  },
  {
    "html": "<p>*<a href=\"/url\">bar*</a></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*[bar*](/url)\n",
    "start_line": 6325,
    "example": 433,
    "end_line": 6329
  },
  {
    "html": "<p>_foo <a href=\"/url\">bar_</a></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_foo [bar_](/url)\n",
    "start_line": 6331,
    "example": 434,
    "end_line": 6335
  },
  {
    "html": "<p>*<img src=\"foo\" title=\"*\"/></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*<img src=\"foo\" title=\"*\"/>\n",
    "start_line": 6337,
    "example": 435,
    "end_line": 6341
  },
  {
    "html": "<p>**<a href=\"**\"></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**<a href=\"**\">\n",
    "start_line": 6343,
    "example": 436,
    "end_line": 6347
  },
  {
    "html": "<p>__<a href=\"__\"></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__<a href=\"__\">\n",
    "start_line": 6349,
    "example": 437,
    "end_line": 6353
  },
  {
    "html": "<p><em>a <code>*</code></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "*a `*`*\n",
    "start_line": 6355,
    "example": 438,
    "end_line": 6359
  },
  {
    "html": "<p><em>a <code>_</code></em></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "_a `_`_\n",
    "start_line": 6361,
    "example": 439,
    "end_line": 6365
  },
  {
    "html": "<p>**a<a href=\"http://foo.bar/?q=**\">http://foo.bar/?q=**</a></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "**a<http://foo.bar/?q=**>\n",
    "start_line": 6367,
    "example": 440,
    "end_line": 6371
  },
  {
    "html": "<p>__a<a href=\"http://foo.bar/?q=__\">http://foo.bar/?q=__</a></p>\n",
    "section": "Emphasis and strong emphasis",
    "markdown": "__a<http://foo.bar/?q=__>\n",
    "start_line": 6373,
    "example": 441,
    "end_line": 6377
  },
  {
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](/uri \"title\")\n",
    "start_line": 6452,
    "example": 442,
    "end_line": 6456
  },
  {
    "html": "<p><a href=\"/uri\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](/uri)\n",
    "start_line": 6460,
    "example": 443,
    "end_line": 6464
  },
  {
    "html": "<p><a href=\"\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link]()\n",
    "start_line": 6468,
    "example": 444,
    "end_line": 6472
  },
  {
    "html": "<p><a href=\"\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](<>)\n",
    "start_line": 6474,
    "example": 445,
    "end_line": 6478
  },
  {
    "html": "<p>[link](/my uri)</p>\n",
    "section": "Links",
    "markdown": "[link](/my uri)\n",
    "start_line": 6483,
    "example": 446,
    "end_line": 6487
  },
  {
    "html": "<p><a href=\"/my%20uri\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](</my uri>)\n",
    "start_line": 6489,
    "example": 447,
    "end_line": 6493
  },
  {
    "html": "<p>[link](foo\nbar)</p>\n",
    "section": "Links",
    "markdown": "[link](foo\nbar)\n",
    "start_line": 6497,
    "example": 448,
    "end_line": 6503
  },
  {
    "html": "<p>[link](<foo\nbar>)</p>\n",
    "section": "Links",
    "markdown": "[link](<foo\nbar>)\n",
    "start_line": 6505,
    "example": 449,
    "end_line": 6511
  },
  {
    "html": "<p><a href=\"(foo)and(bar)\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link]((foo)and(bar))\n",
    "start_line": 6515,
    "example": 450,
    "end_line": 6519
  },
  {
    "html": "<p>[link](foo(and(bar)))</p>\n",
    "section": "Links",
    "markdown": "[link](foo(and(bar)))\n",
    "start_line": 6524,
    "example": 451,
    "end_line": 6528
  },
  {
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](foo(and\\(bar\\)))\n",
    "start_line": 6530,
    "example": 452,
    "end_line": 6534
  },
  {
    "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](<foo(and(bar))>)\n",
    "start_line": 6536,
    "example": 453,
    "end_line": 6540
  },
  {
    "html": "<p><a href=\"foo):\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](foo\\)\\:)\n",
    "start_line": 6545,
    "example": 454,
    "end_line": 6549
  },
  {
    "html": "<p><a href=\"#fragment\">link</a></p>\n<p><a href=\"http://example.com#fragment\">link</a></p>\n<p><a href=\"http://example.com?foo=bar&amp;baz#fragment\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=bar&baz#fragment)\n",
    "start_line": 6553,
    "example": 455,
    "end_line": 6563
  },
  {
    "html": "<p><a href=\"foo%5Cbar\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](foo\\bar)\n",
    "start_line": 6568,
    "example": 456,
    "end_line": 6572
  },
  {
    "html": "<p><a href=\"foo%20b%C3%A4\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](foo%20b&auml;)\n",
    "start_line": 6579,
    "example": 457,
    "end_line": 6583
  },
  {
    "html": "<p><a href=\"%22title%22\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](\"title\")\n",
    "start_line": 6589,
    "example": 458,
    "end_line": 6593
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](/url \"title\")\n[link](/url 'title')\n[link](/url (title))\n",
    "start_line": 6597,
    "example": 459,
    "end_line": 6605
  },
  {
    "html": "<p><a href=\"/url\" title=\"title &quot;&quot;\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](/url \"title \\\"&quot;\")\n",
    "start_line": 6609,
    "example": 460,
    "end_line": 6613
  },
  {
    "html": "<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n",
    "section": "Links",
    "markdown": "[link](/url \"title \"and\" title\")\n",
    "start_line": 6617,
    "example": 461,
    "end_line": 6621
  },
  {
    "html": "<p><a href=\"/url\" title=\"title &quot;and&quot; title\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](/url 'title \"and\" title')\n",
    "start_line": 6625,
    "example": 462,
    "end_line": 6629
  },
  {
    "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
    "section": "Links",
    "markdown": "[link](   /uri\n  \"title\"  )\n",
    "start_line": 6647,
    "example": 463,
    "end_line": 6652
  },
  {
    "html": "<p>[link] (/uri)</p>\n",
    "section": "Links",
    "markdown": "[link] (/uri)\n",
    "start_line": 6657,
    "example": 464,
    "end_line": 6661
  },
  {
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "section": "Links",
    "markdown": "[link [foo [bar]]](/uri)\n",
    "start_line": 6666,
    "example": 465,
    "end_line": 6670
  },
  {
    "html": "<p>[link] bar](/uri)</p>\n",
    "section": "Links",
    "markdown": "[link] bar](/uri)\n",
    "start_line": 6672,
    "example": 466,
    "end_line": 6676
  },
  {
    "html": "<p>[link <a href=\"/uri\">bar</a></p>\n",
    "section": "Links",
    "markdown": "[link [bar](/uri)\n",
    "start_line": 6678,
    "example": 467,
    "end_line": 6682
  },
  {
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "section": "Links",
    "markdown": "[link \\[bar](/uri)\n",
    "start_line": 6684,
    "example": 468,
    "end_line": 6688
  },
  {
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "section": "Links",
    "markdown": "[link *foo **bar** `#`*](/uri)\n",
    "start_line": 6692,
    "example": 469,
    "end_line": 6696
  },
  {
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "section": "Links",
    "markdown": "[![moon](moon.jpg)](/uri)\n",
    "start_line": 6698,
    "example": 470,
    "end_line": 6702
  },
  {
    "html": "<p>[foo <a href=\"/uri\">bar</a>](/uri)</p>\n",
    "section": "Links",
    "markdown": "[foo [bar](/uri)](/uri)\n",
    "start_line": 6706,
    "example": 471,
    "end_line": 6710
  },
  {
    "html": "<p>[foo <em>[bar <a href=\"/uri\">baz</a>](/uri)</em>](/uri)</p>\n",
    "section": "Links",
    "markdown": "[foo *[bar [baz](/uri)](/uri)*](/uri)\n",
    "start_line": 6712,
    "example": 472,
    "end_line": 6716
  },
  {
    "html": "<p><img src=\"uri3\" alt=\"[foo](uri2)\" /></p>\n",
    "section": "Links",
    "markdown": "![[[foo](uri1)](uri2)](uri3)\n",
    "start_line": 6718,
    "example": 473,
    "end_line": 6722
  },
  {
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "section": "Links",
    "markdown": "*[foo*](/uri)\n",
    "start_line": 6727,
    "example": 474,
    "end_line": 6731
  },
  {
    "html": "<p><a href=\"baz*\">foo *bar</a></p>\n",
    "section": "Links",
    "markdown": "[foo *bar](baz*)\n",
    "start_line": 6733,
    "example": 475,
    "end_line": 6737
  },
  {
    "html": "<p><em>foo [bar</em> baz]</p>\n",
    "section": "Links",
    "markdown": "*foo [bar* baz]\n",
    "start_line": 6742,
    "example": 476,
    "end_line": 6746
  },
  {
    "html": "<p>[foo <bar attr=\"](baz)\"></p>\n",
    "section": "Links",
    "markdown": "[foo <bar attr=\"](baz)\">\n",
    "start_line": 6751,
    "example": 477,
    "end_line": 6755
  },
  {
    "html": "<p>[foo<code>](/uri)</code></p>\n",
    "section": "Links",
    "markdown": "[foo`](/uri)`\n",
    "start_line": 6757,
    "example": 478,
    "end_line": 6761
  },
  {
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D(uri)\">http://example.com/?search=](uri)</a></p>\n",
    "section": "Links",
    "markdown": "[foo<http://example.com/?search=](uri)>\n",
    "start_line": 6763,
    "example": 479,
    "end_line": 6767
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo][bar]\n\n[bar]: /url \"title\"\n",
    "start_line": 6797,
    "example": 480,
    "end_line": 6803
  },
  {
    "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
    "section": "Links",
    "markdown": "[link [foo [bar]]][ref]\n\n[ref]: /uri\n",
    "start_line": 6811,
    "example": 481,
    "end_line": 6817
  },
  {
    "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
    "section": "Links",
    "markdown": "[link \\[bar][ref]\n\n[ref]: /uri\n",
    "start_line": 6819,
    "example": 482,
    "end_line": 6825
  },
  {
    "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
    "section": "Links",
    "markdown": "[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n",
    "start_line": 6829,
    "example": 483,
    "end_line": 6835
  },
  {
    "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
    "section": "Links",
    "markdown": "[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n",
    "start_line": 6837,
    "example": 484,
    "end_line": 6843
  },
  {
    "html": "<p>[foo <a href=\"/uri\">bar</a>]<a href=\"/uri\">ref</a></p>\n",
    "section": "Links",
    "markdown": "[foo [bar](/uri)][ref]\n\n[ref]: /uri\n",
    "start_line": 6847,
    "example": 485,
    "end_line": 6853
  },
  {
    "html": "<p>[foo <em>bar <a href=\"/uri\">baz</a></em>]<a href=\"/uri\">ref</a></p>\n",
    "section": "Links",
    "markdown": "[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n",
    "start_line": 6855,
    "example": 486,
    "end_line": 6861
  },
  {
    "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
    "section": "Links",
    "markdown": "*[foo*][ref]\n\n[ref]: /uri\n",
    "start_line": 6869,
    "example": 487,
    "end_line": 6875
  },
  {
    "html": "<p><a href=\"/uri\">foo *bar</a></p>\n",
    "section": "Links",
    "markdown": "[foo *bar][ref]\n\n[ref]: /uri\n",
    "start_line": 6877,
    "example": 488,
    "end_line": 6883
  },
  {
    "html": "<p>[foo <bar attr=\"][ref]\"></p>\n",
    "section": "Links",
    "markdown": "[foo <bar attr=\"][ref]\">\n\n[ref]: /uri\n",
    "start_line": 6888,
    "example": 489,
    "end_line": 6894
  },
  {
    "html": "<p>[foo<code>][ref]</code></p>\n",
    "section": "Links",
    "markdown": "[foo`][ref]`\n\n[ref]: /uri\n",
    "start_line": 6896,
    "example": 490,
    "end_line": 6902
  },
  {
    "html": "<p>[foo<a href=\"http://example.com/?search=%5D%5Bref%5D\">http://example.com/?search=][ref]</a></p>\n",
    "section": "Links",
    "markdown": "[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri\n",
    "start_line": 6904,
    "example": 491,
    "end_line": 6910
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo][BaR]\n\n[bar]: /url \"title\"\n",
    "start_line": 6914,
    "example": 492,
    "end_line": 6920
  },
  {
    "html": "<p><a href=\"/url\">Толпой</a> is a Russian word.</p>\n",
    "section": "Links",
    "markdown": "[Толпой][Толпой] is a Russian word.\n\n[ТОЛПОЙ]: /url\n",
    "start_line": 6924,
    "example": 493,
    "end_line": 6930
  },
  {
    "html": "<p><a href=\"/url\">Baz</a></p>\n",
    "section": "Links",
    "markdown": "[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n",
    "start_line": 6935,
    "example": 494,
    "end_line": 6942
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo] [bar]\n\n[bar]: /url \"title\"\n",
    "start_line": 6946,
    "example": 495,
    "end_line": 6952
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo]\n[bar]\n\n[bar]: /url \"title\"\n",
    "start_line": 6954,
    "example": 496,
    "end_line": 6961
  },
  {
    "html": "<p><a href=\"/url1\">bar</a></p>\n",
    "section": "Links",
    "markdown": "[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n",
    "start_line": 6966,
    "example": 497,
    "end_line": 6974
  },
  {
    "html": "<p>[bar][foo!]</p>\n",
    "section": "Links",
    "markdown": "[bar][foo\\!]\n\n[foo!]: /url\n",
    "start_line": 6980,
    "example": 498,
    "end_line": 6986
  },
  {
    "html": "<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n",
    "section": "Links",
    "markdown": "[foo][ref[]\n\n[ref[]: /uri\n",
    "start_line": 6991,
    "example": 499,
    "end_line": 6998
  },
  {
    "html": "<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n",
    "section": "Links",
    "markdown": "[foo][ref[bar]]\n\n[ref[bar]]: /uri\n",
    "start_line": 7000,
    "example": 500,
    "end_line": 7007
  },
  {
    "html": "<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n",
    "section": "Links",
    "markdown": "[[[foo]]]\n\n[[[foo]]]: /url\n",
    "start_line": 7009,
    "example": 501,
    "end_line": 7016
  },
  {
    "html": "<p><a href=\"/uri\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo][ref\\[]\n\n[ref\\[]: /uri\n",
    "start_line": 7018,
    "example": 502,
    "end_line": 7024
  },
  {
    "html": "<p>[]</p>\n<p>[]: /uri</p>\n",
    "section": "Links",
    "markdown": "[]\n\n[]: /uri\n",
    "start_line": 7028,
    "example": 503,
    "end_line": 7035
  },
  {
    "html": "<p>[\n]</p>\n<p>[\n]: /uri</p>\n",
    "section": "Links",
    "markdown": "[\n ]\n\n[\n ]: /uri\n",
    "start_line": 7037,
    "example": 504,
    "end_line": 7048
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo][]\n\n[foo]: /url \"title\"\n",
    "start_line": 7059,
    "example": 505,
    "end_line": 7065
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "section": "Links",
    "markdown": "[*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "start_line": 7067,
    "example": 506,
    "end_line": 7073
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "section": "Links",
    "markdown": "[Foo][]\n\n[foo]: /url \"title\"\n",
    "start_line": 7077,
    "example": 507,
    "end_line": 7083
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo] \n[]\n\n[foo]: /url \"title\"\n",
    "start_line": 7089,
    "example": 508,
    "end_line": 7096
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7107,
    "example": 509,
    "end_line": 7113
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
    "section": "Links",
    "markdown": "[*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "start_line": 7115,
    "example": 510,
    "end_line": 7121
  },
  {
    "html": "<p>[<a href=\"/url\" title=\"title\"><em>foo</em> bar</a>]</p>\n",
    "section": "Links",
    "markdown": "[[*foo* bar]]\n\n[*foo* bar]: /url \"title\"\n",
    "start_line": 7123,
    "example": 511,
    "end_line": 7129
  },
  {
    "html": "<p>[[bar <a href=\"/url\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[[bar [foo]\n\n[foo]: /url\n",
    "start_line": 7131,
    "example": 512,
    "end_line": 7137
  },
  {
    "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
    "section": "Links",
    "markdown": "[Foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7141,
    "example": 513,
    "end_line": 7147
  },
  {
    "html": "<p><a href=\"/url\">foo</a> bar</p>\n",
    "section": "Links",
    "markdown": "[foo] bar\n\n[foo]: /url\n",
    "start_line": 7151,
    "example": 514,
    "end_line": 7157
  },
  {
    "html": "<p>[foo]</p>\n",
    "section": "Links",
    "markdown": "\\[foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7162,
    "example": 515,
    "end_line": 7168
  },
  {
    "html": "<p>*<a href=\"/url\">foo*</a></p>\n",
    "section": "Links",
    "markdown": "[foo*]: /url\n\n*[foo*]\n",
    "start_line": 7173,
    "example": 516,
    "end_line": 7179
  },
  {
    "html": "<p><a href=\"/url2\">foo</a></p>\n",
    "section": "Links",
    "markdown": "[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n",
    "start_line": 7183,
    "example": 517,
    "end_line": 7190
  },
  {
    "html": "<p>[foo]<a href=\"/url\">bar</a></p>\n",
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url\n",
    "start_line": 7195,
    "example": 518,
    "end_line": 7201
  },
  {
    "html": "<p><a href=\"/url2\">foo</a><a href=\"/url1\">baz</a></p>\n",
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n",
    "start_line": 7206,
    "example": 519,
    "end_line": 7213
  },
  {
    "html": "<p>[foo]<a href=\"/url1\">bar</a></p>\n",
    "section": "Links",
    "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n",
    "start_line": 7218,
    "example": 520,
    "end_line": 7225
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![foo](/url \"title\")\n",
    "start_line": 7240,
    "example": 521,
    "end_line": 7244
  },
  {
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "section": "Images",
    "markdown": "![foo *bar*]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "start_line": 7246,
    "example": 522,
    "end_line": 7252
  },
  {
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "section": "Images",
    "markdown": "![foo ![bar](/url)](/url2)\n",
    "start_line": 7254,
    "example": 523,
    "end_line": 7258
  },
  {
    "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
    "section": "Images",
    "markdown": "![foo [bar](/url)](/url2)\n",
    "start_line": 7260,
    "example": 524,
    "end_line": 7264
  },
  {
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "section": "Images",
    "markdown": "![foo *bar*][]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
    "start_line": 7273,
    "example": 525,
    "end_line": 7279
  },
  {
    "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
    "section": "Images",
    "markdown": "![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg \"train & tracks\"\n",
    "start_line": 7281,
    "example": 526,
    "end_line": 7287
  },
  {
    "html": "<p><img src=\"train.jpg\" alt=\"foo\" /></p>\n",
    "section": "Images",
    "markdown": "![foo](train.jpg)\n",
    "start_line": 7289,
    "example": 527,
    "end_line": 7293
  },
  {
    "html": "<p>My <img src=\"/path/to/train.jpg\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "My ![foo bar](/path/to/train.jpg  \"title\"   )\n",
    "start_line": 7295,
    "example": 528,
    "end_line": 7299
  },
  {
    "html": "<p><img src=\"url\" alt=\"foo\" /></p>\n",
    "section": "Images",
    "markdown": "![foo](<url>)\n",
    "start_line": 7301,
    "example": 529,
    "end_line": 7305
  },
  {
    "html": "<p><img src=\"/url\" alt=\"\" /></p>\n",
    "section": "Images",
    "markdown": "![](/url)\n",
    "start_line": 7307,
    "example": 530,
    "end_line": 7311
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "section": "Images",
    "markdown": "![foo] [bar]\n\n[bar]: /url\n",
    "start_line": 7315,
    "example": 531,
    "end_line": 7321
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
    "section": "Images",
    "markdown": "![foo] [bar]\n\n[BAR]: /url\n",
    "start_line": 7323,
    "example": 532,
    "end_line": 7329
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![foo][]\n\n[foo]: /url \"title\"\n",
    "start_line": 7333,
    "example": 533,
    "end_line": 7339
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
    "start_line": 7341,
    "example": 534,
    "end_line": 7347
  },
  {
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![Foo][]\n\n[foo]: /url \"title\"\n",
    "start_line": 7351,
    "example": 535,
    "end_line": 7357
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![foo] \n[]\n\n[foo]: /url \"title\"\n",
    "start_line": 7362,
    "example": 536,
    "end_line": 7369
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7373,
    "example": 537,
    "end_line": 7379
  },
  {
    "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
    "start_line": 7381,
    "example": 538,
    "end_line": 7387
  },
  {
    "html": "<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n",
    "section": "Images",
    "markdown": "![[foo]]\n\n[[foo]]: /url \"title\"\n",
    "start_line": 7391,
    "example": 539,
    "end_line": 7398
  },
  {
    "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
    "section": "Images",
    "markdown": "![Foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7402,
    "example": 540,
    "end_line": 7408
  },
  {
    "html": "<p>![foo]</p>\n",
    "section": "Images",
    "markdown": "\\!\\[foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7413,
    "example": 541,
    "end_line": 7419
  },
  {
    "html": "<p>!<a href=\"/url\" title=\"title\">foo</a></p>\n",
    "section": "Images",
    "markdown": "\\![foo]\n\n[foo]: /url \"title\"\n",
    "start_line": 7424,
    "example": 542,
    "end_line": 7430
  },
  {
    "html": "<p><a href=\"http://foo.bar.baz\">http://foo.bar.baz</a></p>\n",
    "section": "Autolinks",
    "markdown": "<http://foo.bar.baz>\n",
    "start_line": 7477,
    "example": 543,
    "end_line": 7481
  },
  {
    "html": "<p><a href=\"http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean\">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n",
    "section": "Autolinks",
    "markdown": "<http://foo.bar.baz/test?q=hello&id=22&boolean>\n",
    "start_line": 7483,
    "example": 544,
    "end_line": 7487
  },
  {
    "html": "<p><a href=\"irc://foo.bar:2233/baz\">irc://foo.bar:2233/baz</a></p>\n",
    "section": "Autolinks",
    "markdown": "<irc://foo.bar:2233/baz>\n",
    "start_line": 7489,
    "example": 545,
    "end_line": 7493
  },
  {
    "html": "<p><a href=\"MAILTO:FOO@BAR.BAZ\">MAILTO:FOO@BAR.BAZ</a></p>\n",
    "section": "Autolinks",
    "markdown": "<MAILTO:FOO@BAR.BAZ>\n",
    "start_line": 7497,
    "example": 546,
    "end_line": 7501
  },
  {
    "html": "<p>&lt;http://foo.bar/baz bim&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<http://foo.bar/baz bim>\n",
    "start_line": 7505,
    "example": 547,
    "end_line": 7509
  },
  {
    "html": "<p><a href=\"http://example.com/%5C%5B%5C\">http://example.com/\\[\\</a></p>\n",
    "section": "Autolinks",
    "markdown": "<http://example.com/\\[\\>\n",
    "start_line": 7513,
    "example": 548,
    "end_line": 7517
  },
  {
    "html": "<p><a href=\"mailto:foo@bar.example.com\">foo@bar.example.com</a></p>\n",
    "section": "Autolinks",
    "markdown": "<foo@bar.example.com>\n",
    "start_line": 7534,
    "example": 549,
    "end_line": 7538
  },
  {
    "html": "<p><a href=\"mailto:foo+special@Bar.baz-bar0.com\">foo+special@Bar.baz-bar0.com</a></p>\n",
    "section": "Autolinks",
    "markdown": "<foo+special@Bar.baz-bar0.com>\n",
    "start_line": 7540,
    "example": 550,
    "end_line": 7544
  },
  {
    "html": "<p>&lt;foo+@bar.example.com&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<foo\\+@bar.example.com>\n",
    "start_line": 7548,
    "example": 551,
    "end_line": 7552
  },
  {
    "html": "<p>&lt;&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<>\n",
    "start_line": 7556,
    "example": 552,
    "end_line": 7560
  },
  {
    "html": "<p>&lt;heck://bing.bong&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<heck://bing.bong>\n",
    "start_line": 7562,
    "example": 553,
    "end_line": 7566
  },
  {
    "html": "<p>&lt; http://foo.bar &gt;</p>\n",
    "section": "Autolinks",
    "markdown": "< http://foo.bar >\n",
    "start_line": 7568,
    "example": 554,
    "end_line": 7572
  },
  {
    "html": "<p>&lt;foo.bar.baz&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<foo.bar.baz>\n",
    "start_line": 7574,
    "example": 555,
    "end_line": 7578
  },
  {
    "html": "<p>&lt;localhost:5001/foo&gt;</p>\n",
    "section": "Autolinks",
    "markdown": "<localhost:5001/foo>\n",
    "start_line": 7580,
    "example": 556,
    "end_line": 7584
  },
  {
    "html": "<p>http://example.com</p>\n",
    "section": "Autolinks",
    "markdown": "http://example.com\n",
    "start_line": 7586,
    "example": 557,
    "end_line": 7590
  },
  {
    "html": "<p>foo@bar.example.com</p>\n",
    "section": "Autolinks",
    "markdown": "foo@bar.example.com\n",
    "start_line": 7592,
    "example": 558,
    "end_line": 7596
  },
  {
    "html": "<p><a><bab><c2c></p>\n",
    "section": "Raw HTML",
    "markdown": "<a><bab><c2c>\n",
    "start_line": 7673,
    "example": 559,
    "end_line": 7677
  },
  {
    "html": "<p><a/><b2/></p>\n",
    "section": "Raw HTML",
    "markdown": "<a/><b2/>\n",
    "start_line": 7681,
    "example": 560,
    "end_line": 7685
  },
  {
    "html": "<p><a  /><b2\ndata=\"foo\" ></p>\n",
    "section": "Raw HTML",
    "markdown": "<a  /><b2\ndata=\"foo\" >\n",
    "start_line": 7689,
    "example": 561,
    "end_line": 7695
  },
  {
    "html": "<p><a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 /></p>\n",
    "section": "Raw HTML",
    "markdown": "<a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 />\n",
    "start_line": 7699,
    "example": 562,
    "end_line": 7705
  },
  {
    "html": "<responsive-image src=\"foo.jpg\" />\n<My-Tag>\nfoo\n</My-Tag>\n",
    "section": "Raw HTML",
    "markdown": "<responsive-image src=\"foo.jpg\" />\n\n<My-Tag>\nfoo\n</My-Tag>\n",
    "start_line": 7709,
    "example": 563,
    "end_line": 7720
  },
  {
    "html": "<p>&lt;33&gt; &lt;__&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "<33> <__>\n",
    "start_line": 7724,
    "example": 564,
    "end_line": 7728
  },
  {
    "html": "<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "<a h*#ref=\"hi\">\n",
    "start_line": 7732,
    "example": 565,
    "end_line": 7736
  },
  {
    "html": "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "<a href=\"hi'> <a href=hi'>\n",
    "start_line": 7740,
    "example": 566,
    "end_line": 7744
  },
  {
    "html": "<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "< a><\nfoo><bar/ >\n",
    "start_line": 7748,
    "example": 567,
    "end_line": 7754
  },
  {
    "html": "<p>&lt;a href='bar'title=title&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "<a href='bar'title=title>\n",
    "start_line": 7758,
    "example": 568,
    "end_line": 7762
  },
  {
    "html": "</a>\n</foo >\n",
    "section": "Raw HTML",
    "markdown": "</a>\n</foo >\n",
    "start_line": 7766,
    "example": 569,
    "end_line": 7772
  },
  {
    "html": "<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "</a href=\"foo\">\n",
    "start_line": 7776,
    "example": 570,
    "end_line": 7780
  },
  {
    "html": "<p>foo <!-- this is a\ncomment - with hyphen --></p>\n",
    "section": "Raw HTML",
    "markdown": "foo <!-- this is a\ncomment - with hyphen -->\n",
    "start_line": 7784,
    "example": 571,
    "end_line": 7790
  },
  {
    "html": "<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "foo <!-- not a comment -- two hyphens -->\n",
    "start_line": 7792,
    "example": 572,
    "end_line": 7796
  },
  {
    "html": "<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "foo <!--> foo -->\n\nfoo <!-- foo--->\n",
    "start_line": 7800,
    "example": 573,
    "end_line": 7807
  },
  {
    "html": "<p>foo <?php echo $a; ?></p>\n",
    "section": "Raw HTML",
    "markdown": "foo <?php echo $a; ?>\n",
    "start_line": 7811,
    "example": 574,
    "end_line": 7815
  },
  {
    "html": "<p>foo <!ELEMENT br EMPTY></p>\n",
    "section": "Raw HTML",
    "markdown": "foo <!ELEMENT br EMPTY>\n",
    "start_line": 7819,
    "example": 575,
    "end_line": 7823
  },
  {
    "html": "<p>foo <![CDATA[>&<]]></p>\n",
    "section": "Raw HTML",
    "markdown": "foo <![CDATA[>&<]]>\n",
    "start_line": 7827,
    "example": 576,
    "end_line": 7831
  },
  {
    "html": "<a href=\"&ouml;\">\n",
    "section": "Raw HTML",
    "markdown": "<a href=\"&ouml;\">\n",
    "start_line": 7835,
    "example": 577,
    "end_line": 7839
  },
  {
    "html": "<a href=\"\\*\">\n",
    "section": "Raw HTML",
    "markdown": "<a href=\"\\*\">\n",
    "start_line": 7843,
    "example": 578,
    "end_line": 7847
  },
  {
    "html": "<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n",
    "section": "Raw HTML",
    "markdown": "<a href=\"\\\"\">\n",
    "start_line": 7849,
    "example": 579,
    "end_line": 7853
  },
  {
    "html": "<p>foo<br />\nbaz</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo  \nbaz\n",
    "start_line": 7862,
    "example": 580,
    "end_line": 7868
  },
  {
    "html": "<p>foo<br />\nbaz</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo\\\nbaz\n",
    "start_line": 7873,
    "example": 581,
    "end_line": 7879
  },
  {
    "html": "<p>foo<br />\nbaz</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo       \nbaz\n",
    "start_line": 7883,
    "example": 582,
    "end_line": 7889
  },
  {
    "html": "<p>foo<br />\nbar</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo  \n     bar\n",
    "start_line": 7893,
    "example": 583,
    "end_line": 7899
  },
  {
    "html": "<p>foo<br />\nbar</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo\\\n     bar\n",
    "start_line": 7901,
    "example": 584,
    "end_line": 7907
  },
  {
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "section": "Hard line breaks",
    "markdown": "*foo  \nbar*\n",
    "start_line": 7912,
    "example": 585,
    "end_line": 7918
  },
  {
    "html": "<p><em>foo<br />\nbar</em></p>\n",
    "section": "Hard line breaks",
    "markdown": "*foo\\\nbar*\n",
    "start_line": 7920,
    "example": 586,
    "end_line": 7926
  },
  {
    "html": "<p><code>code span</code></p>\n",
    "section": "Hard line breaks",
    "markdown": "`code  \nspan`\n",
    "start_line": 7930,
    "example": 587,
    "end_line": 7935
  },
  {
    "html": "<p><code>code\\ span</code></p>\n",
    "section": "Hard line breaks",
    "markdown": "`code\\\nspan`\n",
    "start_line": 7937,
    "example": 588,
    "end_line": 7942
  },
  {
    "html": "<p><a href=\"foo  \nbar\"></p>\n",
    "section": "Hard line breaks",
    "markdown": "<a href=\"foo  \nbar\">\n",
    "start_line": 7946,
    "example": 589,
    "end_line": 7952
  },
  {
    "html": "<p><a href=\"foo\\\nbar\"></p>\n",
    "section": "Hard line breaks",
    "markdown": "<a href=\"foo\\\nbar\">\n",
    "start_line": 7954,
    "example": 590,
    "end_line": 7960
  },
  {
    "html": "<p>foo\\</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo\\\n",
    "start_line": 7966,
    "example": 591,
    "end_line": 7970
  },
  {
    "html": "<p>foo</p>\n",
    "section": "Hard line breaks",
    "markdown": "foo  \n",
    "start_line": 7972,
    "example": 592,
    "end_line": 7976
  },
  {
    "html": "<h3>foo\\</h3>\n",
    "section": "Hard line breaks",
    "markdown": "### foo\\\n",
    "start_line": 7978,
    "example": 593,
    "end_line": 7982
  },
  {
    "html": "<h3>foo</h3>\n",
    "section": "Hard line breaks",
    "markdown": "### foo  \n",
    "start_line": 7984,
    "example": 594,
    "end_line": 7988
  },
  {
    "html": "<p>foo\nbaz</p>\n",
    "section": "Soft line breaks",
    "markdown": "foo\nbaz\n",
    "start_line": 7998,
    "example": 595,
    "end_line": 8004
  },
  {
    "html": "<p>foo\nbaz</p>\n",
    "section": "Soft line breaks",
    "markdown": "foo \n baz\n",
    "start_line": 8009,
    "example": 596,
    "end_line": 8015
  },
  {
    "html": "<p>hello $.;'there</p>\n",
    "section": "Textual content",
    "markdown": "hello $.;'there\n",
    "start_line": 8028,
    "example": 597,
    "end_line": 8032
  },
  {
    "html": "<p>Foo χρῆν</p>\n",
    "section": "Textual content",
    "markdown": "Foo χρῆν\n",
    "start_line": 8034,
    "example": 598,
    "end_line": 8038
  },
  {
    "html": "<p>Multiple     spaces</p>\n",
    "section": "Textual content",
    "markdown": "Multiple     spaces\n",
    "start_line": 8042,
    "example": 599,
    "end_line": 8046
  }
];
export = tests;