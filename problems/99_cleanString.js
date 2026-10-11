function cleanString(s) {
  s = s.split("")
  for(let i = s.length - 1 ; i >=0 ; i--){
    if(s[i] === "#"){
      s.splice(i , 1);
      for(let j = i - 1 ; j >= 0 ; j--){
        if(s[j] !== "#"){
          s.splice(j , 1);
          break;
        }
      }
    }
  }
  return s
}

console.log(cleanString("abc####d##c#"));

