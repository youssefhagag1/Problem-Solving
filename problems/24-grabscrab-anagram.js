// Grabscrab - find anagrams of a word in a dictionary
function grabscrab(anagram, dictionary) {
  let result = [];
  let anagramFreq = {};
  let dictionaryFreq = [];
  for (let i = 0; i < anagram.length; i++) {
    if (anagramFreq[anagram[i]]) {
      anagramFreq[anagram[i]]++;
    } else {
      anagramFreq[anagram[i]] = 1;
    }
  }

  for (let i = 0; i < dictionary.length; i++) {
    let freq = {};
    let word = dictionary[i];
    for (let j = 0; j < word.length; j++) {
      if (freq[word[j]]) {
        freq[word[j]]++;
      } else {
        freq[word[j]] = 1;
      }
    }
    dictionaryFreq.push(freq);
  }

  for (let i = 0; i < dictionaryFreq.length; i++) {
    let flag = true;
    for (let c in anagramFreq) {
      if (
        anagramFreq[c] !== dictionaryFreq[i][c] ||
        anagram.length !== dictionary[i].length
      ) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      result.push(dictionary[i]);
    }
  }

  return result;
}

console.log(grabscrab("hi", ["al", "yhqjyoi"]));
console.log(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]));