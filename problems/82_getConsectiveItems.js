function getConsectiveItems(items, key) {
  const regex = new RegExp(`${key}{1,}`, "g");
  const matchers = String(items).match(regex);
  return matchers?.length > 0 ? Math.max(...matchers.map((matcher) => matcher.length)) : 0;
}

console.log(getConsectiveItems(900009000, 1));

