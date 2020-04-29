import { minTaps } from ".";
import { expect } from "chai";

describe("minTaps", () => {
  it("should pass", () => {
    expect(minTaps(5, [3, 4, 1, 1, 0, 0])).to.eq(1);
  });
  it("should pass", () => {
    expect(minTaps(3, [0, 0, 0, 0])).to.eq(-1);
  });

  it("should pass", () => {
    expect(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1])).to.eq(3);
  });

  it("should pass", () => {
    expect(minTaps(8, [4, 0, 0, 0, 0, 0, 0, 0, 4])).to.eq(2);
  });

  it("should pass", () => {
    expect(minTaps(8, [4, 0, 0, 0, 4, 0, 0, 0, 4])).to.eq(1);
  });
});
