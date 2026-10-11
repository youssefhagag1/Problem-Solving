// Encrypt this - encrypt each word: first char as char code, swap second and last
var encryptThis = function (text = "") {
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    let first = text[i].charCodeAt(0);
    let second = text[i][text[i].length - 1];
    let last = text[i][1] || "";
    if (text[i].length > 2) {
      text[i] = first + second + text[i].slice(2, -1) + last;
    } else {
      text[i] = first + last;
    }
  }
  return text.join(" ");
};

console.log(encryptThis("The more he saw the less he spoke"));