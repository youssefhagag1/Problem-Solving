function indexOf(head, value) {
  const prev = head;
  let index = 0;
  while(prev.next && prev.data !== value){
    prev = prev.next;
    index++;
  }
  if(prev.data === value) return index;
  return -1
}

