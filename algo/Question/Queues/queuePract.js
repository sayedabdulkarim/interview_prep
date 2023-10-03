class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    ++this.length;
  }

  dequeue() {
    if (!this.first) return "Underflow";
    const firstNode = this.first;
    this.first = firstNode.next;
    if (this.first === null) {
      this.last = null; // if queue is now empty, last should also be null
    }
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
    return this.first ? this.first.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.print());
queue.dequeue();
console.log(queue.print());
// console.log(queue);
