function dataReverse(data) {
  let bites = [];
  for(let i = data.length - 1 ; i >= 0 ; i-=8){
    bites.push(...data.slice(i - 7 , i +1 ));
  }
  return bites;
}
const data1 = [
    1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1,
    1, 0, 1, 0, 1, 0, 1, 0,
];
console.log(dataReverse(data1))

String.prototype.characterCount = function (chars) {
  if (!this.length || !chars.length) return undefined;
  const counts = {};
  for (let i = 0; i < chars.length; i++) {
    counts[chars[i]] = 0;
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] in counts) counts[this[i]]++;
  }
  let result = [];
  if (chars.length === 1) {
    result = counts[chars];
  } else {
    for (let i = 0; i < chars.length; i++) {
      result.push(counts[chars[i]]);
    }
  }
  return result;
};
console.log("booop-booop-deee-doo-dooop".characterCount("ado"));

