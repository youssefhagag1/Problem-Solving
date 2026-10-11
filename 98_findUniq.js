function findUniq(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) count[arr[i]]++;
    else count[arr[i]] = 1;
  }
  for (let i in count) {
    if (count[i] === 1) return +i;
  }
}

