function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const counts1 = new Map();
  const counts2 = new Map();

  for (let i = 0; i < arr1.length; i++) {
    counts1.set(arr1[i], counts1.get(arr1[i]) + 1 || 1);
    counts2.set(arr2[i], counts2.get(arr2[i]) + 1 || 1);
  }

  if (counts1.size !== counts2.size) return false;

  for (let [key, val] of counts1) {
    if (counts2.get(key) !== val) return false;
  }
  return true;
}

const arr3 = [1, 2, 3, 4];
const arr4 = [1, 2, 3, "4"];

console.log(arraysSimilar(arr4, arr3));

