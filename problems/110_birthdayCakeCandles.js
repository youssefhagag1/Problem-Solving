function birthdayCakeCandles(candles) {
  if (!candles.length) return -1;
  const counter = {};
  for(let candle of candles){
    if(counter[candle]){
        counter[candle]++;
    }else{
        counter[candle] = 1
    }
  }
  const max = Math.max(...Object.keys(counter));
  return counter[max];
}

console.log(birthdayCakeCandles([3, 1, 2, 3]));

