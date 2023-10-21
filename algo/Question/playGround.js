//STACK - LIFO
/**
 * push
 * pop
 * print
 * peek
 */

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
      //OR
      newNode.next = this.first;
      this.first = newNode;
    }
    ++this.length;
  }

  pop() {
    if (!this.first) return null;
    else if (this.length == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.length;
  }
  //
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
}

const stackOne = new Stack();
stackOne.push(11);
stackOne.push(22);
stackOne.push(33);
console.log(stackOne);
stackOne.pop();
console.log(stackOne, " afterr");

console.log("==========================================================");

const queueOne = new Queue();
queueOne.enqueue(11);
queueOne.enqueue(22);
queueOne.enqueue(33);
console.log(queueOne);
queueOne.dequeue();
console.log(queueOne, " afterr");
