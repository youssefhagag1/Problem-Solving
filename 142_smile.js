function smile(text) {
    text = [...text];
  for(let i = 0 ; i < text.length ; i++){
    let current = text[i];
    let next = text[i + 1];
    if((current === "-" || current === "~" || current === ":" || current === ";" || current === "=")){
        if(next === "(") text[i + 1] = ")"
        if(next === "[") text[i + 1] = "]";
    }
  }
  return text.join("")
}

console.log(smile("Howdy :("), 'Howdy :)');

