// Search array - find index of query array in 2D array
var searchArray = function (arrayToSearch, query) {
  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("Query must be array with length exactly 2");
  }
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (!Array.isArray(arrayToSearch[i]) || arrayToSearch[i].length !== 2) {
      throw new Error("Every sub element must be array with length exactly 2");
    }
  }
  let result = -1;
  const flatedArray = arrayToSearch.flat();
  console.log(flatedArray);
  for (let i = 0; i < flatedArray.length; i += 2) {
    if (flatedArray[i] === query[0] && flatedArray[i + 1] === query[1]) {
      result = i / 2;
      break;
    }
  }
  return result;
};

var bigArray = [
  [2, 3],
  [7, 2],
  [9, 20],
  [1, 2],
  [7, 2],
  [45, 4],
  [7, 87],
  [4, 5],
  [2, 7],
  [6, 32],
];

console.log(searchArray(bigArray, [9, 20]));