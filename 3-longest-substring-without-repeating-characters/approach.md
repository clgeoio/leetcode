# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

## First Thoughts

Could approach this like a two pointer problem
One starts at the begining, then the fast moves until a repeated character is found.
When found, the slow moves to where the repeat is.
This feels like it would be O(n) time and O(n) space.
O(n) to move the pointers through the array and O(n) to create a hashmap to check if include.

```
function lengthOfLongestSubstring(s: string) {
  if (s.length < 2) {
    return s.length;
  }

  let slow = 0;
  let fast = 1;
  let maxLen = 0;
  let hash = new Set();
  hash.add(s[slow]);

  while (fast < s.length) {
    if (hash.has(s[fast])) {
      maxLen = Math.max(hash.size, maxLen);
      slow = fast;
      hash.clear();
      hash.add(s[slow]);
    } else {
      hash.add(s[fast]);
    }
    fast++;
  }
  maxLen = Math.max(hash.size, maxLen);
  return maxLen;
}
```

The code works as follows:
Set up two pointers `slow` and `fast` and point them at index 0 and 1 (not the guard of length < 2)

Create a new [Set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) (you can just use a plain object, but I prefer the syntax of `.has` and `.clear`)

We add the value at slow before moving in to the loop to give us something to compare to.

### The Catch

The code above has a bug in it, points if you can guess what it is.
It works for test cases:

```
  it("abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).eq(3);
  });

  it("bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).eq(1);
  });

  it("pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).eq(3);
  });

  it("aaaabcde", () => {
    expect(lengthOfLongestSubstring("aaaabcde")).eq(5);
  });
```

However, it fails for

```
  it("dvdf", () => {
    expect(lengthOfLongestSubstring("dvdf")).eq(3);
  });

  it("anviaj", () => {
    expect(lengthOfLongestSubstring("anviaj")).eq(5);
  });
```

Because the fast pointer is always incremented - we miss adding values to the hash. Second time around, I changed the slow pointer to increment by one and bought the fast pointer back to the slow pointer.

```
function lengthOfLongestSubstring(s) {
  if (s.length < 2) {
    return s.length;
  }

  let slow = 0;
  let fast = 1;
  let maxLen = 0;
  let hash = new Set();
  hash.add(s[slow]);

  while (fast < s.length) {
    if (hash.has(s[fast])) {
      maxLen = Math.max(hash.size, maxLen);
      slow++;
      fast = slow;
      hash.clear();
      hash.add(s[slow]);
    } else {
      hash.add(s[fast]);
    }
    fast++;
  }
  maxLen = Math.max(hash.size, maxLen);
  return maxLen;
}

```

## Optimization

Clearing the hash and setting the fast pointer back to the slow is not that great. This is O(n^2).
Instead, we could keep the content of the hash and remove the slow pointer value then bump the slow pointer up one.
I've renamed the slow and fast pointers to left and right.

```
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
```

This solution passes all the same tests and now runs in O(n) time instead.
