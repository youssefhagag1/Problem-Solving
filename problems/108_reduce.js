function reduce(head, f, init) {
  const arr = [];
  while(head){
    arr.push(head.data);
    head = head.next
  }
  return arr.reduce(f, init);
}

console.log(reduce(new Node(1, new Node(2, new Node(3))), (a, b) => a + b, 0), 6)
const create = function (head) {
  if (!head) return null;
  return new Node(head.data, create(head.next));
};

