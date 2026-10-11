// Missing and duplicate - find missing number and duplicate in array
function solution(array) {
  var missing = 0,
    duplicate = 0;
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[0] != 1) missing = 1;
    else if (
      array[i + 1] - array[i] !== 1 &&
      (array[i + 1] !== array[i] || array.length < 3)
    )
      missing = array[i + 1] - 1;
    if (array[i + 1] === array[i]) duplicate = array[i];
  }
  return [missing || array[array.length - 1] + 1, duplicate];
}

console.log(solution([2, 2]));
console.log(solution([2, 3, 1, 3, 4, 5]));