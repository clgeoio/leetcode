# 424. Longest Repeating Character Replacement

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 10^4.

Example 1

```
Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
```

Example 2

```
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

## First Thoughts

This question feels very similar to [/3-longest-substring-without-repeating-characters](3. Longest Substring Without Repeating Characters) so using a sliding window seems like a good approach.

```
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
```
