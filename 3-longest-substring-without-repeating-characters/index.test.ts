import { lengthOfLongestSubstring } from "./index";
import { expect } from "chai";

describe("lengthOfLongestSubstring", () => {
  it("abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).eq(3);
  });

  it("bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).eq(1);
  });

  it("pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).eq(3);
  });

  it("aaaabcde", () => {
    expect(lengthOfLongestSubstring("aaaabcde")).eq(5);
  });

  it("dvdf", () => {
    expect(lengthOfLongestSubstring("dvdf")).eq(3);
  });

  it("anviaj", () => {
    expect(lengthOfLongestSubstring("anviaj")).eq(5);
  });
});
