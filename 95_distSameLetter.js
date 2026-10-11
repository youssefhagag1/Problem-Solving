function distSameLetter(s) {
  let dist = {};
  for(let i = 0 ; i < s.length ; i++){
    if(!dist[s[i]]) dist[s[i]] = s.lastIndexOf(s[i]) - s.indexOf(s[i]);
  }
  let max = Math.max(...Object.values(dist));
  let result = "";
  console.log(dist)
  for(let i in dist){
    if(dist[i] === max) {
      result = i;;
      break;
    };
  }
  return result + (max+1);
}
console.log(distSameLetter("ewoouskpgyqeyughrrcbvzuzskuxzaew"));

