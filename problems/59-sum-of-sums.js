// Sum of sums - calculate sum of sums using BigInt formula
function sumOfSums(number) {
  const sum_z = (number * (number + 1n) * (number + 2n)) / 6n;
  return (sum_z * (sum_z + 1n)) / 2n;
}

console.log(sumOfSums(100n));