function maxSatisfied(customers: number[], grumpy: number[], X: number) {
  let baseLine = 0;
  let start = 0;
  let end = 0;
  let max = 0;

  for (let i = 0; i < customers.length; i++) {
    baseLine += (!grumpy[i] ? 1 : 0) * customers[i];
  }

  while (end < customers.length) {
    if (grumpy[end]) {
      baseLine += customers[end];
    }
    end++;
    if (end - start > X) {
      if (grumpy[start]) {
        baseLine -= customers[start];
      }
      start++;
    }
    max = Math.max(baseLine, max);
  }

  return max;
}

export { maxSatisfied };
