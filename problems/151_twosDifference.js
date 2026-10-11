function twosDifference(input) {
  input.sort((a, b) => a - b);
  const result = [];
  const div = {};
  for (let i = 0; i < input.length; i++) {
    div[input[i]] = input[i] + 2;
  }
  for (let i in div) {
    if (div[i] in div) {
      result.push([+i, div[i]]);
      delete div[i];
    }
  }
  return result;
}

console.log(twosDifference([1, 23, 3, 4, 7]));

