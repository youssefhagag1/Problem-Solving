function vowelShift(text, n) {
  text = [...text];
  const vowels = "aeiouAEIOU";
  const originalVowels = [];
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      originalVowels.push(text[i]);
      text[i] = "_";
    }
  }
  let pos = n % originalVowels.length;
  const shiftedVowels = [];
  if (pos < 0) {
    pos += originalVowels.length;
  }
  for (let i = 0; i < originalVowels.length; i++) {
    let accuretPos = (i + pos) % originalVowels.length;
    shiftedVowels[accuretPos] = originalVowels[i];
  }
  shiftedVowels.reverse();
  for(let i = 0 ; i<text.length && shiftedVowels.length ; i++){
    if(text[i] === "_"){
      text[i] = shiftedVowels.pop();
    }
  }
  return text.join("");
}

console.log(vowelShift("This is a test!" , 0));

