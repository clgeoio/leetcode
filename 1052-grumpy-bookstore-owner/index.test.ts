import { maxSatisfied } from "./index";
import { expect } from "chai";

describe("maxSatisfied", () => {
  it("", () => {
    expect(
      maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
    ).eq(16);
  });

  it("has X equal to the array size", () => {
    expect(maxSatisfied([1, 1, 1], [1, 1, 1], 3)).eq(3);
  });

  it("has X equal to one", () => {
    expect(maxSatisfied([1, 1, 1], [1, 1, 1], 1)).eq(1);
  });

  it("has X equal to more than array size", () => {
    expect(maxSatisfied([1, 1, 1], [1, 1, 1], 5)).eq(3);
  });
});
