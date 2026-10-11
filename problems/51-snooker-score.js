// Snooker score - parse match scores and count wins
function frame(score) {
  let result = [0, 0];
  score = score.replace(/\([0-9]*\)/g, "").split(";");
  for (let i = 0; i < score.length; i++) {
    let current = score[i].trim();
    let part1 = parseInt(current.split("-")[0]);
    let part2 = parseInt(current.split("-")[1]);
    part1 > part2 ? (result[0] += 1) : (result[1] += 1);
  }
  return result;
}
var score =
  "24-79(72); 16-101(53); 86(58)-27; 31-90(74); 0-115(115); 67-40; 61-21; 81(55)-23; 51-14; 124(56,68)-4; 67-12; 108(85)-15; 1-117(117); 1-92(92); 130(112)-0; 1-106(53); 59-39";

console.log(frame(score));