var System;
(function (System) {
    var String = (function () {
        function String() {
        }
        String.Format = function (s) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            for (var i = 0; i < args.length; i++) {
                var find = "{" + i + "}";
                var regex = new RegExp(this.escapeRegExp(find), "g");
                s = s.replace(regex, args[i]);
            }
            return s;
        };

        String.escapeRegExp = function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };
        return String;
    })();
    System.String = String;
})(System || (System = {}));
//# sourceMappingURL=String.js.map
