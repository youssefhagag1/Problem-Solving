function isValid(str){
    const brackets = {
        "]" : "[",
        ")" : "(",
        "}" : "{"
    }
    const arr = str.split("");
    const stack = [];
    for(let i = 0 ; i<arr.length ; i++){
        const current = arr[i];
        const lastElement = stack[stack.length - 1];
        if (
          brackets[current] &&
          lastElement &&
          brackets[current] == lastElement
        ) {
          stack.pop();
        } else {
          stack.push(current);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"));   // true
console.log(isValid("([{}])"));   // true
console.log(isValid("([)]"));     // false
console.log(isValid("((("));      // false
console.log(isValid(")"));        // false

class Node{
    constructor(value , next = null){
        this.value = value;
        this.next = next;
    }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    if (this.head) {
      this.insertEnd(value);
    } else {
      const newNode = new Node(value);
      this.head = newNode;
    }
    this.size++;
  }
  insertEnd(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;

      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ls = new Linkedlist();
ls.insert(1)
ls.insert(2)
ls.insert(3)
ls.reverse()
ls.print()

