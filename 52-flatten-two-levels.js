// Flatten two levels - flatten array only two levels deep
function flattenTwoLevels(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push([...array[i].flat(Infinity)]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
let array = [1, [2, 3, [], [4, [], 5]]];
console.log(flattenTwoLevels(array));