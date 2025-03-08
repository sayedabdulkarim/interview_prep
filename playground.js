// # 4. Add Digits
// #    - Difficulty: Easy
// #    - Note: Asked in Apollo.io
// #    Question: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Add Digits Problem
// Question: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Solution 1: Using While Loop (Iterative)
const addDigitsIterative = (num) => {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

// Solution 2: Using Recursion
const addDigitsRecursive = (num) => {
  return num < 10
    ? num
    : addDigitsRecursive(
        num
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0)
      );
};

// Solution 3: Mathematical Solution (Digital Root)
const addDigitsMath = (num) => {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
};

// Solution 4: Simple Loop Without String Conversion
const addDigitsLoop = (num) => {
  while (num > 9) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};

// Solution 5: One-Line ES6 Solution
const addDigitsOneLine = (num) => 1 + ((num - 1) % 9);

// Test cases
const testCases = [38, 123, 456, 789, 10, 11, 12, 340];

console.log("=== Testing Different Solutions ===");
testCases.forEach((num) => {
  console.log(`\nInput: ${num}`);
  console.log("Iterative Solution:", addDigitsIterative(num));
  console.log("Recursive Solution:", addDigitsRecursive(num));
  console.log("Mathematical Solution:", addDigitsMath(num));
  console.log("Loop Solution:", addDigitsLoop(num));
  console.log("One-Line Solution:", addDigitsOneLine(num));
});

/* Explanation of Solutions:

1. Iterative (While Loop):
   - Converts number to string, splits into digits, adds them
   - Repeats until single digit
   - Time: O(log n), Space: O(1)

2. Recursive:
   - Same as iterative but uses recursion
   - More elegant but uses call stack
   - Time: O(log n), Space: O(log n)

3. Mathematical (Digital Root):
   - Uses the concept of digital root in mathematics
   - Formula: dr(n) = 1 + ((n-1) % 9)
   - Time: O(1), Space: O(1)
   - Most efficient solution!

4. Simple Loop:
   - Uses modulo and division to get digits
   - Avoids string conversion
   - Time: O(log n), Space: O(1)

5. One-Line:
   - Same as mathematical solution but more concise
   - Time: O(1), Space: O(1)

Example walkthrough for 38:
38 → 3 + 8 = 11 → 1 + 1 = 2

Mathematical trick explanation:
- Any number can be expressed as: n = d0 + d1*10 + d2*100 + ...
- This is equivalent to: n = d0 + d1 + d2 + ... + k*9
- Therefore, n ≡ d0 + d1 + d2 + ... (mod 9)
*/

console.log(addDigits(38));

// MORE EXAMPLES with answers
console.log(addDigits(123)); // 6
console.log(addDigits(456)); // 6
console.log(addDigits(789)); // 6
console.log(addDigits(10)); // 1
console.log(addDigits(11)); // 2
console.log(addDigits(12)); // 3
console.log(addDigits(340)); // 7

// Let's understand reduce with simple examples first
const numbers = [1, 2, 3, 4];

// 1. Simple sum using reduce
const sum = numbers.reduce((accumulator, currentNumber) => {
  console.log(`Accumulator: ${accumulator}, Current Number: ${currentNumber}`);
  return accumulator + currentNumber;
}, 0);
console.log("Sum:", sum);

// 2. Same sum using regular for loop (to understand what reduce does)
let forLoopSum = 0;
for (let num of numbers) {
  forLoopSum += num;
}
console.log("For Loop Sum:", forLoopSum);

// Now let's break down the addDigits solution step by step
const addDigitsWithSteps = (num) => {
  // Step 1: Convert number to string
  const numString = num.toString();
  console.log("Number to string:", numString);

  // Step 2: Split string into array of characters
  const digitsArray = numString.split("");
  console.log("Split into array:", digitsArray);

  // Step 3: Convert each character back to number and sum using reduce
  const sum = digitsArray.reduce((acc, digit) => {
    const currentNumber = parseInt(digit);
    console.log(`Accumulator: ${acc}, Current Digit: ${currentNumber}`);
    return acc + currentNumber;
  }, 0);
  console.log("Final sum:", sum);

  // Step 4: Recursively call if sum is still > 9
  return sum < 10 ? sum : addDigitsWithSteps(sum);
};

// Same solution written without reduce (more verbose but easier to understand)
const addDigitsWithoutReduce = (num) => {
  if (num < 10) return num;

  const digits = num.toString().split("");
  let sum = 0;

  for (let digit of digits) {
    sum += parseInt(digit);
  }

  return sum < 10 ? sum : addDigitsWithoutReduce(sum);
};

// Test both versions
console.log("\n=== Testing with number 38 ===");
console.log("With reduce steps:");
console.log(addDigitsWithSteps(38));

console.log("\nWithout reduce:");
console.log(addDigitsWithoutReduce(38));

/* Explanation of reduce:
   reduce((accumulator, currentValue) => { ... }, initialValue)
   
   For number 38:
   1. First converts "38" to ["3", "8"]
   2. reduce starts with:
      - initialValue = 0 (accumulator starts at 0)
      - First iteration: 
        accumulator = 0, currentValue = "3" → 0 + 3 = 3
      - Second iteration:
        accumulator = 3, currentValue = "8" → 3 + 8 = 11
   3. Final result: 11
   
   It's like doing:
   let sum = 0;
   sum += parseInt("3");  // sum = 3
   sum += parseInt("8");  // sum = 11
*/
