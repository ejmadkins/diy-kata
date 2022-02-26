const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("checks that an array is returned", () => {
    expect(Array.isArray(numberToReversedDigits(12345))).toBe(true);
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });
});
