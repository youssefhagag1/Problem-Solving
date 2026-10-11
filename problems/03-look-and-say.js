// Look and say - returns the look-and-say sequence for a number
function lookSay(number) {
  let str = number.toString();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j <= str.length; j++) {
      if (str[j] === str[i]) count++;
      else if (str[j] !== str[i] || j == str.length) {
        arr.push([count, str[i]]);
        i = j - 1;
        break;
      }
    }
  }
  return Number(arr.flat().join(""));
}

console.log(lookSay(200000014));
console.log(lookSay(9000));
console.log(lookSay(0));
console.log(lookSay(2014));
console.log(lookSay(22322));
console.log(lookSay(222222222222));