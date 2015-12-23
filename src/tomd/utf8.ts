
class Utf8{
    static isalpha(c: string){
        return c.search(/[^A-Za-z\s]/) === -1;
    }    
    
    static isdigit(c: string): boolean{
        return /\d+/.test(c);
    }
    
    static isspace(c: string){
        return /\s+/.test(c);
    }
}

export = Utf8;