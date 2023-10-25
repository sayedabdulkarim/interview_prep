class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinked {
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
      newNode.prev = this.head;
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

  pop() {
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const secondLastNode = this.tail.prev;
      secondLastNode.next = null;
      this.tail = secondLastNode;
    }
    --this.length;
  }

  shift() {
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const secondNode = this.head.next;
      secondNode.prev = null;
      this.head = secondNode;
    }
    --this.length;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.length;
  }

  addCycle(idx) {
    const getNode = this.traverse(idx);

    if (!getNode) return null;
    else {
      this.tail.next = getNode;
      ++this.length;
    }
  }

  hasCycle() {
    if (!this.head) return null;

    let tortoise = this.head;
    let hare = this.head;

    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        return true;
      }
    }
    return false;
  }
}

const double = new DoubleLinked();
double.push(11);
double.push(22);
double.push(33);

console.log(double);

// double.addCycle(1);

console.log(double.hasCycle(), " affffff");
