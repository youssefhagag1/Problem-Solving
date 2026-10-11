function findLongestSubstring(str) {
  const unique = new Set();
  let count = 0;
  let maxSequance = 0;
  for (let i = 0; i < str.length; i++) {
    if (!unique.has(str[i])) {
      unique.add(str[i]);
      count++;
    } else {
      maxSequance = Math.max(count, maxSequance);
      count = 0;
      unique.clear();
    }
  }
  return maxSequance;
}

console.log(findLongestSubstring("abcdabcbb"));

