// Replace common - replace the most common letter in a string with a given letter
function replaceCommon(string, letter) {
  const cuountLatters = {};
  const mostRepeated = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") continue;
    if (cuountLatters[string[i]]) {
      cuountLatters[string[i]] += 1;
    } else {
      cuountLatters[string[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(cuountLatters));
  for (let clt in cuountLatters) {
    if (cuountLatters[clt] === max) {
      mostRepeated.push(clt);
    }
  }
  const minIndex = Math.min(...mostRepeated.map((lt) => string.indexOf(lt)));
  const targetLatter = string[minIndex];
  const regex = new RegExp(targetLatter, "g");
  return string.replace(regex, letter);
}