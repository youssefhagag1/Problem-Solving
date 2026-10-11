function countDigits(num) {
  if (num < 10) return 1;
  return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(0));
console.log(countDigits(10));
console.log(countDigits(5263));

