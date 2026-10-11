function reverseVowels(str) {
  str = [...str];
  const vowels = ["a", "e", "o", "i", "u" , "A" , "E" , "O" , "I" , "U"];
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (!vowels.includes(str[left]) && !vowels.includes(str[right])) {
      left++;
      right--;
    } else if (vowels.includes(str[left]) && vowels.includes(str[right])) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    } else if (vowels.includes(str[left])) {
      right--;
    } else {
      left++;
    }
  }
  return str.join("");
}

console.log(reverseVowels("Hello!"))

