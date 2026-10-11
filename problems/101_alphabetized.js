function alphabetized(s) {
  return [...s]
    .sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))
    .join("")
    .replace(/\s/g, "");
}

Array.prototype.remove = function (pred) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const check = pred(this[i]);
    if (check) {
      result.push(this[i])
      delete this[i]
    }
  }
  for(let i = 0 ; i < this.length ; i++){
    if(!this[i]) {
      this.splice(i , 1);
      i--
    }
  }
  return result;
};

const array = [13 , 16 , 20 , 25];
const predicate = (i) => i % 2 == 0;
const removed = array.remove(predicate);

console.log(removed)
console.log(array)

