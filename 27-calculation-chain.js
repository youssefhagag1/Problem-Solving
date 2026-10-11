// Calculation chain - function chain using eval with operator and value objects
function zero(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`0 ${trigger.op} ${trigger.value}`));
  } else {
    return 0;
  }
}
function one(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`1 ${trigger.op} ${trigger.value} `));
  } else {
    return 1;
  }
}
function two(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`2 ${trigger.op} ${trigger.value} `));
  } else {
    return 2;
  }
}
function three(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`3 ${trigger.op} ${trigger.value} `));
  } else {
    return 3;
  }
}
function four(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`4 ${trigger.op} ${trigger.value} `));
  } else {
    return 4;
  }
}
function five(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`5 ${trigger.op} ${trigger.value} `));
  } else {
    return 5;
  }
}
function six(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`6 ${trigger.op} ${trigger.value} `));
  } else {
    return 6;
  }
}
function seven(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`7 ${trigger.op} ${trigger.value} `));
  } else {
    return 7;
  }
}
function eight(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`8 ${trigger.op} ${trigger.value} `));
  } else {
    return 8;
  }
}
function nine(trigger) {
  if (typeof trigger === "object") {
    return Math.floor(eval(`9 ${trigger.op} ${trigger.value} `));
  } else {
    return 9;
  }
}

function pluse(x) {
  return { op: "+", value: x };
}
function minus(x) {
  return { op: "-", value: x };
}
function times(x) {
  return { op: "*", value: x };
}
function dividedBy(x) {
  return { op: "/", value: x };
}

console.log(seven(pluse(five())));
console.log(zero(pluse(five())));
console.log(seven(dividedBy(two())));