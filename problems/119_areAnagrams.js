function areAnagrams(str1 , str2){
  if(str1.length !== str2.length) return false;
  let counterStr1 = {};
  let counterStr2 = {};
  const length = str1.length;
  for(let i = 0 ; i < length ; i++){
    if(counterStr1[str1[i]]){
      counterStr1[str1[i]]++;
    }else{
      counterStr1[str1[i]] = 1;
    }

    if(counterStr2[str2[i]]){
      counterStr2[str2[i]]++;
    }else{
      counterStr2[str2[i]] = 1;
    }
  }

  for(let ch in counterStr1){
    if(counterStr1[ch] !== counterStr2[ch]) return false;
  }
  return true

}

