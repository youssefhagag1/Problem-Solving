// Sum of non-prime factors - sum all divisors (excluding 1 and the number itself) for non-prime numbers from n down to 3
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function newFunction(n) {
  let result = 0;
  for (let i = n; i >= 3; i--) {
    if (!isPrime(i)) {
      let sum = 0;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) sum += j;
      }
      result += sum;
    }
  }
  return result;
}

console.log(newFunction(12));
console.log(newFunction(24));