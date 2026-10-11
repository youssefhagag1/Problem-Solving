// Max fall - find the maximum difference where larger number comes before smaller
function maxFall(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let result_i = [];
    for (let j = i + 1; j < arr.length; j++) {
      result_i.push(arr[i] - arr[j]);
    }
    results.push(Math.max(...result_i));
  }
  return Math.max(...results);
}