function rankings(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return arr.map((e) => sortedArr.indexOf(e) + 1);
}

Array.prototype.except = function (keys = []) {
  if (!Array.isArray(keys)) keys = Array.of(keys);
  return this.filter((_, i) => !keys.includes(i));
};

console.log([1, 2, 3, 4].except([0, 2]));

