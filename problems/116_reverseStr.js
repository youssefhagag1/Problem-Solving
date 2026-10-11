function reverseStr(str){
  let arr = str.split("");
  for(let i = 0 ; i<arr.length / 2 ; i++){
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1] , arr[i]];
  }
  return arr.join("")
}

console.log(reverseStr("1234"));

