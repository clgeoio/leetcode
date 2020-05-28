class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

function oddEvenList(head: ListNode | null) {
  if (!head) {
    return head;
  }
  let odd = head;
  let even = head;
  const firstEven = head.next;

  while (odd.next !== null) {
    even = odd.next;
    odd.next = even.next;
    if (odd.next) {
      even.next = odd.next.next;
      odd = odd.next;
    }
  }
  odd.next = firstEven;
  return head;
}

export { ListNode, oddEvenList };
