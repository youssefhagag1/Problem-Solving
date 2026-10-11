// Find unique - find the unique element in an array where all others appear twice
function findUnique(numbers) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length - 1; i += 2) {
    if (numbers[i] !== numbers[i + 1]) return numbers[i];
  }
}