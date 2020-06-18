import { twoSum } from "./index";
import { expect } from "chai";

describe("twoSum", () => {
  it("[2, 7, 11, 15], 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).deep.eq([0, 1]);
  });

  it("[2, 7, 11, 15], 17", () => {
    expect(twoSum([2, 7, 11, 15], 17)).deep.eq([0, 3]);
  });

  it("[2, 7, 11, 15, 4, 22, 12], 17", () => {
    expect(twoSum([2, 7, 11, 15, 4, 22, 12], 34)).deep.eq([5, 6]);
  });
});
