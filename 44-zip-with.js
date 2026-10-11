// Zip with - apply a function element-wise across two arrays
function zipWith(fn, a0, a1) {
  let length = a0.length < a1.length ? a0.length : a1.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}