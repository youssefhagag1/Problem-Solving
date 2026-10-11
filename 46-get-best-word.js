// Get best word - find word with highest point value from a points array
function getBestWord(points, words) {
  const chars = {};
  const words_weights = {};
  const gretest_weights = [];
  for (let i = 65, p = 0; i <= 90; i++, p++) {
    let char = String.fromCharCode(i);
    chars[char] = points[p];
  }

  for (let i = 0; i < words.length; i++) {
    let word_weight = 0;
    for (let j = 0; j < words[i].length; j++) {
      word_weight += chars[words[i][j]];
    }
    words_weights[i] = word_weight;
  }
  console.log(words_weights);
  let max_weight = Math.max(...Object.values(words_weights));
  for (let word_weight in words_weights) {
    if (words_weights[word_weight] === max_weight) {
      gretest_weights.push(Number(word_weight));
    }
  }
  let smaller = gretest_weights[0];
  for (let j = i + 1; j < gretest_weights.length - 1; j++) {
    if (words[smaller].length > words[gretest_weights[j]].length) {
      smaller = gretest_weights[j];
    }
  }
  return smaller;
}