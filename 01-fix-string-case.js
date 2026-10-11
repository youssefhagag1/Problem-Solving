// Fix string case - return uppercase if more uppercase letters, lowercase if more lowercase
function solve(s) {
  const count = {
    lowercase: 0,
    uppercase: 0,
  };
  for (let i = 0; i < s.length; i++) {
    s[i].toLowerCase() === s[i] ? count.lowercase++ : count.uppercase++;
  }
  return count.uppercase > count.lowercase ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("COde"));