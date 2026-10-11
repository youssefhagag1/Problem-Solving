// Delete Nth - remove occurrences beyond the Nth time
function deleteNth(arr, n) {
  const pureArr = [...new Set(arr)];
  const freq = {};
  const result = [];
  for (let i = 0; i < pureArr.length; i++) {
    freq[pureArr[i]] = n;
  }

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] !== 0) {
      result.push(arr[i]);
      freq[arr[i]]--;
    }
  }
  return result;
}