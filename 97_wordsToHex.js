function wordsToHex(words) {
  return words
    .split(" ")
    .map(
      (word) =>
        "#" +
        convertor(word[0]) +
        convertor(word[1]) +
        convertor(word[2]),
    );
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));

