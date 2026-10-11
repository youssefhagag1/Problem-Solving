// SSC permutations - sum of all permutations multiplied by their positions
function sscForperm(arr = []) {
  let arrs = permutations(arr);

  let result = [];
  let allSums = 0;

  for (let perm of arrs) {
    let sum = 0;

    for (let i = 0; i < perm.length; i++) {
      sum += perm[i] * (i + 1);
    }

    result.push(sum);
    allSums += sum;
  }

  return [
    { "total perm": arrs.length },
    { "total ssc": allSums },
    { "max ssc": Math.max(...result) },
    { "min ssc": Math.min(...result) },
  ];
}

function permutations(arr) {
  if (arr.length === 1) return [arr];

  let result = [];
  let used = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (used.has(arr[i])) continue;
    used.add(arr[i]);

    let remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];

    for (let perm of permutations(remaining)) {
      result.push([arr[i], ...perm]);
    }
  }

  return result;
}