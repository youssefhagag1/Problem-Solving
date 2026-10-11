function toBinaryString(number) {
  let result = "";
  do {
    let current = number % 2;
    if (current === 0) {
      result += 0;
    } else {
      result += 1;
    }
    number = Math.floor(number / 2);
  } while (number > 0);
  return [...result].reverse().join("");
}
console.log(toBinaryString(15));

