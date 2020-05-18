import { characterReplacement } from "./index";
import { expect } from "chai";

describe("characterReplacement", () => {
  it("ABAB, 2", () => {
    expect(characterReplacement("ABAB", 2)).eq(4);
  });

  it("AABABBA, 1", () => {
    expect(characterReplacement("AABABBA", 1)).eq(4);
  });
});
