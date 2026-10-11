// Snooker frame - calculate snooker frame score from ball notation
function frame(balls) {
  if (balls.includes("W")) return "Foul";
  let sum = 0;
  const points = {
    R: 1,
    Y: 2,
    G: 3,
    P: 6,
    Bn: 4,
    Be: 5,
    Bk: 7,
  };
  let i = (j = 0);
  for (; i < balls.length && j < balls.length; i++) {
    let count = "";
    let current = balls[i];
    let value;
    if (current === "B") {
      i++;
      current += balls[i];
    }
    value = points[current];
    for (j = i + 1; j < balls.length; j++) {
      if (!Number.isNaN(parseInt(balls[j]))) {
        count += balls[j];
      } else {
        i = j - 1;
        break;
      }
    }
    sum += count ? value * count : value;
  }

  return sum > 147 ? "invalid data" : sum;
}

console.log(frame("R15Bk15YGBnBePBk"));