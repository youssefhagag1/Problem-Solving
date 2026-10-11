// Nth smallest - find the nth smallest element in a nested array
function nthSmallest(...args) {
  return args[0].flat(Infinity).sort((a, b) => a - b)[args[1] - 1];
}

console.log(nthSmallest([[2, 8, 12], [4, 6, 10]], 5));