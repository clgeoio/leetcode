// https://leetcode.com/problems/last-stone-weight/

function lastStoneWeight(stones: number[]) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => a - b);
    const h1 = stones.pop();
    const h2 = stones.pop();

    if (h1 > h2) {
      stones.push(h1 - h2);
    }
  }
  return stones.length === 1 ? stones[0] : 0;
}

export { lastStoneWeight };
