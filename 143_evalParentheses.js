function evalParentheses(parens) {
  const stack = [];
  let count = 0;
  for(let i = 0 ; i < parens.length ; i++){
    const current = parens[i];
    if(current === "("){
        stack.push(current);
    }else{
        count++;
        stack.pop()
    }
  }
  return count
}

console.log(evalParentheses("((())())"));

