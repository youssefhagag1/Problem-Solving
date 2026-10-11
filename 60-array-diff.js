// Array diff - remove all values from array a that are present in array b
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

function arrayDiffVeryFast(a, b) {
  let aIndexes = {};
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (aIndexes[a[i]]) {
      aIndexes[a[i]].push(i);
    } else {
      aIndexes[a[i]] = [i];
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (aIndexes[b[i].toString()]) {
      delete aIndexes[b[i].toString()];
    }
  }
  let indexFlated = Object.values(aIndexes).flat().sort((a, b) => a - b);
  for (let i = 0; i < indexFlated.length; i++) {
    result.push(a[indexFlated[i]]);
  }
  return result;
}

console.log(
  arrayDiffVeryFast([1, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5])
);