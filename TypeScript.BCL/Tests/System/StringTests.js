/// <reference path="../../System/String.ts" />
/// <reference path="../../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../system/text/stringbuilder.ts" />
var UnitTest;
(function (UnitTest) {
    describe("System.String", function () {
        it("String.Format should be equal", function () {
            var sut = System.String.Format("My name is {0} im {1} years old, and my fullname is {0} {2}", "Ronnie", "30", "Hegelund");
            var result = "My name is Ronnie im 30 years old, and my fullname is Ronnie Hegelund";
            expect(sut).toEqual(result);
        });
    });
})(UnitTest || (UnitTest = {}));
//# sourceMappingURL=StringTests.js.map
