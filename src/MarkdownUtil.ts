import * as commonmark from 'commonmark';

export default class MarkDownUtil{
    private static INLINE_NODE_TYPES = ['Link', 'Text', 'Softbreak', 'Image', 'Code', 'Hardbreak', 'Html', 'Emph', 'Strong'];
    
    static isInline(node: commonmark.Node): boolean {
        return MarkDownUtil.INLINE_NODE_TYPES.indexOf(node.type) >= 0;
    }
}
