function normIndex(array, index) {
 if (index >= 0) {
    return array[index % array.length];
  }else if(index % array.length === -0){
    return array[0]
  }else {
    let actualIndex = (index % array.length) + array.length;
    return array[actualIndex];
  }
}

console.log(normIndex([33, 17, 12, 65, 37, 8, 4, 31, 53, 35, 13], 11));

const sumArr = (arr) => arr.reduce((acc, current) => +acc + +current);

