function balance(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const count1 = {};
  const count2 = {};
  for (let i = 0; i < arr1.length; i++) {
    count1[arr1[i]] = (count1[arr1[i]] || 0) + 1;
    count2[arr2[i]] = (count2[arr2[i]] || 0) + 1;
  }
  const valuesCount2 = Object.values(count2);
  for(let ch in count1){
    const index = valuesCount2.indexOf(count1[ch]);
    if(index !== -1){
     delete valuesCount2[index];
    }else{
      return false;
    }
  }
  return true;
}

console.log(
  balance(
    [
      "c",
      "a",
      "b",
      "b",
      "c",
      "b",
      "b",
      "y",
      "c",
      "a",
      "w",
      "x",
      "x",
      "z",
      "x",
      "z",
      "c",
    ],
    [
      "w",
      "y",
      "w",
      "z",
      "a",
      "d",
      "x",
      "w",
      "d",
      "d",
      "y",
      "x",
      "z",
      "y",
      "z",
      "c",
      "w",
    ],
  ),
);

String.prototype.trim = function () {
  const str = this.split("");
  let left = 0,
    right = str.length - 1;
  let move = true;
  while (left <= right && move) {
    move = false;
    if (/\s/.test(str[left])) {
      left++;
      move = true;
    }
    if (/\s/.test(str[right])) {
      right--;
      move = true;
    }
  }
  return str.slice(left, right + 1).join("");
};

console.log("        far       bar   ".trim());

