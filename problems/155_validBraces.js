function validBraces(braces) {
  const stack = [];
  const matcher = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{") {
      stack.push(braces[i]);
    } else {
      if (matcher[stack.pop()] !== braces[i]) return false;
    }
  }
  return true;
}

