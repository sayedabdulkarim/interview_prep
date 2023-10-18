class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.length;
  }

  traverse(idx) {
    if (!this.head) return null;

    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  addCycle(index) {
    const node = this.traverse(index);
    if (!node) {
      console.log("Invalid index");
      return;
    }
    this.tail.next = node;
  }
  hasCycle(head) {
    let tortoise = head;
    let hare = head;

    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        return true;
      }
    }

    return false;
  }

  hasCycle() {
    let slow = this.head; // tortoise
    let fast = this.head; //hare

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

const singleOne = new SingleLinkedList();

singleOne.push(11);
singleOne.push(22);
singleOne.push(33);
// singleOne.push(44);
// singleOne.push(55);

// Add a cycle at index 2 (Value 3 will be the start of the cycle)
// console.log(singleOne, " b444");
// console.log(singleOne.traverse(singleOne.length - 2), " sss");
// singleOne.addCycle(1);

console.log(singleOne.hasCycle(singleOne.head));
// singleOne.shift();
// console.log(singleOne.traverse(0), " afterr");
