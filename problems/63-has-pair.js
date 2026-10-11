// Has pair - check if any pair in array sums to a target value
function hasPair(arr, sum) {
  arr = [...new Set(arr)];
  let minuss = {};
  for (let i = 0; i < arr.length; i++) {
    minuss[arr[i]] = sum - arr[i];
  }

  for (let e in minuss) {
    let x = minuss[e];
    delete minuss[e];
    if (minuss[x]) return true;
  }
  return false;
}

console.log(hasPair([0, 1], 1)); //true