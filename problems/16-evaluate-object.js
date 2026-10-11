// Evaluate - evaluate nested operation objects with add, subtract, multiply, divide
function evaluate(left, op, right) {
  const lfObject = left.add || left.subtract || left.multiply || left.divide;
  const rgObject = right.add || right.subtract || right.multiply || right.divide;
  const lfResult = [];
  const rgResult = [];
  let l, r, result;

  lfResult.push(lfObject["add"].reduce((a, c) => a + c, 0));
  lfResult.push(lfObject["subtract"].reduce((a, c) => a - c));
  lfResult.push(lfObject["multiply"].reduce((a, c) => a * c, 1));
  lfResult.push(lfObject["divide"].reduce((a, c) => a / c));

  rgResult.push(rgObject["add"].reduce((a, c) => a + c, 0));
  rgResult.push(rgObject["subtract"].reduce((a, c) => a - c));
  rgResult.push(rgObject["multiply"].reduce((a, c) => a * c, 1));
  rgResult.push(rgObject["divide"].reduce((a, c) => a / c));

  const nestedOpL = Object.keys(left)[0];

  if (nestedOpL === "add") {
    l = lfResult.reduce((a, c) => a + c, 0);
  } else if (nestedOpL === "subtract") {
    l = lfResult.reduce((a, c) => a - c);
  } else if (nestedOpL === "multiply") {
    l = lfResult.reduce((a, c) => a * c, 1);
  } else {
    l = lfResult.reduce((a, c) => a / c);
  }
  const nestedOpR = Object.keys(right)[0];

  if (nestedOpR === "add") {
    r = rgResult.reduce((a, c) => a + c, 0);
  } else if (nestedOpR === "subtract") {
    r = rgResult.reduce((a, c) => a - c);
  } else if (nestedOpR === "multiply") {
    r = rgResult.reduce((a, c) => a * c, 1);
  } else {
    r = rgResult.reduce((a, c) => a / c);
  }

  if (op === "add") {
    result = l + r;
  } else if (op === "subtract") {
    result = l - r;
  } else if (op === "multiply") {
    result = l * r;
  } else {
    result = l / r;
  }

  return result;
}

const left = {
  multiply: {
    add: [1, 2, 3, 4, 5],
    subtract: [5, 6, 7, 8, 9],
    multiply: [1, 2, 3, 4, 5],
    divide: [1, 2, 3, 4, 5],
  },
};
const right = {
  subtract: {
    add: [1, 2, 3, 4, 5],
    subtract: [1, 2, 3, 4, 5],
    multiply: [1, 2, 3, 4, 5],
    divide: [1, 2, 3, 4, 5],
  },
};

console.log(evaluate(left, "add", right));