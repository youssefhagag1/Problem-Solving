function findAdded(st1, st2) {
  let result = [];
  const count1 = {};
  const count2 = {};
  for (let i = 0; i < st1.length; i++) {
    count1[st1[i]] = (count1[st1[i]] || 0) + 1;
  }
  for (let i = 0; i < st2.length; i++) {
    count2[st2[i]] = (count2[st2[i]] || 0) + 1;
  }
  for (let i in count2) {
    const matcherVal = count1[i];
    if (matcherVal === undefined) {
      result.push(i.repeat(count2[i]));
    } else {
      const diff = count2[i] - matcherVal;
      if (diff > 0) {
        result.push(i.repeat(diff));
      }
    }
  }
  return result.sort().join("")
}

console.log(findAdded("528981295755","0390528981295755507"));

