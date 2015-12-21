interface WalkingStep {
    domNode: Node;
    isEntering: boolean;
}

interface NodeConversion {
    execute(container?: commonmark.Node): commonmark.Node;
}

interface Html2MarkdownConversionOptions {
    rawHtmlElements?: Array<string>;
    ignoredHtmlElements?: Array<string>;
    interpretUnknownHtml?: boolean;
}

interface HtmlParser {
    parse(html: string): HTMLElement;
}