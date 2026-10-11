function largestDiff(numbers){
  const max = Math.max(...numbers);
  const maxIndex = numbers.indexOf(max);
  const min = Math.min(...numbers.slice(0 , maxIndex));
  return max - min;
}

