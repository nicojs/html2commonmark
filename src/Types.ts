export interface WalkingStep {
    domNode: Node;
    isEntering: boolean;
}

export interface Html2AstOptions {
    rawHtmlElements?: Array<string>;
    ignoredHtmlElements?: Array<string>;
    interpretUnknownHtml?: boolean;
}

export interface Ast2MarkdownOptions{
    preserveSoftbreaks?: boolean;
    preserveHardbreaks?: boolean;
}

export interface HtmlParser {
    parse(html: string): HTMLElement;
}