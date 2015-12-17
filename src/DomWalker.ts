import jsdom = require('jsdom');
import * as commonmark from 'commonmark';

class DomWalker {
    current: Node;
    root: Node;
    isEntering: boolean;
    constructor(root: Node) {
        this.current = root;
        this.root = root;
        this.isEntering = true;
    }

    isContainer(node: Node) {
        return node.hasChildNodes;
    }

    isElement(node: Node): node is HTMLElement {
        return node.nodeType === node.ELEMENT_NODE;
    }

    next(): WalkingStep {
        let current = this.current;
        let isEntering = this.isEntering;
        if (current === null) {
            return null;
        }
        this.moveNext(current, isEntering);
                
        return { isEntering: isEntering, domNode: current };
    }
    
    private moveNext(previous: Node, wasEntering: boolean){
        if (wasEntering) {
            if (previous.childNodes.length > 0) {
                this.current = previous.childNodes.item(0);
            } else {
                // stay on node but exit
                this.isEntering = false;
            }
        } else if (previous === this.root) {
            this.current = null;
        }else if (!previous.nextSibling) {
            this.current = previous.parentNode;
            this.isEntering = false;
        }else {
            this.current = previous.nextSibling;
            this.isEntering = true;
        }
    }

    resumeAt(node: Node, isEntering: boolean) {
        this.current = node;
        this.isEntering = !!isEntering;
    }
}
export = DomWalker;