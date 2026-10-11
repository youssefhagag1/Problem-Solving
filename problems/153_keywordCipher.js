function keywordCipher(string, keyword) {
  string = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  keyword = [...new Set([...keyword, ...alphabet])].join("");
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += keyword[alphabet.indexOf(string[i])];
  }
  return result;
}
console.log(keywordCipher("hello", "wednesday"));

