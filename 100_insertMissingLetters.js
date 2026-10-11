function insertMissingLetters(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const chars = new Set();
  for(let i = 0 ; i <str.length ; i++){
    result += str[i];
    if(!chars.has(str[i])){
      chars.add(str[i]);
      result += alphabet.slice(alphabet.indexOf(str[i]) + 1).toUpperCase();
    }
  }
  const regex = new RegExp(str.toUpperCase() , "g");
  console.log(regex);
  return result.replace(regex, "");
}

console.log(insertMissingLetters("hello"))

