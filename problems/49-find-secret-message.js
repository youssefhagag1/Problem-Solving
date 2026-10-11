// Find secret message - extract words that appear more than once in a paragraph
function findSecretMessage(paragraph) {
  paragraph = paragraph
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .split(" ");
  let result_indexes = [];
  let exist = new Set();
  let result = "";
  for (let i = 0; i < paragraph.length; i++) {
    for (let j = i + 1; j < paragraph.length && !exist.has(paragraph[i]); j++) {
      if (paragraph[i] === paragraph[j]) {
        result.push(j);
        exist.add(paragraph[i]);
      }
    }
  }
  result_indexes.sort((a, b) => a - b);
  for (let i = 0; i < result_indexes.length; i++) {
    result += paragraph[result_indexes[i]];
  }
  return result;
}