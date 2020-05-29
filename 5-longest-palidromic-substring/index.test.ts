import { expect } from "chai";
import { longestPalidrome } from ".";

describe("longestPalidrome", () => {
  it("babad", () => {
    expect(longestPalidrome("babad")).eq("bab");
  });

  it("cbbd", () => {
    expect(longestPalidrome("cbbd")).eq("bb");
  });

  it("dracecark", () => {
    expect(longestPalidrome("dracecark")).eq("racecar");
  });
});
