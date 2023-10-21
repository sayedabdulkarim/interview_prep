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
    else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.size;
  }
}

class QueueUsingStacks {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  // Enqueue operation
  enqueue(value) {
    this.s1.push(value);
  }

  // Dequeue operation
  dequeue() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  // Peek operation (optional)
  peek() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.peek();
  }

  // Check if the queue is empty (optional)
  isEmpty() {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}

const stackOne = new Stack();
stackOne.push(11);
stackOne.push(22);
stackOne.push(33);
console.log(stackOne, " b44");

stackOne.pop();
console.log(stackOne, " afterr");

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

  dequeue() {
    if (!this.first) return null;
    else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.size;
  }
}
