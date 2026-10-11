function makeAWindow(num) {
  const line = "-".repeat((num * 2) + 3);
  const dots = ".".repeat(num);
  const hevens = "-".repeat(num);
  const pane = `|${dots}|${dots}|\n`
  const result = [`${line}\n`];
  for(let i = 0 ; i< num * 2 ; i++){
    result.push(pane);
    if(i+1 === num) result.push(`|${hevens}+${hevens}|\n`)
  }
  result.push(line);
  return result.join("");
}

console.log(makeAWindow(100000))

const power = (x) => 2 * Math.pow(x, 2);

