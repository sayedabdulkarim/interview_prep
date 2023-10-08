function naiveStringSearch(haystack, needle) {
  const matches = []; // To store the starting indices of all matches

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matchFound = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        matchFound = false;
        break;
      }
    }

    if (matchFound) {
      matches.push(i);
    }
  }

  return matches;
}

// Example usage:
console.log(naiveStringSearch("hello world, hello wor", "wor")); // Output should be [0, 13]
console.log("hello world, hello wor".length);
