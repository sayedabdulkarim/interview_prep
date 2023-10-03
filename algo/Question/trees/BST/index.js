// Insert: Adds a new node to the tree in the correct position.
// Find: Searches for a node with a specific value.
// Delete: Removes a node from the tree.
// Traverse: Traverses the tree in some order (in-order, pre-order, post-order).
// Min/Max: Finds the minimum or maximum value.
// Size: Returns the number of nodes in the tree.
// Height: Returns the height of the tree.
// IsBalanced: Checks if the tree is balanced.
// IsEmpty: Checks if the tree is empty.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert method
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    // for (;;) {
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Find method
  find(value) {
    if (this.root === null) return false;

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //tree traversal

  bfs() {
    const queue = [];
    const result = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Dequeue from the front
      result.push(currentNode.value); // Process the node's value

      if (currentNode.left) {
        queue.push(currentNode.left); // Enqueue left child
      }

      if (currentNode.right) {
        queue.push(currentNode.right); // Enqueue right child
      }
    }

    return result;
  }

  // Inorder Traversal
  inorder(root = this.root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  // Preorder Traversal
  preorder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  // Postorder Traversal
  postorder(root = this.root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
}

// Test the BinarySearchTree
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.find(5)); // Output: true
console.log(bst.find(12)); // Output: false
