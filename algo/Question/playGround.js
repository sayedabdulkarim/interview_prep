class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
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
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode; // Connect old tail to new node
      this.tail = newNode; // Update tail
      this.tail.next = this.head; // Point new tail back to head
    }
    ++this.length;
  }

  search(idx) {
    if (!this.head || idx < 0 || idx >= this.length) return null;
    else {
      let currentNode = this.head;

      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  delete(idx) {
    const getCurrentNode = this.search(idx);
    const getPrevNode = this.search(idx - 1);
    const getSecondLastNode = this.search(this.length - 2);

    if (idx < 0 || idx >= this.length) return null;
    else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else if (idx == this.length - 1) {
      getSecondLastNode.next = this.head;
      this.tail = getSecondLastNode;
    } else {
      getPrevNode.next = getCurrentNode.next;
    }
    --this.length;
  }
  traverse() {
    const res = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      res.push(currentNode.value);
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    return res;
  }
}

const circularOne = new CircularLinkedList();

circularOne.push(11);
circularOne.push(22);
circularOne.push(33);

// console.log(circularOne, " circularrrr");

// circularOne.delete(1);

console.log(circularOne.traverse(), " afterrr");
