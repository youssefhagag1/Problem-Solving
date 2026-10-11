function validate(n) {
  const arr = [...n.toString()];
  for(let i = arr.length - 2 ; i >= 0 ; i-=2){
    arr[i] = arr[i] * 2;
    if(+arr[i] > 9){
      arr[i] = sumArr([...arr[i].toString()]);
    }
  }
  const result = sumArr(arr)
  return result % 10 === 0;
}

console.log(validate(1))

