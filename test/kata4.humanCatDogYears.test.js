const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("returns an array with elements 1, 15, 24 when 1 is passed in", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });
  it("returns an array with elements 2, 24, 24 when 1 is passed in", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });
  it("returns an array with elements 10, 56, 64 when 10 is passed in", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});
