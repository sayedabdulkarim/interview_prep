// implement a Queue using Stacks
///QUEUES - FIFO

/**
 * enqueue
 * dequeue
 * print
 * peek
 */

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

////1. Implement a Queue using Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    ++this.length;
  }

  pop() {
    if (!this.top) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    --this.length;
    return poppedNode.value;
  }
}

class QueueUsingStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) return "Queue is empty";
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const stackOne = new Stack();
const myQueue = new QueueUsingStacks();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.stack1, " myQueue 1");
// console.log(stackOne, " stackOne");

console.log(myQueue.dequeue()); // should return 1

console.log(myQueue.dequeue()); // should return 2
console.log(myQueue.dequeue()); // should return 3

// console.log(myQueue.stack2, " myQueue 2");
