// Array remove - remove elements matching predicate from array in-place
Array.prototype.remove = function (pred) {
  let temp = this;
  let result = temp.filter((e) => pred(e));
  for (let i = 0; i < this.length; i++) {
    const check = pred(this[i]);
    if (check) {
      this.splice(i, 1);
      i--;
    }
  }
  return result;
};
let array = [1, 2, 3, 4, 5];
var removed = array.remove(function (a) {
  return a % 2 === 0;
});
console.log(removed, array);