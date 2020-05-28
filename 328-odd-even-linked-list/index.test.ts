import { ListNode, oddEvenList } from "./index";
import { expect } from "chai";

describe("oddEvenList", () => {
  it("sorts list of 1", () => {
    const list = new ListNode(1);
    const ret = oddEvenList(list);
    expect(`${ret.val}`).eq("1");
  });

  it("sorts list of 3", () => {
    const list = createList([1, 2, 3]);
    const ret = oddEvenList(list);
    expect(`${ret.val}->${ret.next.val}->${ret.next.next.val}`).eq("1->3->2");
  });

  it("sorts list of 4", () => {
    const list = createList([1, 2, 3, 4]);
    const ret = oddEvenList(list);
    expect(
      `${ret.val}->${ret.next.val}->${ret.next.next.val}->${ret.next.next.next.val}`
    ).eq("1->3->2->4");
  });

  it("sorts list of 5", () => {
    const list = createList([1, 2, 3, 4, 5]);
    const ret = oddEvenList(list);
    expect(
      `${ret.val}->${ret.next.val}->${ret.next.next.val}->${ret.next.next.next.val}->${ret.next.next.next.next.val}`
    ).eq("1->3->5->2->4");
  });
});

function createList(values: number[]) {
  if (values.length === 0) {
    return null;
  }
  const v = values.shift();
  return new ListNode(v, createList(values));
}
