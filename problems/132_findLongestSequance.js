function findLongestSequance(arr){
  const nums = new Set(arr);
  let maxLength = 0;
  for(let num in nums){
    if(!nums.has(num - 1)){
      let length = 1;
      let current = num;

      while(nums.has(current + 1)){
        length++;
        current++;
      }
      maxLength = Math.max(length , maxLength);
    }
  }
  return maxLength;
}

