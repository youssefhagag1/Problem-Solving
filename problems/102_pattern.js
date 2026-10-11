function pattern(n) {
  const original = [];
  for (let i = 1; i < n; i++) {
    original[i - 1] = i % 10;
  }
  const reversed = [];
  for (let i = 0; i < original.length / 2; i++) {
    reversed[i] = original[original.length - i - 1];
    reversed[original.length - i - 1] = original[i];
  }
  let output = "";
  for (let i = 0; i < original.length; i++) {
    output += " ".repeat(n - 1) + original[i] +"\n";
  }
  output += original.join("") + n%10 + reversed.join("") + "\n";
  for (let i = 0; i < reversed.length; i++) {
    output += " ".repeat(n - 1) + reversed[i] + "\n";
  }
  return output;
}

console.log(pattern(21));

console.log(
 pattern(21) === "                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n                    1\n                    2\n                    3\n                    4\n                    5\n                    6\n                    7\n                    8\n                    9\n                    0\n12345678901234567890109876543210987654321\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n                    0\n                    9\n                    8\n                    7\n                    6\n                    5\n                    4\n                    3\n                    2\n                    1\n",
);

