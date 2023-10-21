//STACK - LIFO
/**
 * push
 * pop
 * print
 * peek
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const top = this.first;
      this.first = newNode;
      this.first.next = top;

      //OR
      newNode.next = this.first;
      this.first = newNode;
    }
    ++this.length;
  }

  pop() {
    if (!this.first) return null;
    else if (this.length == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.length;
  }

  print() {
    const res = [];

    let currentNode = this.first;
    for (let i = 0; i < this.length; i++) {
      res.push(currentNode.value);

      currentNode = currentNode.next;
    }

    console.log(res, " resss");
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  //
}

// 3. Evaluate Reverse Polish Notation
function evaluateRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      let result = 0;

      switch (token) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = Math.trunc(operand1 / operand2);
          break;
      }

      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack[0];
}

// Test the function
// const input = ["3", "4", "+", "2", "*", "7", "/"];
// const output = evaluateRPN(input);
// console.log("The result is:", output); // Output should be 2
