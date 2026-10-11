// Caesar Cipher - encode/decode with a shift
var CaesarCipher = function (shift) {
  this.shift = shift;
  this.encode = function (str) {
    str = str.toUpperCase();
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        let shifting = code + this.shift;
        if (shifting <= 90) {
          result += String.fromCharCode(shifting);
        } else {
          let diff = shifting - 26;
          result += String.fromCharCode(diff);
        }
      } else {
        result += str[i];
      }
    }
    return result;
  };
  this.decode = function (str) {
    str = str.toUpperCase();
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        let shifting = code - this.shift;
        if (shifting >= 65) {
          result += String.fromCharCode(shifting);
        } else {
          let diff = shifting + 26;
          result += String.fromCharCode(diff);
        }
      } else {
        result += str[i];
      }
    }
    return result;
  };
};

const c = new CaesarCipher(5);
console.log(c.encode("Codewars"));
console.log(c.decode("HTIJBFWX"));