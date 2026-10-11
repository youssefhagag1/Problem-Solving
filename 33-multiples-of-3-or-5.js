// Multiples of 3 or 5 - sum all multiples of 3 or 5 below a given number
function solution(number) {
  if (number <= 0) return 0;
  let sum3 = 3;
  let sum5 = 5;
  let sum_all = new Set();

  while (sum3 < number || sum5 < number) {
    if (sum3 < number) {
      sum_all.add(sum3);
    }
    if (sum5 < number) {
      sum_all.add(sum5);
    }
    sum3 += 3;
    sum5 += 5;
  }
  return Array.from(sum_all).reduce((prev, current) => prev + current, 0);
}