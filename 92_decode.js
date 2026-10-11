function decode(input) {
  return input.replace(/(\d+)([A-Z])/g , (_ , d , c) =>  c.repeat(d))
}

console.log(encode("AAABBBCCCAA"));

console.log(decode("3A3B3C2A"));

