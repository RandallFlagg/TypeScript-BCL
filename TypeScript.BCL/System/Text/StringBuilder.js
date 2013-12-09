var System;
(function (System) {
    /// <reference path="../string.ts" />
    (function (Text) {
        var StringBuilder = (function () {
            function StringBuilder(stringValue) {
                this._list = new Array();
                if (stringValue != null && stringValue !== "") {
                    this._list.push(stringValue);
                }
            }
            StringBuilder.prototype.Append = function (value, repeatCount) {
                if (repeatCount == null)
                    repeatCount = 1;

                for (var i = 0; i < repeatCount; i++) {
                    this._list.push(value);
                }
                return this;
            };

            StringBuilder.prototype.AppendFormat = function (value) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                for (var i = 0; i < args.length; i++) {
                    var find = "{" + i + "}";
                    var regex = new RegExp(this.escapeRegExp(find), "g");
                    value = value.replace(regex, args[i]);
                }
                return this.Append(value);
            };

            StringBuilder.prototype.ToString = function () {
                var result = "";
                for (var i = 0; i < this._list.length; i++) {
                    result += this._list[i];
                }

                return result;
            };

            StringBuilder.prototype.escapeRegExp = function (str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            };
            return StringBuilder;
        })();
        Text.StringBuilder = StringBuilder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=StringBuilder.js.map
