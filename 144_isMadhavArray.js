function isMadhavArray(arr) {
  if (arr.length <= 2) return false;
  console.log(arr);
  let count = 2;
  const start = arr[0];
  const sums = [start];
  let sum = 0;
  let current = 0;
  for (let i = 1; i < arr.length; i++) {
    if (count === current) {
      if (sum != start) return false;
      count++;
      current = 0;
      sum = 0;
    }
    sum += arr[i];
    current++;
    if (i === arr.length - 1 && sum === start && count === current) {
      sums.push(sum);
      current = 0;
    };
  }
  return sums[sums.length - 1] === start && current === 0;
}

console.log(isMadhavArray([2 , 1 , 1 ]));

