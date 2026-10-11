// Row sum odd numbers - sum of odd numbers in a row of the number triangle
function rowSumOddNumbers(n) {
  const start = Math.pow(n, 2) - (n + 2) + 3;
  const end = Math.pow(n + 1, 2) - (n + 3) + 1;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers(1));