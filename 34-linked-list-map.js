// Linked list map - apply function to each node in a linked list
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function map(head, f) {
  if (!head) return null;
  return new Node(f(head.data), map(head.next, f));
}