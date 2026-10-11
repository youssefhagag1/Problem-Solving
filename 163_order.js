function order(words) {
  return words.split(" ").sort((a , b) => a.match(/[0-9]/) - b.match(/[0-9]/)).join(" ")
}
console.log(order("is2 Thi1s T4est 3a"));
