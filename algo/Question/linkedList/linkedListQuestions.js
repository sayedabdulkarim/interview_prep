//https://www.youtube.com/watch?v=iRtLEoL-r-g&list=PLgUwDviBIf0r47RKH7fdWN54AbWFgGuii (playlist)

// 2 --> 5 --> 7
/**
 * SINGLE LINEKD LIST
 * ================
 * push
 * traverse
 * pop
 * shift
 * unshift
 * get
 * set
 * insert
 * delete
 * reverse
 * print
 * findMiddleNode
 * removeDuplicates
 * moveLastToFirst
 */

/**
 * DOUBLE LINEKD LIST
 * ================
 * push
 * traverse
 * pop
 * shift
 * unshift
 * get
 * set
 * insert
 * delete
 * reverse
 * print
 * reversePrint
 *
 *
 * Find If Two Linked List Have Intersection Point
 * hasCycle
 */

/**
 * Find Kth Node From Back In Singly Linked List
 */

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class SingleLinkedList {
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
    ++this.length;
    // console.log(newNode, " new");
  }

  traverse(idx) {
    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findMiddleIdx() {
    let length = this.length;
    return Math.floor(length / 2);
  }

  findMiddleNode() {
    const middleIdx = this.findMiddleIdx();
    return this.traverse(middleIdx);
  }

  removeDuplicates() {
    let current = this.head;

    for (let i = 0; i < this.length - 1; i++) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
        --this.length;
      } else {
        current = current.next;
      }
    }
  }

  moveLastToFirst() {
    const temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp;
  }

  static findIntersection(list1, list2) {
    let len1 = 0,
      len2 = 0;
    let head1 = list1.head,
      head2 = list2.head;

    // Calculate length of list1
    while (head1) {
      len1++;
      head1 = head1.next;
    }

    // Calculate length of list2
    while (head2) {
      len2++;
      head2 = head2.next;
    }

    // Reset heads
    head1 = list1.head;
    head2 = list2.head;

    // Find difference in lengths
    let diff = Math.abs(len1 - len2);

    // Move head of longer list 'diff' steps ahead
    if (len1 > len2) {
      for (let i = 0; i < diff; i++) {
        head1 = head1.next;
      }
    } else {
      for (let i = 0; i < diff; i++) {
        head2 = head2.next;
      }
    }

    // Traverse both lists simultaneously
    while (head1 && head2) {
      if (head1 === head2) {
        return head1; // Intersection point found
      }
      head1 = head1.next;
      head2 = head2.next;
    }

    return null; // No intersection point
  }

  static hasCycle(head) {
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
}

const single = new SingleLinkedList();

single.push(2);
single.push(3);
single.push(3);
single.push(4);
single.push(4);
single.push(4);

// console.log(single.findMiddleNode(), " sinnn");
console.log(single, " sinnn");
single.removeDuplicates();
console.log(single, " afterrr");
single.moveLastToFirst();
console.log(single, " moveddd");
// console.log(single.traverse(5), " topp");
// console.log(single.FindKFromBack(3), " bottom");

///Find If Two Linked List Have Intersection Point

// const single = new SingleLinkedList();
// single.push(2);
// single.push(3);
// const commonNode = new Node(4);
// single.tail.next = commonNode;
// single.tail = commonNode;
// single.push(5);

// const single2 = new SingleLinkedList();
// single2.push(1);
// single2.push(11);
// single2.tail.next = commonNode; // Make them intersect at commonNode
// single2.tail = commonNode;
// single2.push(5);

// console.log(SingleLinkedList.findIntersection(single, single2)); // Should return the common node

// console.log(SingleLinkedList.findIntersection(single, single2));
