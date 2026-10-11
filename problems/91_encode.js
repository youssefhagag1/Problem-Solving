function encode(input) {
  let result = "";
  let count = 1;
  for(let i = 1 ; i <=input.length; i++){
    if(input[i - 1] !== input[i]){
      result +=`${count}${input[i - 1]}`;
      count = 1;
    }else{
      count++;
    }
  }
  return result;
}

