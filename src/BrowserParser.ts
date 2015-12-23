
export = class BrowserParser implements HtmlParser{
    
    public parse(html: string): HTMLElement {
        let div = document.createElement('custom-root');
        div.innerHTML = html;
        return div;
    }
}