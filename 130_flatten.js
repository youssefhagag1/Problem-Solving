function flatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
       flatten(arr[i], result);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, [4, [5]]]]]));

