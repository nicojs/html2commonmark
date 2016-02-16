import {Html2AstOptions} from '../../src/Types';

export interface TestSpecOptions extends Html2AstOptions{
    testCompareHtmlOnly?: boolean;
    testExcluded?: boolean;
}

export interface OptionMap {
    [markdown: string]: TestSpecOptions;
}

let options: OptionMap = {
    '<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n': { rawHtmlElements: ['table', 'tbody', 'tr', 'td'] },
    ' <div>\n  *hello*\n         <foo><a>\n': { rawHtmlElements: ['#text', 'a', 'div'] },
    '</div>\n*foo*\n': { testCompareHtmlOnly: true },
    '<div>\n*foo*\n\n*bar*\n': { testCompareHtmlOnly: true },
    '<div id="foo"\n*hi*\n': { testCompareHtmlOnly: true },
    '<div class\nfoo\n': { testCompareHtmlOnly: true },
    '<div *???-&&&-<---\n*foo*\n': { testCompareHtmlOnly: true },
    '<div><a href="bar">*foo*</a></div>\n': { rawHtmlElements: ['div', 'a'] },
    '<div></div>\n``` c\nint x = 33;\n```\n': { testCompareHtmlOnly: true },
    '<a href="foo">\n*bar*\n</a>\n': { rawHtmlElements: ['div', 'a'] },
    '<i class="foo">\n*bar*\n</i>\n': { rawHtmlElements: ['i'] },
    '</ins>\n*bar*\n': { testCompareHtmlOnly: true },
    '<pre language="haskell"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n': { rawHtmlElements: ['pre', 'code'] },
    '<?php\n\n  echo \'>\';\n\n?>\n': { testCompareHtmlOnly: true },
    '<!DOCTYPE html>\n': { testCompareHtmlOnly: true },
    '  <!-- foo -->\n\n    <!-- foo -->\n': { testCompareHtmlOnly: true },
    '  <div>\n\n    <div>\n': { testCompareHtmlOnly: true },
    'Foo\n<a href="bar">\nbaz\n': { testExcluded: true },
    '<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n': { testCompareHtmlOnly: true },
    '<a href="/bar\/)">\n': { rawHtmlElements: ['a'] },
    '&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n': { testCompareHtmlOnly: true },
    '<a href="&ouml;&ouml;.html">\n': { rawHtmlElements: ['a'] },
    '<a href="`">`\n': { rawHtmlElements: ['a'] },
    '*<img src="foo" title="*"/>\n': { rawHtmlElements: ['img'] },
    '**<a href="**">\n': { rawHtmlElements: ['a'] },
    '__<a href="__">\n': { rawHtmlElements: ['a'] },
    '<a><bab><c2c>\n': { rawHtmlElements: ['a'] },
    '<a/><b2/>\n': { rawHtmlElements: ['a'] },
    '<a  /><b2\ndata="foo" >\n': { rawHtmlElements: ['a'] },
    '<a foo="bar" bam = \'baz <em>"</em>\'\n_boolean zoop:33=zoop:33 />\n': { testExcluded: true },
    '</a>\n</foo >\n': { testCompareHtmlOnly: true },
    'foo <!-- this is a\ncomment - with hyphen -->\n': { testCompareHtmlOnly: true },
    'foo <?php echo $a; ?>\n': { testCompareHtmlOnly: true },
    'foo <!ELEMENT br EMPTY>\n': { testCompareHtmlOnly: true },
    '<a href="&ouml;">\n': { rawHtmlElements: ['a'] },
    '<a href="\*">\n': { rawHtmlElements: ['a'] },
    '<a href="foo  \nbar">\n': { rawHtmlElements: ['a'] },
    '<a href="foo\\nbar">\n': { rawHtmlElements: ['a'] }
};

export default options;