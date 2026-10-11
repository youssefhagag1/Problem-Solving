function calcOverlapTime(intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let total = 0;
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];

    if (currentStart <= end) {
      end = Math.max(end, currentEnd);
    } else {
      total += end - start;

      start = currentStart;
      end = currentEnd;
    }
  }

  total += end - start;

  return total;
}

