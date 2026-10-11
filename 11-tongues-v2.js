// Tongues v2 - alternative implementation using vowel/consonant arrays
let tongues = function (str) {
  const newStr = str.toLowerCase();
  let result = "";
  let finalStr = "";
  const vowels = ["a", "i", "y", "e", "o", "u"];
  const consonants = [
    "b",
    "k",
    "x",
    "z",
    "n",
    "h",
    "d",
    "c",
    "w",
    "g",
    "p",
    "v",
    "j",
    "q",
    "t",
    "s",
    "r",
    "l",
    "m",
    "f",
  ];
  for (let i = 0; i < newStr.length; i++) {
    let shift = 10;
    if (vowels.includes(newStr[i])) {
      shift = 3;
      let next = vowels.indexOf(newStr[i]) + shift;
      if (next > vowels.length - 1) {
        next %= vowels.length;
      }
      result += vowels[next];
    } else if (consonants.includes(newStr[i])) {
      let next = consonants.indexOf(newStr[i]) + shift;
      if (next > consonants.length - 1) {
        next %= consonants.length;
      }
      result += consonants[next];
    } else {
      result += newStr[i];
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      finalStr += result[i].toUpperCase();
    } else {
      finalStr += result[i];
    }
  }
  return finalStr;
};

console.log(tongues("Ita dotf ni dyca nsaw ecc."));