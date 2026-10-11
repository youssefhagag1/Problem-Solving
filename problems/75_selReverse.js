function selReverse(array, length) {
  if (length <= 1) return array;
  let result = [];
  for (let i = 0; i < array.length; i += length) {
    result.push(...array.slice(i, i + length).reverse());
  }
  return result;
}

console.log(selReverse([1, 2, 3, 4, 5, 6], 0));

makeBricks = (a, b, n) => {
  while (n >= 5 && b--) {
    n -= 5;
  }
  return a >= n;
};

