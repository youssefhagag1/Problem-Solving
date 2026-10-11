// Remove most frequent - remove most frequently occurring numbers from subarrays
function sc(arr = []) {
  const itemsCount = {};
  let max = 0;
  const flatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    flatedArr.push(...arr[i]);
  }
  const removeItems = [];
  for (let i = 0; i < flatedArr.length; i++) {
    if (!itemsCount[flatedArr[i]]) {
      itemsCount[flatedArr[i]] = 1;
    } else {
      itemsCount[flatedArr[i]]++;
    }
  }
  for (let item in itemsCount) {
    if (max < itemsCount[item]) max = itemsCount[item];
  }
  for (let item in itemsCount) {
    if (max === itemsCount[item]) removeItems.push(Number(item));
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (removeItems.includes(arr[i][j])) {
        arr[i].splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}