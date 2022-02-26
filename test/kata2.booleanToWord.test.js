const { booleanToWord } = require("../src");

describe("booleanToWord falsy values", () => {
  it("return No when false is passed in", () => {
    expect(booleanToWord(false)).toBe("No");
  });
  it("return No when negative numebr is passed in", () => {
    expect(booleanToWord(-0)).toBe("No");
  });
  it("return No when undefined is passed in", () => {
    expect(booleanToWord(undefined)).toBe("No");
  });
  it("return No when double quotes are passed in", () => {
    expect(booleanToWord("")).toBe("No");
  });
});

describe("booleanToWord truthy values", () => {
  // how do we create specs again???
  it("return Yes when true is passed in", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  it("return Yes when positive number is passed in", () => {
    expect(booleanToWord(1)).toBe("Yes");
  });
  it("return Yes when Infitinty is passed in", () => {
    expect(booleanToWord(Infinity)).toBe("Yes");
  });
  it("return Yes when value between double quotes are passed in", () => {
    expect(booleanToWord("false")).toBe("Yes");
  });
});
