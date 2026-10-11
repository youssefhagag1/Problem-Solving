function binaryToString(binary) {
  if(!binary) return binary
  binary = binary.match(/[0-1]{8}/g);
  let result = "";
  for(let i = 0 ; i < binary.length ; i++){
    let sum = 0;
    for(let j = binary[i].length - 1 ; j >= 0 ; j--){
      if(binary[i][j] === "1") sum += Math.pow(2 , 7 - j);
    }
    result += String.fromCodePoint(sum)
  }
  return result;
}
console.log(
  binaryToString("01001011010101000100100001011000010000100101100101000101"),
);

