// Parts sums - calculate suffix sums of an array
function partsSums(ls = []) {
  let result = [];
  ls.reverse();
  let sum = 0;
  result.push(sum);
  for (let i = 0; i < ls.length; i++) {
    sum += ls[i];
    result.push(sum);
  }
  return result.reverse();
}

console.log(partsSums([1, 2, 3, 4, 5, 6]));