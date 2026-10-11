function calcOverlapTime(intervals){
  const units = new Set();
  for(let interval of intervals){
    const start = interval[0];
    const end = interval[1];
    for(let i = start ; i<end ; i++){
      units.add(i);
    }
  }
  return units.size;
}

