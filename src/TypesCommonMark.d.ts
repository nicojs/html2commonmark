
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
        destination: any;
        title: string;
        info: any;
        level: any;
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
    }

    export class Parser {
       constructor(options?: any);
       parse(input: string): Node;
    }

}

declare module 'commonmark' {
    export = commonmark;
}