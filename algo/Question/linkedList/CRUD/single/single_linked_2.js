/**
 * SINGLE LINEKD LIST
 * ================
 * push
 * traverse
 * pop // take out from last
 * shift // take out from first
 * unshift // insert from first
 * get
 * set
 * insert
 * delete
 * reverse
 * reverseRecursive
 * print
 * FindKFromBack
 * findMiddleNode
 *  removeDuplicates
 */

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ///if push set the tail next and tail with newNode
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.length;
    }
  }

  traverse(idx) {
    let currentNode = this.head;
    // for (let i = 0; i < this.length; i++) { // for all
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    // console.log(currentNode, " crrnt");
    return currentNode;
  }

  // 5 --> 6 --> 7
  //remove from last
  pop() {
    // remve from last
    if (!this.head) return null; // if list is empty
    if (this.length === 1) {
      // if list is of length 1
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = this.traverse(this.length - 2);
      this.tail = prevNode;
      prevNode.next = null;
    }
    --this.length;
  }

  //remove from first
  shift() {
    // remove from first
    if (!this.head) return null;
    const firstIdxNode = this.traverse(1);
    this.head = firstIdxNode;
    --this.length;
  }

  //insert to the first
  unshift(val) {
    //add from first
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
    } else {
      const prevHead = this.head;
      newNode.next = prevHead;
      this.head = newNode;
    }
    ++this.length;
  }

  //get the idx value
  get(idx) {
    if (idx < 0 || idx == this.length) return null;

    const getCurrent = this.traverse(idx);
    console.log(getCurrent, " getCurrent");
  }

  //set the idx value
  set(idx, val) {
    if (idx < 0 || idx == this.length) return null;
    let getCurrent = this.traverse(idx);
    if (getCurrent) {
      getCurrent.value = val;
    }
  }

  //add to particular idx
  insert(idx, val) {
    const newNode = new Node(val);

    const getCurrent = this.traverse(idx);

    newNode.next = getCurrent.next;
    getCurrent.next = newNode;
    this.length++;
  }

  //delete a particular idx node
  delete(idx) {
    if (idx == 0) return this.shift();
    if (idx == this.length - 1) return this.pop();
    else {
      const getPrev = this.traverse(idx - 1);
      const getNext = this.traverse(idx + 1);
      getPrev.next = getNext;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      // console.log(current, " crrr");
      next = current.next; // Store next node
      current.next = prev; // Reverse current node's pointer
      prev = current; // Move pointers one position ahead for next iteration
      current = next;
    }
    this.head = prev;
  }

  reverseRecursive(head = this.head) {
    // base case
    if (!head || !head.next) {
      this.head = head;
      return head;
    }

    // recursive case
    let reversedRest = this.reverse(head.next);
    head.next.next = head;
    head.next = null;

    return reversedRest;
  }

  print() {
    const arr = [];
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  FindKFromBack(idx) {
    if (idx < 0 || idx >= this.length) {
      return null; // Edge case: idx out of bounds
    }
    if (!this.head) {
      return null; // Edge case: list is empty
    }

    let currentNode = this.head;
    for (let i = this.length - 1; i > idx; i--) {
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

  moveLastValueToFirst() {
    const temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp;
  }

  /////////////////////////////////////////

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

  addCycle(index) {
    const node = this.traverse(index);
    if (!node) {
      console.log("Invalid index");
      return;
    }
    this.tail.next = node;
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

const single = new SingleLinkedList();
single.push(5);
single.push(6);
single.push(7);
single.push(8);
single.push(9);
// single.traverse(single.length - 2);
console.log(single.print(), " before");
// single.set(1, 10);
// single.set(2, 11);
// single.get(1);
// single.pop();
// single.shift();
// single.shift();
single.reverse();
console.log(single.print(), " after");
