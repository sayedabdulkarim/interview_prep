function isValidParntheses(str) {
  const stack = [];

  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(map).includes(str[i])) {
      stack.push(str[i]);
    } else {
      const poppedNode = stack.pop();
      if (map[poppedNode] !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParntheses("()")); // Output: true
console.log(isValidParntheses("{[]}")); // Output: true
console.log(isValidParntheses("(]")); // Output: false
console.log(isValidParntheses("([)]")); // Output: false
console.log(isValidParntheses("([)]{}}{")); // Output: false
