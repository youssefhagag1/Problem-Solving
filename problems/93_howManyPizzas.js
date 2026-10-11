function howManyPizzas(n) {
  const area8Inchs = Math.PI * Math.pow(8, 2);
  const areaOfOneSlice = Math.round(area8Inchs / 8);
  let areaOFActual = Math.PI * Math.pow(n, 2);
  let countPizza = countSlices = 0;
  while (areaOFActual >= area8Inchs) {
    countPizza++;
    areaOFActual -= area8Inchs;
  }
  while (areaOFActual >= areaOfOneSlice) {
    countSlices++;
    areaOFActual -= areaOfOneSlice;
  }
  if(areaOfOneSlice / 2 <= areaOFActual) countSlices++
  return `pizzas: ${countPizza}, slices: ${countSlices}`
}

console.log(howManyPizzas(6))

var greatestDistance = function(data) {
  const count = {};
  for(let i = 0 ; i<data.length ; i++){
    if(count[data[i]]){
      count[data[i]].push(i);
    }else{
      count[data[i]] = [i];
    }
  }
  let max = 0;
  for(let i in count){
    if(count[i].length > 1){
      let diff = count[i][count[i].length - 1] - count[i][0];
      if(diff > max) max = diff;
    }
  }
  return max;
};

console.log(greatestDistance([0,7,0,2,3,7,0,-1,-2]))

Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return a.every((num) => this.includes(num));
  },
});
[1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5])

const sumSquare = num => [...String(num)].reduce((acc , d) => acc + Math.pow(d , 2) , 0);

