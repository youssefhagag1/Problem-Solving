function squareDigitsSequence(a0) {
  const arr = [a0];
  let sum = sumSquare(a0)
  while(!arr.includes(sum)){
    arr.push(sum);
    sum = sumSquare(sum);
  }
  return arr.length + 1;
}

console.log(squareDigitsSequence(16))

