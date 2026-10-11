// Increasing sequence - filter array to keep only elements that form an increasing sequence
function increasingSequence(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i + 1] || Infinity) > arr[i] &&
      arr[i] > (result[result.length - 1] || -Infinity)
    ) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(increasingSequence([1, 1, 1, 2]));
console.log(increasingSequence([1, 100, 2, 3, 100, 5, 4]));
console.log(increasingSequence([1, 2, 3, 4, 5]));
console.log(increasingSequence([186, 186, 150, 200, 160, 130, 197, 220]));