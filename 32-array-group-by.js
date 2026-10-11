// Array group by - group consecutive equal elements
Array.prototype.groupBy = function groupBy(eq = (a, b) => a === b) {
  const result = [];

  for (let start = 0; start < this.length; ) {
    let count = 0;

    while (
      start + count + 1 < this.length &&
      eq(this[start + count], this[start + count + 1])
    ) {
      count++;
    }

    result.push(this.slice(start, start + count + 1));

    start += count + 1;
  }

  return result;
};

Object.defineProperty(Array.prototype, "groupBy", {
  enumerable: false,
});