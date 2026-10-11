// Iterate pi - approximate pi using Leibniz formula until epsilon is reached
function iterPi(epsilon) {
  let sum = 1;
  let count = 1;
  let inc = 3;
  while (true) {
    if (count % 2 === 0) {
      sum += 1 / inc;
    } else {
      sum -= 1 / inc;
    }
    inc += 2;
    count++;
    let approximation = sum * 4;
    if (epsilon > Math.abs(approximation - Math.PI)) {
      return [count, Number(approximation.toFixed(10))];
    }
  }
}

console.log(iterPi(0.1));
console.log(iterPi(0.01));
console.log(iterPi(0.001));