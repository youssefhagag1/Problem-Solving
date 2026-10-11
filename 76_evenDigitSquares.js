function evenDigitSquares(a, b) {
  let result = [];
  for (let i = Math.floor(Math.sqrt(a)); i <= Math.sqrt(b); i++) {
    let power = Math.pow(i , 2).toString();
    let isEven = true;
    for (let j = 0; j < power.length; j++) {
      if (Number(power[j]) % 2 !== 0) {
        isEven = false;
        break;
      }
    }
    if (isEven) result.push(+power);
  }
  return result;
}

console.log(evenDigitSquares(151396, 812618));

const isOdd = (num) => [...num.toString()].every((digit) => digit % 2 !== 0);

const isPrime = (num) => {
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      return false
    }
  }
  return true;
}

