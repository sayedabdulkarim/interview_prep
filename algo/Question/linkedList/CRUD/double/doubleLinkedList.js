class DoublyLinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  // Append to the end
  append(data) {
    const newNode = {
      value: data,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    ++this.length;
  }

  // Prepend to the start
  prepend(data) {
    const newNode = {
      value: data,
      next: this.head,
      prev: null,
    };

    this.head.prev = newNode;
    this.head = newNode;
    ++this.length;
  }

  // Traverse to index
  traverseToIndex(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // Insert at index
  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
      prev: null,
    };

    const currentNode = this.traverseToIndex(index - 1);
    const followingNode = currentNode.next;

    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = followingNode;
    followingNode.prev = newNode;

    ++this.length;
  }

  // Delete at index
  delete(index) {
    const currentNode = this.traverseToIndex(index - 1);
    const nodeToDelete = currentNode.next;
    const followingNode = nodeToDelete.next;

    currentNode.next = followingNode;
    followingNode.prev = currentNode;

    --this.length;
  }

  // Reverse the list
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }
}

const dbl = new DoublyLinkedList(2);
dbl.append(3);
dbl.append(4);
console.log(dbl, " dbl before");
