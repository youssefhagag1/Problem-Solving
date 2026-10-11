function wantedWords(n, m, forbid_let) {
  let result = [];
  let indexRemove = new Set();
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < forbid_let.length; i++) {
    for (let j = 0; j < wordList.length; j++) {
      if (wordList[j].includes(forbid_let[i])) {
        indexRemove.add(j);
      }
    }
  }

  for (let i = 0; i < wordList.length; i++) {
    let current = wordList[i];
    if(indexRemove.has(i)) continue;
    if (n + m !== current.length) continue;
    let volCount = 0;
    for(let j = 0 ; j <current.length ; j++){
        if(vowels.includes(current[j])) volCount++;
    }
    if(volCount + m === n + m) result.push(current);
  }
  return result;
}

const wordList = [
  "afterwards",
  "background",
  "photograph",
  "successful",
  "understand",
];

console.log(wantedWords(3, 7, ["m", "y"]));

