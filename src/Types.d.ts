interface WalkingStep {
    domNode: Node;
    isEntering: boolean;
}

interface NodeConversion{
    node?: commonmark.Node;
    textContent?: string;
}