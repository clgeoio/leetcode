function minTaps(n: number, ranges: number[]): number {
  const intervals = new Map<number, number>();
  // create intervals for 0 - n
  for (let i = 0; i <= n; i++) {
    const low = Math.max(0, i - ranges[i]);
    const high = Math.min(i + ranges[i], n);

    updateInterval(intervals, low, high);
  }
  return follow(intervals, 0, 0, 0, n);
}

function follow(
  intervals: Map<number, number>,
  tapCount: number,
  tap: number,
  furthest: number,
  max: number
) {
  // this means we've made our way back to zero, so there must be a gap
  if (tap === -1) {
    return -1;
  }

  if (!intervals.has(tap)) {
    return follow(intervals, tapCount, tap - 1, furthest, max);
  } else {
    const tapHigh = intervals.get(tap);
    // we have reached the end!
    if (tapHigh === max) {
      return tapCount + 1;
    } else if (tapHigh > furthest) {
      return follow(intervals, tapCount + 1, tapHigh, tapHigh, max);
    } else {
      return follow(intervals, tapCount, tap - 1, furthest, max);
    }
  }
}

function updateInterval(
  intervals: Map<number, number>,
  low: number,
  high: number
) {
  if (intervals.has(low)) {
    const v = intervals.get(low);
    if (v < high) {
      intervals.set(low, high);
    }
  } else {
    intervals.set(low, high);
  }
}

export { minTaps };
