function isOddHeavy(array) {
  const odd = [];
  const even = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) even.push(array[i]);
    else odd.push(array[i]);
  }

  if (!odd.length) return false;

  const min = Math.min(...odd);
  const max = Math.max(...even);

  if (min > max) return true;

  return false;
}

