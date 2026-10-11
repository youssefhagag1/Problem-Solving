// Sum consecutives - sum consecutive duplicate numbers
function sumConsecutives(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        sum += arr[j];
      } else {
        i = j - 1;
        break;
      }
    }
    result.push(sum);
  }
  return result;
}