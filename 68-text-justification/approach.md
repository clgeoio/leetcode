# 68. Text Justification

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

## First Thoughts

It would be a good idea to determine what groups of words will be in each line.
Loop through the list of words, adding a new word if words.length and the number of required spaces (words - 1) is less than or equal to maxWidth.

Then once words have been selected, determine the number of words and the required amount of spaces, divide by the gaps and add a space to the end of each word starting with the left.
For the last row, add all spaces to the last word.

```typescript
function fullJustify(words: string[], maxWidth: number) {
  const split = splitWords(words, maxWidth);
  return addSpaces(split, maxWidth);
}

function splitWords(words: string[], maxWidth: number): string[][] {
  const splits: string[][] = [[]];
  let splitCount = 0;
  let currentLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentLength + splits[splitCount].length + word.length <= maxWidth) {
      currentLength += word.length;
    } else {
      splitCount++;
      splits[splitCount] = [];
      currentLength = word.length;
    }
    splits[splitCount].push(word);
  }

  return splits;
}

function addSpaces(splitWords: string[][], maxWidth: number) {
  const spaced: string[] = [];
  for (let i = 0; i < splitWords.length - 1; i++) {
    const line = splitWords[i];
    const lineLength = countLineLength(line);
    let requiredSpaces = maxWidth - lineLength;

    if (line.length === 1) {
      line[0] += " ".repeat(requiredSpaces);
    } else {
      while (requiredSpaces) {
        for (let j = 0; j < line.length - 1; j++) {
          line[j] += " ";
          requiredSpaces--;
        }
      }
    }
    spaced.push(line.join(""));
  }

  // left justify last line
  let line = splitWords[splitWords.length - 1].join(" ");
  let requiredSpaces = maxWidth - line.length;
  spaced.push((line += " ".repeat(requiredSpaces)));

  return spaced;
}

function countLineLength(words: string[]) {
  let len = 0;
  for (let i = 0; i < words.length; i++) {
    len += words[i].length;
  }
  return len;
}

export { fullJustify, splitWords, addSpaces };
```

This is cool, but it actually this runs out of memory!
The issue is here:

```
  while (requiredSpaces) {
    for (let j = 0; j < words.length - 1; j++) {
      words[j] += " ";
      requiredSpaces--;
    }
  }
```

```typescript
function fullJustify(words: string[], maxWidth: number) {
  const split = splitWords(words, maxWidth);
  return addSpaces(split, maxWidth);
}

function splitWords(words: string[], maxWidth: number): string[][] {
  const splits: string[][] = [[]];
  let splitCount = 0;
  let currentLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentLength + splits[splitCount].length + word.length <= maxWidth) {
      currentLength += word.length;
    } else {
      splitCount++;
      splits[splitCount] = [];
      currentLength = word.length;
    }
    splits[splitCount].push(word);
  }
  return splits;
}

function addSpaces(splitWords: string[][], maxWidth: number) {
  const spaced: string[] = [];
  for (let i = 0; i < splitWords.length; i++) {
    const line = splitWords[i];
    if (line.length === 1 || i === splitWords.length - 1) {
      spaced.push(leftJustifyLine(line, maxWidth));
    } else {
      spaced.push(fullJustifyLine(line, maxWidth));
    }
  }
  return spaced;
}

function leftJustifyLine(words: string[], width: number) {
  let line = words.join(" ");
  return (line += " ".repeat(width - line.length));
}

function fullJustifyLine(words: string[], width: number) {
  const extraSpaces = width - words.join("").length;
  for (let i = 0; i < extraSpaces; i++) {
    const w = i % (words.length - 1);
    words[w] += " ";
  }

  return words.join("");
}
```
