// Generate hashtag - convert string to hashtag format
function generateHashtag(str) {
  let result = false;
  if (/^\s*$/.test(str)) {
    return result;
  }
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  result = "#" + arr.join("");
  if (result.length > 140) {
    result = false;
  }
  return result;
}

console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
console.log(generateHashtag("a".repeat(139)) === "#A" + "a".repeat(138));
console.log(generateHashtag("a".repeat(140)));