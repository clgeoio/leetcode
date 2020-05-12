3. Longest Substring Without Repeating Characters
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
