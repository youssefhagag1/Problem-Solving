// XOR reduction - evaluate XOR of space-separated binary digits
let X = (i) => eval(i.replace(/\s+/g, "^"));
console.log(X("1 0 0 1 0"));