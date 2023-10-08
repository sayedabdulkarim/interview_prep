function naiveSearch(str, subStr) {
  const strLength = str.length;
  const subStrLength = subStr.length;

  for (let i = 0; i <= strLength - subStrLength; i++) {
    for (let j = 0; j < subStrLength; j++) {
      if (str[i + j] !== subStr[j]) {
        break;
      }
      if (j === subStrLength - 1) {
        return i;
      }
    }
  }
  return -1;
}

console.log(naiveSearch("hello world", "llo")); // Output: 2 (Index where the substring 'llo' starts)
console.log(naiveSearch("hello world", "xyz")); // Output: -1 (Substring 'xyz' not found)

// Example usage:
console.log(naiveStringSearch("hello world, hello wor", "wor")); // Output should be [0, 13]
console.log("hello world, hello wor".length);
