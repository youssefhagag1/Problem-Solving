// Split strings - split string into pairs, add "_" for odd length
function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  result[result.length - 1].length === 1
    ? (result[result.length - 1] = result[result.length - 1] + "_")
    : result[result.length - 1];
  return result;
}

console.log(solution("abcdef"));