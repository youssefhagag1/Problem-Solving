function averageString(str) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let sum = 0;

  const arr = str.split(" ");
  for(let i = 0 ; i < arr.length ; i++){
    console.log(nums[arr[i]]);
    const current = nums[arr[i]];
    if(!current && current !== 0) return "n/a";
    else{
        sum += current;
    }
  }
  const avg = Math.floor(sum / arr.length);
  for(let i in nums){
    if(nums[i] === avg) return i
  }
}
console.log(averageString(("zero nine five two")));

