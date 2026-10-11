function alphabetWar(fight) {
  const left = { w: 4, p: 3, b: 2, s: 1, t: 0 };
  const right = { m: 4, q: 3, d: 2, z: 1, j: 0 };
  let sumLeft = 0;
  let sumRight = 0;
  fight = [...fight];
  for (let i = 0; i < fight.length; i++) {
    const current = fight[i];
    if (
      (current === "t" && fight[i + 2] === "j") ||
      (current === "j" && fight[i + 2] === "t")
    ) {
      i += 2;
    } else if (current === "t") {
      const prev = fight[i - 1];
      const next = fight[i + 1];
      if (prev && prev !== "j" && prev !== "t" && right[prev]) {
        const power = right[prev];
        for (let ch in left) {
          if (left[ch] === power) {
            fight[i - 1] = ch;
            continue;
          }
        }
      }
      if (next && next !== "j" && next !== "t" && right[next]) {
        const power = right[next];
        for (let ch in left) {
          if (left[ch] === power) {
            fight[i + 1] = ch;
            continue;
          }
        }
      }
    } else if (current === "j") {
      const prev = fight[i - 1];
      const next = fight[i + 1];
      if (next && next !== "j" && next !== "t" && left[next]) {
        const power = left[next];
        for (let ch in right) {
          if (right[ch] === power) {
            fight[i + 1] = ch;
            continue;
          }
        }
      }
      if (prev && prev !== "j" && prev !== "t" && left[prev]) {
        const power = left[prev];
        for (let ch in right) {
          if (right[ch] === power) {
            fight[i - 1] = ch;
            continue;
          }
        }
      }
    }
  }

  for (let i = 0; i < fight.length; i++) {
    const current = fight[i];
    if (left[current] && current !== "t") {
      sumLeft += left[current];
    }
    if (right[current] && current !== "j") {
      sumRight += right[current];
    }
  }
  if (sumLeft > sumRight) {
    return "Left side wins!";
  } else if (sumRight > sumLeft) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("ibjfttqzbjw"));

