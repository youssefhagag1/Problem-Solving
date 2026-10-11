function onlyOddDigPrimes(n) {
  let result = [];
  for (let i = 3; i < n; i++) {
    if (!isOdd(i)) continue;
    if (isPrime(i)) result.push(i);
  }
  let current = n + 1;
  while(!isOdd(current) || !isPrime(current)){
    current++;
  }
  console.log(result)
  return [result.length , result[result.length - 1] , current];
}

console.log(onlyOddDigPrimes(20))

