// Decode using Atbash cipher (a->z, b->y, etc.)
function decode(str) {
  if (typeof str !== "string") return "Input is not a string";
  const alphabetMap = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (alphabetMap[str[i].toLowerCase()]) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        result += alphabetMap[str[i]];
      } else {
        result += alphabetMap[str[i].toLowerCase()].toUpperCase();
      }
    } else {
      result += str[i];
    }
  }
  return result;
}