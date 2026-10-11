function oneCharDifference(s1, s2) {
  if (s1 === s2 || s1.length - s2.length > 1 || s2.length - s1.length > 1) return false;
  const count1 = {};
  const count2 = {};
  for (let i = 0; i < s1.length; i++) {
    count1[s1[i]] = ++count1[s1[i]] || 1;
  }
  for (let i = 0; i < s2.length; i++) {
    count2[s2[i]] = ++count2[s2[i]] || 1;
  }

  let div = 0;

  const [owner , compered] = s1.length > s2.length ? [count1 , count2] : [count2 , count1]

  for (let ch in owner) {
    const current = owner[ch];
    const val = compered[ch];
    if (val === undefined) {
      div += current;
    } else if (current !== val) {
      const max = Math.max(current, val);
      const min = Math.min(current, val);
      div += max - min;
    }
    if (div > 1) return false;
  }
  return true;
}

console.log(
  oneCharDifference(
    "ue1HfQXLxlAu10vKHnCkMMjHjFDbB3yF",
    "ue1HfQXLxlAu10vKHnCkMMjHjFDbB3y&*",
  )
);

