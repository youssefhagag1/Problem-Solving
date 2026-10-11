function solution(n) {
  let remine = n.toString().split(".")[1].length;
  let first = +n.toString().split(".")[0];
  let second = first + 0.5;
  let last = first + 1;
  let ns = [first , second , last];
  let arr = [
    +Math.abs(n - first).toFixed(remine),
    +Math.abs(n - second).toFixed(remine),
    +Math.abs(n - last).toFixed(remine),
  ];
  let min = Math.min(...arr);
  let index = arr.lastIndexOf(min) !== arr.indexOf(min) ? arr.lastIndexOf(min) : arr.indexOf(min);
  return ns[index];
}

console.log(solution(270.73))

const sntanize = num => num.replace(/-/g , "");

const isEven = num => (num.lastIndexOf("-") - num.indexOf("-")) % 2 === 0

const removeZero = num => {
   for (let i = 0; i < num.length; i++) {
     if (num[i] != 0) {
       return num.slice(i);
     }
   }
}
