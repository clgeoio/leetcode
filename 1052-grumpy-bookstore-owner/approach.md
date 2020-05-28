# Leetcode - 1052. Grumpy Bookstore Owner

Today, the bookstore owner has a store open for customers.length minutes. Every minute, some number of customers (customers[i]) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0. When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

## First Thoughts

The hint in the description gives the idea of using a sliding window.
If X is considered to be the window size, then we can calculate a baseline where the window is zero and then slide a window across the array adding the end most value and subtracting the start value.

To note:

- We can be sure that adding the values will always improve the maximum score as the number of customers cannot be negative.
- We only need to add (or remove) values when the window slides which occurred when `grumpy[i] === 1` as the baseline will already capture values where `grumpy[i] === 0`

```typescript
function maxSatisfied(customers: number[], grumpy: number[], X: number) {
  let baseLine = 0;
  let start = 0;
  let end = 0;
  let max = 0;

  // calculate the baseline value without use of the X superpower
  // O(n)
  for (let i = 0; i < customers.length; i++) {
    baseLine += (!grumpy[i] ? 1 : 0) * customers[i];
  }

  while (end < customers.length) {
    // add the next number of customers if the store owner was grumpy
    // otherwise we would be adding the same value twice.
    if (grumpy[end]) {
      baseLine += customers[end];
    }
    end++;

    // move window and subtract the previously added value.
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
```
