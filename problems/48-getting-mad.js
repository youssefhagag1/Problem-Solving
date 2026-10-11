// Getting mad - find the minimum absolute difference between any two array elements
function gettingMad(array) {
  array.sort((a, b) => a - b);
  let min = Math.abs(array[0] - array[1]);
  if (min === 0) return min;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let current = Math.abs(array[i] - array[j]);
      if (min > current) {
        min = current;
      }
    }
  }
  return min;
}