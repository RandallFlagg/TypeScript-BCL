module System {
    export class String {
        public static Format(s: string, ...args: Array<string>): string {
            for(var i:number = 0; i < args.length; i++)
            {
                var find: string = "{" + i + "}";
                var regex: RegExp = new RegExp( this.escapeRegExp(find), "g");
                s = s.replace(regex, args[i]);
            }
            return s;
        }
        
        private static escapeRegExp(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
    }
}