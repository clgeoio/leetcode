import { fullJustify, splitWords, addSpaces } from "./index";
import { expect } from "chai";

describe("fullJustify", () => {
  it("case 1", () => {
    const ret = fullJustify(
      ["What", "must", "be", "acknowledgment", "shall", "be"],
      16
    );
    expect(JSON.stringify(ret)).eq(
      JSON.stringify([
        "What   must   be",
        "acknowledgment  ",
        "shall be        ",
      ])
    );
  });
  it("case 3", () => {
    const ret = fullJustify(
      [
        "Science",
        "is",
        "what",
        "we",
        "understand",
        "well",
        "enough",
        "to",
        "explain",
        "to",
        "a",
        "computer.",
        "Art",
        "is",
        "everything",
        "else",
        "we",
        "do",
      ],
      20
    );
    expect(JSON.stringify(ret)).eq(
      JSON.stringify([
        "Science  is  what we",
        "understand      well",
        "enough to explain to",
        "a  computer.  Art is",
        "everything  else  we",
        "do                  ",
      ])
    );
  });
});

describe("splitWords", () => {
  it("splits words correctly", () => {
    const ret = splitWords(
      ["This", "is", "an", "example", "of", "text", "justification."],
      16
    );

    expect(JSON.stringify(ret)).eq(
      JSON.stringify([
        ["This", "is", "an"],
        ["example", "of", "text"],
        ["justification."],
      ])
    );
  });

  it('["What","must","be","acknowledgment","shall","be"]', () => {
    const ret = splitWords(
      ["What", "must", "be", "acknowledgment", "shall", "be"],
      16
    );

    expect(JSON.stringify(ret)).eq(
      JSON.stringify([
        ["What", "must", "be"],
        ["acknowledgment"],
        ["shall", "be"],
      ])
    );
  });
});

describe("addSpaces", () => {
  it("works", () => {
    const ret = addSpaces(
      [["What", "must", "be"], ["acknowledgment"], ["shall", "be"]],
      16
    );

    expect(JSON.stringify(ret)).eq(
      JSON.stringify([
        "What   must   be",
        "acknowledgment  ",
        "shall be        ",
      ])
    );
  });
});
