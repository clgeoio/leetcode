import { expect } from "chai";
import { lastStoneWeight } from "./lastStoneWeight";

describe("lastStoneWeight", () => {
  it("returns 0 if no stones remain", () => {
    expect(lastStoneWeight([1, 1])).eq(0);
  });

  it("returns the correct mass for many stones", () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).eq(1);
  });

  it("returns the correct mass for two stones", () => {
    expect(lastStoneWeight([10, 4])).eq(6);
  });
});
