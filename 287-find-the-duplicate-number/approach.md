```
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
```

## First Thoughts

The limitations of the question guide us to a certain solution:

- Using constant space: no hashmaps or keeping track of each element
- Not modifying the array: no sorting

The array is filled with numbers 1...n so to prove if there are no duplicates, to total sum of the array must be 1 + 2 ... + n which is (n(n + 1)) / 2, however this won't tell us what number is duplicated.

Given that the numbers are from 1 to n, we can use bit manipulation to find the duplicates:

```typescript
function findDuplicate(nums: number[]) {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    const tmp = 1 << (nums[i] - 1);
    // tmp is our number represented by a bit flag:
    // 1 => 000001
    // 3 => 000100
    // 5 => 010000

    if (tmp & acc) {
      return nums[i];
    }

    acc |= tmp;
  }

```

However, this solution will be broken if we have n > 31

Floyd's Tortoise and Hare Algorithm.
