// function isValidParntheses(s) {
//   const stack = [];
//   const map = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (const char of s) {
//     if (["(", "{", "["].includes(char)) {
//       stack.push(char);
//     } else {
//       const topElement = stack.pop();
//       if (map[char] !== topElement) {
//         console.log(stack, " sss");
//         return false;
//       }
//     }
//   }

//   console.log(stack, " stackk");
//   return stack.length === 0;
// }

function isValidParentheses(str) {
  const arr = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i of str) {
    if (["(", "{", "["].includes(i)) {
      arr.push(i);
    } else {
      // const poppedElem = arr.pop();
      // console.log(poppedElem, " pop");
    }
  }
  return arr;
}

console.log(isValidParentheses("()")); // Output: true
// console.log(isValidParentheses("()[]{}")); // Output: true
// console.log(isValidParentheses("(]")); // Output: false
// console.log(isValidParentheses("([)]")); // Output: false
// console.log(isValidParentheses("{[]}")); // Output: true
