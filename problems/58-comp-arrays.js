// Comp arrays - check if array2 contains squares of array1 elements with same frequency
function comp(array1, array2) {
  if (array1.length !== array2.length) return false;
  const arrOneCount = {};
  const arrTwoCount = {};
  for (let i = 0; i < array1.length; i++) {
    const current = Math.pow(array1[i], 2);
    if (arrOneCount[current]) {
      arrOneCount[current] += 1;
    } else {
      arrOneCount[current] = 1;
    }
  }
  console.log(arrOneCount);
  for (let i = 0; i < array2.length; i++) {
    if (arrTwoCount[array2[i]]) {
      arrTwoCount[array2[i]] += 1;
    } else {
      arrTwoCount[array2[i]] = 1;
    }
  }

  for (let e in arrOneCount) {
    if (!arrTwoCount[e] || arrTwoCount[e] !== arrOneCount[e]) return false;
  }
  return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));