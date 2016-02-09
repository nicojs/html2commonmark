import {HtmlParser} from './Types';

export default class BrowserParser implements HtmlParser{
    
    public parse(html: string): HTMLElement {
        let div = document.createElement('custom-root');
        div.innerHTML = html;
        return div;
    }
}