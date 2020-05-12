https://leetcode.com/problems/guess-number-higher-or-lower/

374. Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I'll tell you whether the number is higher or lower.
You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
1 : My number is higher
0 : Congrats! You got it!

ex:
Input: n = 10, pick = 6
Output: 6

## First Thoughts

Was rather confusing to understand how the question was to play out, but after some consideration the problem sounds like a [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
So, my first approach is to create an array of 1...n then binary search through it.

```
const haystack = [...new Array(n)].map((v, i) => i + 1);
function binarySearch(haystack){
    let left = 0;
    let right = haystack.length - 1;

    while(left <= right){
        const middle = Math.floor((left + right) / 2)
        const result = guess(haystack[middle]);

        if(result === -1){
            left = middle + 1;
        }
        else if(result === 1) {
            right = middle - 1;
        }
        else {
             return haystack[middle]
        }
    }
}
```

## Optimization

This creates an array and we use a binary search through the index. We don't actually need the array though to this can be changed to O(1) space.
Note that we change the `left === -1` to `left === 1` because previously we were changing the index, but now we want to change the value.

```
function binarySearch(n){
    let left = 1;
    let right = n;

    while(left <= right){
        const middle = Math.floor((left + right) / 2)
        const result = guess(middle);

        if(result === 1){
            left = middle + 1;
        }
        else if(result === -1) {
            right = middle - 1;
        }
        else {
             return middle
        }
    }
}
```
