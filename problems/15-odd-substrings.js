// Odd substrings - count all substrings that form odd numbers
function solve(s) {
  let count = 0;
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] % 2 !== 0) {
      count++;
    }
    for (let j = i + 1; j < arr.length; j++) {
      let n = BigInt(arr.slice(i, j + 1).join(""));
      if (n % 2n !== 0n) {
        count++;
      }
    }
  }
  return count;
}

console.log(solve("1341"));
console.log(solve("1357"));
console.log(solve("13471"));
console.log(
  solve(
    "65988966577422272243962432785236777364427919552985518379526457565419446464"
  )
);