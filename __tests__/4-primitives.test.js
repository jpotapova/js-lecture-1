var primitives = require("../exercises/4-primitives.js");

describe("Primitives exercise code", () => {
  it("should output input1 in uppercase", () => {
    expect(primitives.result1).toBe("ABCDEF");
  });

  it("should output the answer whether date 1 is later than date 2", () => {
    expect(primitives.result2).toBe(true);
  });
});
