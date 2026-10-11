// Do math - perform alternating operations on numbers sorted by their embedded letter
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

function doMath(string) {
  let arr = string
    .split(" ")
    .sort((a, b) => {
      let xCode = a.match(/[a-zA-z]/)[0].charCodeAt(0);
      let yCode = b.match(/[a-zA-z]/)[0].charCodeAt(0);
      return xCode >= yCode ? 1 : -1;
    })
    .join(" ")
    .replace(/[a-zA-z]/g, "")
    .split(" ");

  const actions = [add, sub, multiply, divide];
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentAction = (i - 1) % actions.length;
    result = actions[currentAction](+result, +arr[i]);
  }

  return Math.round(result);
}

console.log(doMath("10a 90x 14b 78u 45a 7b 34y"));