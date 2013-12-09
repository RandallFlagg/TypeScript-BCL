/// <reference path="../string.ts" />
module System.Text {
    export class StringBuilder {

        private _list: Array<string>;

        constructor(stringValue?: string) {
            this._list = new Array<string>();
            if (stringValue != null && stringValue !== "") {
                this._list.push(stringValue);
            }
        }
        
        public Append(value: string, repeatCount?: number): StringBuilder {
            if (repeatCount == null)
                repeatCount = 1;

            for (var i = 0; i < repeatCount; i++) {
                this._list.push(value);
            }
            return this;
        }

        public AppendFormat(value: string, ...args: Array<string>): StringBuilder {
            for (var i: number = 0; i < args.length; i++) {
                var find: string = "{" + i + "}";
                var regex: RegExp = new RegExp(this.escapeRegExp(find), "g");
                value = value.replace(regex, args[i]);
            }
            return this.Append(value);
        }

        public ToString(): string {
            var result: string = ""; 
            for (var i = 0; i < this._list.length; i++) {
                result += this._list[i];
            }

            return result;
        }

        private escapeRegExp(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
    }
} 