const addCommas = require("./addCommas");

describe("#addCommas", () => {
    test("it is a function", () => {
        expect(typeof addCommas).toBe("function");
    });

    test("it works for different numbers", () => {
        expect(addCommas(1234)).toEqual("1,234");
        expect(addCommas(1000000)).toEqual("1,000,000");
        expect(addCommas(9876543210)).toEqual("9,876,543,210");
        expect(addCommas(6)).toEqual("6");
    });
    test("it works for negative numbers too", () => {
        expect(addCommas(-1234)).toEqual("-1,234");
        expect(addCommas(-1000000)).toEqual("-1,000,000");
        expect(addCommas(-6)).toEqual("-6");
    });
});
