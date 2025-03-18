// • Valid Parentheses
//   - Asked in Forward Network
//   - Check if string has valid parentheses pairs (), [], {}
//   - Example: "()[]{}" is valid, "([)]" is not valid

//solution
const isValid = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

//some valid examples
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("{[]}"));
console.log(isValid("{[()]}"));
console.log(isValid("({[]})"));
