// Find missing letter - find the missing letter in a sequence of consecutive letters
function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));