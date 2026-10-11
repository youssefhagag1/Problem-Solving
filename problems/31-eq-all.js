// Eq all - check if all elements in an iterable are equal
function eqAll(iterable) {
  let arr =
    typeof iterable === "number"
      ? Array.from(iterable.toString())
      : Array.from(iterable);
  if (arr.length === 0) return true;
  const oneElement = new Set(arr).size;
  if (oneElement === 1) {
    return true;
  }
  return false;
}

const arr = [{ name: "hagag" }, { name: "hagag" }];
console.log(eqAll(arr));