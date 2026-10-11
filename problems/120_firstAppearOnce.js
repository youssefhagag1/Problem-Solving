function firstAppearOnce(numbers){
  const counter = {};
  for(let i = 0 ; i < numbers.length ; i++){
    counter[numbers[i]] = (counter[numbers[i]] || 0) + 1;
  }
  for(let num in counter){
    if(counter[num] == 1) return num;
  }
}

