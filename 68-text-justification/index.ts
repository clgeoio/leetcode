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

export { fullJustify, splitWords, addSpaces };
