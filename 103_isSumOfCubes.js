function isSumOfCubes(s) {
  const matcher = s
    .match(/[0-9]{1,3}/g)
    .join(" ")
    .replace(/0{2,3}/g, 0)
    .split(" ");
  let result = matcher.filter(
    (e) => [...e].reduce((acc, num) => +acc + Math.pow(+num, 3), 0) == e,
  );

  if(result.length) result.push(result.reduce((acc, num) => +acc + +num, 0));
  return result.length ? `${result.join(" ")} Lucky` : "Unlucky";
}

let s = "153000153407000407";

console.log(isSumOfCubes(s));

Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    return new Set([...this]).size <= 1;
  },
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    for(let i = 0 ; i < this.length-1 ; i++){
      if(this[i] !== this[i+1]) return false;
    }
    return true
  },
});

const test = [null, null];

console.log(test.eqAll())

