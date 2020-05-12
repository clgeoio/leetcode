function lengthOfLongestSubstring(s: string) {
  if (s.length < 2) {
    return s.length;
  }

  let slow = 0;
  let fast = 1;
  let maxLen = 0;
  let hash = new Set();
  hash.add(s[slow]);

  while (fast != s.length - 1) {
    if (hash.has(s[fast])) {
      hash = new Set();
      hash.add(s[slow]);
      maxLen = hash.size;
      slow = fast;
      fast++;
    } else {
      hash.add(s[fast]);
      fast++;
    }
  }
  return maxLen;
}

export { lengthOfLongestSubstring };
