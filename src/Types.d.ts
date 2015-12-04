interface WalkingStep {
    node: Node;
    isEntering: boolean;
}

interface NodeConversion{
    node?: commonmark.Node;
    content?: string;
}