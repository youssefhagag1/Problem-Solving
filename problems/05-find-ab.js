// Find AB - find two numbers in array whose product equals c
function findAB(arr, c) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === c) {
        return (result = [arr[i], arr[j]]);
      }
    }
  }
  return result;
}