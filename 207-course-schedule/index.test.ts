import { canFinish } from "./index";
import { expect } from "chai";

describe("canFinish", () => {
  it("numCourses = 2, prerequisites = [[1,0]]", () => {
    expect(canFinish(2, [[1, 0]])).eq(true);
  });

  it("numCourses = 2, prerequisites = [[1,0],[0,1]]", () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ])
    ).eq(false);
  });
});
