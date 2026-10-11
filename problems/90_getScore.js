function getScore(n) {
  let prev = sum = 0;
  for(let i = 1 ; i <= n ; i++){
    sum += prev + 50;
    prev += 50
  }
  return sum;
}
console.log(getScore(5))

