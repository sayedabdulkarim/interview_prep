class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
  }
  traverse(idx) {
    if (!this.head || idx < 0 || idx > this.length) return null;
    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  deletion(idx) {
    if (!this.head || idx < 0 || idx > this.length) return null;
    else if (idx == 0) {
      this.head = this.head.next;
    } else if (idx == this.length - 1) {
      const currentNode = this.traverse(this.length - 2);
      currentNode.next = this.head;
      this.tail = currentNode;
    } else {
      const currentPrevNode = this.traverse(idx - 1);
      currentPrevNode.next = currentPrevNode.next.next;
    }
    --this.length;
  }
}

const circleOne = new CircularLinked();
circleOne.push(11);
circleOne.push(22);
circleOne.push(33);
console.log(circleOne);
