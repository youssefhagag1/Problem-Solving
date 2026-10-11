// Numbers of letters - convert number to words, then count letters, repeat until stable
function toAlpha(number) {
  let numAlph = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  number = number.toString();
  let result = "";
  for (let i = 0; i < number.length; i++) {
    result += numAlph[number[i]];
  }
  return result;
}

function numbersOfLetters(integer) {
  let alphNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const arr = [toAlpha(integer)];
  let last = arr[arr.length - 1];
  while (last.length !== alphNum[last]) {
    arr.push(toAlpha(last.length));
    last = arr[arr.length - 1];
  }

  return arr;
}

console.log(numbersOfLetters(311));