function getMichaelLastName(inputText) {
  const pattern = /Michael\s[A-Z]{1}[a-z]+/g;
  return inputText
    .match(pattern)
    .join(" ")
    .replace(/Michael/g, "")
    .split(" ")
    .filter((name) => name != "");
}

const inputText =
  "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

console.log(getMichaelLastName(inputText));

