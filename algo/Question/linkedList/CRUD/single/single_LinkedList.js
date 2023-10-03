// 10 --> 16 --> 20

// linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// }

/// initial

// class LinkedList {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };

//     this.tail = this.head;

//     this.length = 1;
//   }
// }

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }
  //insert to the last
  append(data) {
    const newNode = {
      value: data,
      next: null,
    };

    this.tail.next = newNode; ///     this.tail = this.head;
    this.tail = newNode;

    ++this.length;
  }
  //insert to the first
  prepend(data) {
    const newNode = {
      value: data,
      next: this.head,
    };

    this.head = newNode;

    ++this.length;
  }

  //traverse
  traverseToIndex(index) {
    // Check for index out of bounds
    if (index >= this.length || index < 0) {
      return null;
    }

    let currentNode = this.head;

    // Traverse the linked list until the index is reached
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    // Return the node at that index
    console.log(currentNode, " cccc");
    return currentNode;
  }

  //insert to the index
  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
    };

    const findCurrentNode = this.traverseToIndex(index);
    const findNextNode = this.traverseToIndex(index + 1);

    // console.log(findCurrentNode, " findCurrentNode");
    // console.log(findNextNode, " findNextNode");
    findCurrentNode.next = newNode;
    newNode.next = findNextNode;

    ++this.length;
  }
  delete(index) {
    const findCurrentNode = this.traverseToIndex(index - 1);
    const findNextNode = this.traverseToIndex(index + 1);

    // console.log(findCurrentNode, " findCurrentNode");
    // console.log(findNextNode, " findNextNode");
    findCurrentNode.next = findNextNode;

    --this.length;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      console.log(current, " crrr");
      next = current.next; // Store next node
      current.next = prev; // Reverse current node's pointer
      prev = current; // Move pointers one position ahead for next iteration
      current = next;
    }

    // Swap head and tail
    [this.head, this.tail] = [this.tail, this.head];

    //OR

    //const temp = this.head;
    // this.head = this.tail;
    // this.tail = temp;
  }

  //   Additional Features:

  // Add a method to find the middle element of the linked list.
  // Add a method to detect a cycle in the linked list.
  // Add a method to merge two sorted linked lists into a new sorted list.
}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList, " first");
myLinkedList.append(16);
// console.log(myLinkedList, "  seconffff");
myLinkedList.append(20);
// console.log(myLinkedList, "  third");
// myLinkedList.prepend(2);
// console.log(myLinkedList, "  pre first");

// myLinkedList.insert(0, 5);
// console.log(myLinkedList, " inserrrr");
// myLinkedList.prepend(5);
console.log(myLinkedList, "  b4");
// console.log(myLinkedList.length, " lengthhh");
// myLinkedList.traverseToIndex(3);
// myLinkedList.delete(0);
// console.log(myLinkedList, " after delete");
// console.log(myLinkedList.length, " lengthhh");
myLinkedList.reverse();
console.log(myLinkedList, " reverseeee");
// console.log(myLinkedList.length, " length reveres");
