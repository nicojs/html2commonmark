
export = class Assign {
    
    // Object.Assign equivalent
    public static assign<T>(defaults: T, overrides: T): T {
        let actual = {};
        Object.keys(defaults).forEach((key) => actual[key] = defaults[key]);
        if (overrides) {
            Object.keys(overrides).forEach((key) => actual[key] = overrides[key]);
        }
        return <T>actual;
    }

    public static isAlpha(c: string) {
        return c && c.search(/[^A-Za-z\s]/) === -1;
    }

    public static isDigit(c: string): boolean {
        return /\d+/.test(c);
    }

    public static isSpace(c: string) {
        return /\s+/.test(c);
    }
}