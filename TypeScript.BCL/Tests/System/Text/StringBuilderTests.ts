/// <reference path="../../../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../system/text/stringbuilder.ts" />

module UnitTest {

    describe("System.Text.StringBuilder", () => {

        it("StringBuilder.ToString should be equal", () => {
            var sbl = new System.Text.StringBuilder();

            sbl.Append("My name is Ronnie ");
            sbl.Append("im 30 years old, and my fullname is Ronnie Hegelund");
            var sut = sbl.ToString();
            var result = "My name is Ronnie im 30 years old, and my fullname is Ronnie Hegelund";
            expect(sut).toEqual(result);
        });

    });
}