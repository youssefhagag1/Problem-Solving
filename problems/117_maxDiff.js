function maxDiff(arr){
  if(!arr.length) return -1
  return Math.max(...arr) - Math.min(...arr)
}

console.log(maxDiff([]))

