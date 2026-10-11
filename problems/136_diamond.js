function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let start = [];
  for (let i = 1; i < n; i += 2) {
    let current = " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
    start.push(current);
  }
  let center = "*".repeat(n) + "\n";
  let end = [];
  for (let i = start.length - 1; i >= 0; i--) {
    end.push(start[i]);
  }
  return start.concat(center).concat(end).join("");
}
console.log(diamond(5))

