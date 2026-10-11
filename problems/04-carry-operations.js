// Carry operations - count how many carry operations occur when adding two numbers
function solve(input) {
  let result = "";
  let arr = input.split("\n");
  for (let i = 0; i < arr.length; i++) {
    let carry = 0;
    let count = 0;
    let sum = 0;
    const [[...arr1], [...arr2]] = arr[i].split(" ");
    for (let j = arr1.length - 1; j >= 0; j--) {
      sum = Number(arr1[j]) + Number(arr2[j]) + carry;
      if (sum > 9) {
        count++;
        carry = 1;
      } else {
        carry = 0;
      }
    }
    result += count === 0 ? "No carry operation" : `${count} carry operations`;
    result += i < arr.length - 1 ? "\n" : "";
  }
  return result;
}

console.log(solve("123 456\n555 555\n123 594\n999 999"));