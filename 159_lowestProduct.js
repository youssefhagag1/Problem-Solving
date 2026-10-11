function lowestProduct(input) {
  if(input.length < 4) return "Number is too small";
  let min = Infinity;
  for(let i = 0 ; i<input.length - 3 ; i++){
    min = Math.min(
      min,
      [...input.slice(i, i + 4)].reduce((acc, e) => acc * e, 1),
    );
  }
  return min;
}

console.log(lowestProduct("2345611117899"));

