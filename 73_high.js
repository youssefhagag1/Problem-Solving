function high(x) {
  x = x.split(" ");
  const score = {};
  for (let i = 0; i < x.length; i++) {
    let current = x[i];
    score[current] = 0;
    for (let j = 0; j < current.length; j++) {
      score[current] += current.charCodeAt(j) - 96;
    }
  }

  let maxLength = Object.values(score)[0];
  let maxWord = Object.keys(score)[0];
  for (let word in score) {
    if (score[word] > maxLength) {
      maxLength = score[word];
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(high("man i need a taxi up to ubud"));

