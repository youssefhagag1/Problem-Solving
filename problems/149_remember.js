function remember(str) {
  const chars = {};
  const result = new Set();
  for(let i = 0 ; i < str.length ; i++){
    chars[str[i]] = ++chars[str[i]] || 1;
    if(chars[str[i]] > 1 && !result.has(str[i])){
      result.add(str[i])
    }
  };

  return [...result]
}

console.log(remember("limbojackassin the garden"));

