function deepCount(a, count = 0) {
  for (let i = 0; i < a.length; i++) {
    count++;
    if (Array.isArray(a[i])) {
       return deepCount(a[i] , count++)
    }
  }
  return count;
}

console.log(deepCount([[[[[]], [[]], [[]]]], [[20, 15, [[]]]], 19]));

