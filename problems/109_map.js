function map(head, f) {
  let pointer = create(head);
  let start = pointer
  while (pointer) {
    pointer.data = f(pointer.data);
    pointer = pointer.next;
  }
  return start;
}

console.log(
  map(
    new Node(1, new Node(2, new Node(3))),
    (x) => x * 2,
    new Node(2, new Node(4, new Node(6))),
  ),
);

