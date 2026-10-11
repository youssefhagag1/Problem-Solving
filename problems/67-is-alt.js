// Is alt - check if vowels and consonants alternate in a word
function isAlt(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let isVowels = vowels.includes(word[0]) ? true : false;
  for (let i = 1; i < word.length; i++) {
    let current = vowels.includes(word[i]) ? true : false;
    if (current === isVowels) return false;
    isVowels = current;
  }
  return true;
}