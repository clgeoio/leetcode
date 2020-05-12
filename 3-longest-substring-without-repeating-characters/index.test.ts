import { lengthOfLongestSubstring } from "./index";
import { expect } from "chai";

describe("lengthOfLongestSubstring", () => {
  it("works", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).eq(3);
  });
});
