class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CicularLinked {
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
  }
}

const circleOne = new CicularLinked();

circleOne.push(11);
circleOne.push(22);
circleOne.push(33);

console.log(circleOne);
