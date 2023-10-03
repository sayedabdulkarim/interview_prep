class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode; // Make it circular here
    } else {
      newNode.next = this.head; // Point to head to make it circular
      this.tail.next = newNode; // Update tail's next before moving tail
      this.tail = newNode;
    }
    ++this.length;
  }

  traverse(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this.traverse(this.length - 2);
      newTail.next = this.head; // Update to point to head
      this.tail = newTail;
    }
    --this.length;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head; // Update tail's next to point to the new head
    }
    --this.length;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode; // Update tail's next to point to the new head
    }
    ++this.length;
  }

  get(idx) {
    return this.traverse(idx);
  }

  set(idx, val) {
    const node = this.traverse(idx);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.traverse(idx - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    ++this.length;

    return true;
  }

  delete(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const prevNode = this.traverse(idx - 1);
    const nodeToRemove = prevNode.next;
    const nextNode = nodeToRemove.next;

    prevNode.next = nextNode;
    --this.length;

    return nodeToRemove;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== this.head);

    this.tail = this.head;
    this.head = prev;
    this.tail.next = this.head;
  }

  print() {
    if (!this.head) return [];

    const arr = [];
    let currentNode = this.head;

    do {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    return arr;
  }
}
