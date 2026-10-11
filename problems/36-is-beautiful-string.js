// Is beautiful string - check if string is "beautiful" (letter counts don't increase)
function isBeautifulString(s) {
  const chars = new Map([
    ["a", 0],
    ["b", 0],
    ["c", 0],
    ["d", 0],
    ["e", 0],
    ["f", 0],
    ["g", 0],
    ["h", 0],
    ["i", 0],
    ["j", 0],
    ["k", 0],
    ["l", 0],
    ["m", 0],
    ["n", 0],
    ["o", 0],
    ["p", 0],
    ["q", 0],
    ["r", 0],
    ["s", 0],
    ["t", 0],
    ["u", 0],
    ["v", 0],
    ["w", 0],
    ["x", 0],
    ["y", 0],
    ["z", 0],
  ]);
  for (let i = 0; i < s.length; i++) {
    let count = chars.get(s[i]);
    chars.set(s[i], ++count);
  }
  let arrChars = Array.from(chars);
  for (let i = 1; i < arrChars.length; i++) {
    if (arrChars[i][1] > arrChars[i - 1][1]) return false;
  }
  return true;
}

console.log(isBeautifulString("bbbaacdafe"));
console.log(isBeautifulString("aabbb"));
console.log(isBeautifulString("bbc"));
console.log(isBeautifulString("bbbaa"));
console.log(isBeautifulString("bbbaaa"));