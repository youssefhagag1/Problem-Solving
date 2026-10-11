function expandedForm(num) {
  const intResult = [];
  const fractonResult = [];
  const [intger, fraction] = String(num).split(".");
  for (let i = intger.length - 1; i >= 0; i--) {
    let current = +intger[i];
    if (current === 0) continue;
    let powerd = current * 10 ** (intger.length - i - 1);
    intResult.push(powerd);
  }
  for (let i = 0; i < fraction.length; i++) {
    let current = fraction[i];
    if (current == "0") continue;
    let div = current + "/" + 10 ** (i + 1);
    fractonResult.push(div);
  }
  if (intResult.length) {
    var result =
      intResult.reverse().join(" + ") + " + " + fractonResult.join(" + ");
  } else {
    var result =
      intResult.reverse().join(" + ") + fractonResult.join(" + ");
  }
  return result;
}

console.log(expandedForm(12.24));

