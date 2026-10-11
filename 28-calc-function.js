// Calc function - sum f(n/i) for i=1 to n
function calc(n, f) {
  let sum = 0n;
  for (let i = 1n; i <= n / 2n; i++) {
    sum += f(n / i);
  }
  return sum + (n - n / 2n) * f(1n);
}

console.log(calc(5n, (x) => x));
console.log(calc(10n, (x) => x));
console.log(calc(4n, (x) => x * x));
console.log(calc(4n, (x) => x * 3n));