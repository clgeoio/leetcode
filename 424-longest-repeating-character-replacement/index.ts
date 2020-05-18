function characterReplacement(s: string, k: number) {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let maxCount = 0;
  const map: Map<string, number> = new Map();

  while (end < s.length) {
    map.set(s[end], get(s[end]) + 1);
    maxCount = Math.max(maxCount, get(s[end]));

    // end - start + 1 is the length of the string, (zero indexed)
    // maxCount is the number of times the character at end occurs
    if (end - start + 1 - maxCount > k) {
      map.set(s[start], get(s[start]) - 1);
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;

  function get(key: string) {
    return map.get(key) || 0;
  }
}

export { characterReplacement };
