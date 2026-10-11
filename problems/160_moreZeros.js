function moreZeros(s) {
  const result = new Set();
  const binaries = [...s].map((e) => e.charCodeAt(0).toString(2));
  for (let i = 0; i < binaries.length; i++) {
    let zeroz = 0;
    let ones = 0;
    const current = String(binaries[i]);
    console.log(current);
    for (let j = 0; j < current.length; j++) {
      if (current[j] === "0") zeroz++;
      else ones++;
    }
    if (zeroz > ones) {
      result.add(String.fromCodePoint(parseInt(current, 2)));
    }
  }
  return [...result];
}

console.log(moreZeros("abcdea"));

