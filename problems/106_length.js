function length(head) {
  let size = 0;
  while(head){
    size++;
    head = head.next;
  }
  return size;
}

