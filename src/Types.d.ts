interface WalkingStep {
    domNode: Node;
    isEntering: boolean;
}

interface NodeConversion {
	execute(container?: commonmark.Node): commonmark.Node;
}

interface Html2MarkdownConversionOptions {
	
}
