class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircleLinkedList {
  constructor(params) {
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
    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

const circleOne = new CircleLinkedList();
circleOne.push(11);
circleOne.push(22);
circleOne.push(33);

console.log(circleOne);
