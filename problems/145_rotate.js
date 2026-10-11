function rotate(array, n) {
  let result = [...array];
  let k = Math.abs(n % result.length);
  if(n >= 0){
   result = [...result.splice(result.length - k, k), ...result];
  }else{
    const sliced = result.splice(0, k);
    result = [...result, ...sliced];
  }
  return result;
}

console.log(rotate([1 , 2 , 3 , 4 , 5] , 12478))

