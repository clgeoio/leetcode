function twoSum(nums: number[], target: number) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(target - nums[i])) {
      return [hash.get(target - nums[i]), i];
    }
    hash.set(nums[i], i);
  }

  return [];
}

export { twoSum };
