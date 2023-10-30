class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    ++this.size;
  }

  pop() {
    if (!this.top) {
      return null; // Stack is empty
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    --this.size;
    return poppedValue;
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
    if (this.stack2.size === 0) {
      if (this.stack1.size === 0) {
        return "Queue is empty";
      }
      while (this.stack1.size > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const myQueue = new QueueUsingStacks();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

// console.log(myQueue.stack1, " myQueue 1");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

// console.log(myQueue.stack2, " myQueue 1 after");
