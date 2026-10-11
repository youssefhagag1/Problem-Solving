// String expansion - expand strings like "3abc" to "aaabbbccc"
function noNum(s) {
  for (let i = 0; i < s.length; i++) {
    let num = parseInt(s[i]);
    if (!Number.isNaN(num)) return false;
  }
  return true;
}

function stringExpansion(s) {
  if (s === "") return "";
  if (noNum(s)) return s;

  let result = "";

  for (let i = 0; i < s.length; i++) {
    let current = parseInt(s[i]);

    if (!Number.isNaN(current)) {
      if (!Number.isNaN(parseInt(s[i + 1]))) {
        continue;
      } else {
        let j = i + 1;
        while (j < s.length && Number.isNaN(parseInt(s[j]))) {
          result += s[j].repeat(current);
          j++;
        }
        i = j - 1;
      }
    } else {
      result += s[i];
    }
  }

  return result;
}