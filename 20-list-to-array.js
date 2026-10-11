// List to array - convert linked list to array
function listToArray(list) {
  const result = [];
  while (true) {
    result.push(list.value);
    if (list.next === null) {
      return result;
    }
    list = list.next;
  }
}

console.log(
  listToArray({
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  })
);