class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(params) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    ++this.size;
  }
  pop() {
    if (!this.first) return null;
    else {
      this.first = this.first.next;
    }
    --this.size;
  }
}

// const stackOne = new Stack();
// stackOne.push(11);
// stackOne.push(22);
// stackOne.push(33);
// console.log(stackOne);
// stackOne.pop();
// console.log(stackOne);

class Queue {
  constructor(params) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    ++this.size;
  }
  deque() {
    if (!this.first) return null;
    else {
      this.first = this.first.next;
    }
    --this.size;
  }
}

const queueOne = new Queue();
queueOne.enqueue(11);
queueOne.enqueue(22);
queueOne.enqueue(33);
console.log(queueOne, " qqqq");
