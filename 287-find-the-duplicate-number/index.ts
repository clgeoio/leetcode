function findDuplicate(nums: number[]) {
  // let acc = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   const tmp = 1 << (nums[i] - 1);

  //   if (tmp & acc) {
  //     return nums[i];
  //   }

  //   acc |= tmp;
  // }

  let slow = 0;
  let fast = 0;
  let start = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  while (true) {
    slow = nums[slow];
    start = nums[start];
    if (slow === start) {
      return slow;
    }
  }
}

export { findDuplicate };
