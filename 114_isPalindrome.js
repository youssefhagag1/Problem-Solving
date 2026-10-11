function isPalindrome(str){
  for(let left = 0 ; left < str.length / 2 ; left++){
    let right = str.length - left - 1;
    if(str[left] !== str[right]) return false;
  }
  return true;
}

console.log(isPalindrome("F"));

