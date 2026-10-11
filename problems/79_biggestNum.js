function biggestNum(a, b) {
  let x = sntanize(a);
  let y = sntanize(b);

  let num1 = removeZero(x);
  let num2 = removeZero(y);

  if(a.startsWith("-") && isEven(a)) num1 = "-"+num1;
  if(b.startsWith("-") && isEven(b)) num2 = "-" + num2;

  if(num1 === undefined) num1 = "0";
  if(num2 === undefined) num2 = "0";

  return BigInt(num1) > BigInt(num2) ? num1 : num2

}

console.log(biggestNum("--1", "-2"));

