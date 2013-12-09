/// <reference path="../../System/String.ts" />
/// <reference path="../../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../system/text/stringbuilder.ts" />

module UnitTest {

    describe("System.String", () => {

        it("String.Format should be equal", () => {
            var sut = System.String.Format("My name is {0} im {1} years old, and my fullname is {0} {2}", "Ronnie", "30", "Hegelund");
            var result = "My name is Ronnie im 30 years old, and my fullname is Ronnie Hegelund";
            expect(sut).toEqual(result);
        });

    });
}