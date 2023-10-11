class Node {
  constructor(val) {
    this.value = val;
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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.tail.next = this.head;
    ++this.length;
  }

  pop() {
    if (!this.head) return null;
    let newTail = this.head;
    let oldTail = this.head;
    for (let i = 0; i < this.length - 1; ++i) {
      newTail = oldTail;
      oldTail = oldTail.next;
    }
    this.tail = newTail;
    this.tail.next = this.head;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTail.value;
  }

  shift() {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.tail.next = this.head;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead.value;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    ++this.length;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < idx; ++i) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  set(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    let currentNode = this.head;
    for (let i = 0; i < idx; ++i) {
      currentNode = currentNode.next;
    }
    currentNode.value = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    ++this.length;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    --this.length;
    return removed.value;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; ++i) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head.next = this.tail;
  }

  traverse(idx) {
    let currentNode = this.head;

    for (i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insertion(value, idx) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else if (idx == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx == this.length - 1) {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
  }
}
