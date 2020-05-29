function longestPalidrome(s: string) {
  if (!s || s.length < 1) {
    return s;
  }

  function expandAroundCenter(s: string, start: number, end: number) {
    let left = start;
    let right = end;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  let maxSub = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = expandAroundCenter(s, i, i);
    const s2 = expandAroundCenter(s, i, i + 1);
    const sub = s1.length > s2.length ? s1 : s2;
    if (sub.length > maxSub.length) {
      maxSub = sub;
    }
  }

  return maxSub;
}

export { longestPalidrome };
