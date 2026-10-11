// Duplicate encode - replace each character with "(" if unique, ")" if duplicate
function duplicateEncode(word) {
  word = word.toLowerCase();
  const count = {};
  let result = "";
  for (let i = 0; i < word.length; i++) {
    count[word[i]] ? count[word[i]]++ : (count[word[i]] = 1);
  }
  for (let i = 0; i < word.length; i++) {
    count[word[i]] > 1 ? (result += ")") : (result += "(");
  }
  return result;
}

console.log(duplicateEncode("youssef hagag"));
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));