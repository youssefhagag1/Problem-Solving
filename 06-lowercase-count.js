// Lowercase count - count lowercase letters in a string
function lowercaseCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) count++;
  }
  return count;
}