/// <reference path="../../../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../system/text/stringbuilder.ts" />
var UnitTest;
(function (UnitTest) {
    describe("System.Text.StringBuilder", function () {
        it("StringBuilder.ToString should be equal", function () {
            var sbl = new System.Text.StringBuilder();

            sbl.Append("My name is Ronnie ");
            sbl.Append("im 30 years old, and my fullname is Ronnie Hegelund");
            var sut = sbl.ToString();
            var result = "My name is Ronnie im 30 years old, and my fullname is Ronnie Hegelund";
            expect(sut).toEqual(result);
        });
    });
})(UnitTest || (UnitTest = {}));
//# sourceMappingURL=StringBuilderTests.js.map
