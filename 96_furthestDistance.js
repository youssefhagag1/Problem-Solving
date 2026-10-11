function furthestDistance(arr, k) {
  let diff = -1;
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j <arr.length ; j++){
      if (Math.abs(arr[i] - arr[j]) >= k) {
        if (j - i > diff) diff = j - i;
      }
    }
  }
  return diff;
}

console.log(furthestDistance([1, 2, 3, 4], 1));

const convertor = (ch) => (ch ? ch.charCodeAt(0)?.toString(16) : "00");

