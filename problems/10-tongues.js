// Tongues - decode using vowel/consonant shifting
function tongues(code) {
  let result = "";
  for (let i = 0; i < code.length; i++) {
    const uni = code.charCodeAt(i);
    let char = code[i];
    if (uni >= 65 && uni <= 90) {
      let shift = 10;
      if (
        char === "A" ||
        char === "E" ||
        char === "O" ||
        char === "I" ||
        char === "U" ||
        char === "Y"
      ) {
        shift = 3;
      }
      let back = uni - shift;
      if (back < 65) {
        back = uni + 26 - shift;
      }
      result += String.fromCharCode(back);
    } else if (uni >= 97 && uni <= 122) {
      let shift = 10;
      if (
        char === "a" ||
        char === "e" ||
        char === "o" ||
        char === "i" ||
        char === "u" ||
        char === "y"
      ) {
        shift = 3;
      }
      let back = uni - shift;
      if (back < 97) {
        back = uni + 26 - shift;
      }
      result += String.fromCharCode(back);
    } else {
      result += code[i];
    }
  }
  return result;
}

console.log(tongues("Ita dotf ni dyca nsaw ecc."));