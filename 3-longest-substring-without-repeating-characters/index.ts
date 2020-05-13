function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let hash = new Set();

  while (right < s.length) {
    if (hash.has(s[right])) {
      hash.delete(s[left]);
      left++;
    } else {
      hash.add(s[right]);
      maxLen = Math.max(hash.size, maxLen);
      right++;
    }
  }
  return maxLen;
}

export { lengthOfLongestSubstring };
