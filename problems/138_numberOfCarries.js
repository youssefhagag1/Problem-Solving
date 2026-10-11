function numberOfCarries(a, b) {
  let number1 = String(a);
  let number2 = String(b);
  const length =
    number1.length > number2.length ? number1.length : number2.length;
  number1 = number1.padStart(length, "0");
  number2 = number2.padStart(length, "0");
  let cary = 0;
  let count = 0;
  for (let i = length - 1; i >= 0; i--) {
    if((cary + (+number1[i] || 0) + (+number2[i] || 0)) > 9){
        cary = 1;
        count++;
    }else{
        cary = 0
    }
  }
  return count;
}

console.log(numberOfCarries(1927, 6426));
const bijectiveBinary = {
  convertToInt: function (str) {
    let power = 0;
    let result = 0;
    for (let i = str.length - 1; i >= 0; i-- , power++) {
      const num = str[i];
      if (num ===  "2") {
        result += 2 * Math.pow(2, power);
      } else {
        result += Math.pow(2, power);
      }
    }
    return result;
  },
  convertFromInt: function (number) {
    let result = "";
    while(number > 0){
        number -= 1;
        if(number % 2 === 0) result = 1 + result;
        else result = 2 + result;
        number = Math.floor(number / 2);
    }
    return result;
  },
};

console.log(bijectiveBinary.convertFromInt(1000000));

