function expandedForm(num) {
  const result = [];
  let mul = 10;
  while (num !== 0) {
    let checker = num % (1 * mul);
    mul *= 10;
    if (checker > 0) result.push(checker);
    num -= checker;
  }

  return result.reverse().join(" + ")
}

console.log(expandedForm(703054));

