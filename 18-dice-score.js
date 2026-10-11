// Dice score - calculate score from dice rolls (Greed game)
function score(dice) {
  const points = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  };
  const freq = {};
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (freq[dice[i]]) {
      freq[dice[i]]++;
    } else {
      freq[dice[i]] = 1;
    }
  }
  for (let i in freq) {
    if (freq[i] === 3) {
      sum += points[i];
    } else if (freq[i] > 3) {
      let mod = freq[i] % 3;
      if (i == 1) {
        sum += mod * 100 + points[i];
      } else if (i == 5) {
        sum += mod * 50 + points[i];
      } else {
        sum += points[i];
      }
    } else {
      if (i == 1) {
        sum += freq[i] * 100;
      }
      if (i == 5) {
        sum += freq[i] * 50;
      }
    }
  }

  return sum;
}

console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([1, 1, 1, 3, 1]));