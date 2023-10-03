class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const top = this.first;
      this.first = newNode;
      this.first.next = top;
    }
    ++this.length;
  }

  pop() {
    if (this.first === null) return "Underflow";
    const top = this.first;
    this.first = top.next;
    --this.length;
  }

  print() {
    const res = [];

    let currentNode = this.first;
    for (let i = 0; i < this.length; i++) {
      res.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log(res, " resss");
  }

  peek() {
    return this.first;
  }

  isEmpty() {}

  size() {}
}

const stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
// stack.push(5);
// console.log(stack, " sss b4444");
// stack.pop();
// console.log(stack.print());
console.log(stack, " sss afterrrrrrr");

stack.print();

console.log(stack.peek());
