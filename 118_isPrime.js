function isPrime(num){
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false
  for(let i = 2 ; i <= Math.sqrt(num) ; i+=2){
    if(num % i === 0) return false;
  }
  return true;
}

for(let i = 0 ; i < 20 ; i++){
  console.log(isPrime(i))
}

const arrayWithoutFalsy = arr => arr.filter(Boolean)
const arrayWithoutFalsy = arr => arr.filter(e => Boolean(e))
const arrayWithoutFalsy = arr => arr.filter(e => Boolean(e) === true)

const convertArrToObj = arr => {
  let obj = {};
  for(let i in arr){
    obj[i] = arr[i];
  }
  return obj
}

console.log(convertArrToObj([1 , 2 , 3]))

const removeDublicates = arr => [...new Set(arr)]

