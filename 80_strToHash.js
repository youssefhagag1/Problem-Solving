function strToHash(str) {
  let arr = str.split(",");
  let obj = {};
  arr.forEach((ele) => (obj[ele.split("=")[0].trim()] = +ele.split("=")[1]));
  return obj;
}

console.log(strToHash("a=1, b=2, c=3, d=4"));

