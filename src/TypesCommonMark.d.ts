
declare module commonmark {

    export interface WalkingStep {
        entering: boolean;
        node: Node;
    }

    export interface NodeWalker {
        current: Node;
        root: Node;
        entering: boolean;
        next(): WalkingStep;
        resumeAt(node: Node, entering?: boolean): void;
    }

    export interface Position extends Array<Array<number>> {
    }
    
    export interface ListData{
        type?: string,
        tight?: boolean,
        delimiter?: string,
        bulletChar?: string
    }

    export class Node {
        constructor(nodeType: string, sourcepos?: Position);
        isContainer: boolean;
        type: string;
        firstChild: Node;
        lastChild: Node;
        next: Node;
        prev: Node;
        parent: Node;
        sourcepos: Position;
        literal: string;
        destination: string;
        title: string;
        info: any;
        level: number;
        listType: any;
        listTight: any;
        listStart: any;
        listDelimiter: any;
        appendChild(child: Node): void;
        prependChild(child: Node): void;
        unlink(): void;
        insertAfter(sibling: Node): void;
        insertBefore(sibling: Node): void;
        walker(): NodeWalker;
        _listData: ListData;
    }

    export class Parser {
       constructor(options?: any);
       parse(input: string): Node;
    }
    
    export interface HtmlRenderingOptions extends XmlRenderingOptions{
        safe: boolean;
        
    }
    
    export class HtmlRenderer{
        constructor(options?: HtmlRenderingOptions)
        render(root: Node): string;
    }
    
    export interface XmlRenderingOptions{
        time?: boolean;
        sourcepos?: boolean;
    }
    
    export class XmlRenderer{
        constructor(options?: XmlRenderingOptions)
        render(root: Node): string;
    }

}

declare module 'commonmark' {
    export = commonmark;
}