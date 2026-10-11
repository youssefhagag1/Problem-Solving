// Split odd and even - split number into groups of consecutive odd/even digits
function splitOddAndEven(n) {
  let strN = String(n);
  let arr = [strN[0]];
  for (let i = 1; i < strN.length; i++) {
    let lastElement = arr[arr.length - 1];
    if (
      (+strN[i] % 2 === 0 && lastElement[lastElement.length - 1] % 2 === 0) ||
      (+strN[i] % 2 !== 0 && lastElement[lastElement.length - 1] % 2 !== 0)
    ) {
      arr[arr.length - 1] += strN[i];
    } else {
      arr[arr.length] = strN[i];
    }
  }
  return arr.map((e) => +e);
}
console.log(splitOddAndEven(135246));