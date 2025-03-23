// • Odd String Difference
//   - Input: words = ["adc","wzy","abc"]
//   - Output: "abc"
//   - Input: words = ["aaa","bob","ccc","ddd"]
//   - Output: "bob"

function oddStringDifference(words) {
  // Helper function to calculate character differences
  const getCharDifferences = (word) => {
    const differences = [];
    for (let i = 1; i < word.length; i++) {
      differences.push(word.charCodeAt(i) - word.charCodeAt(i - 1));
    }
    return differences;
  };

  // Calculate differences for each word
  const differencesMap = words.map(getCharDifferences);

  // Find the unique pattern
  const patternCount = {};
  for (let i = 0; i < differencesMap.length; i++) {
    const pattern = differencesMap[i].toString();
    if (!patternCount[pattern]) {
      patternCount[pattern] = [];
    }
    patternCount[pattern].push(i);
  }

  // Identify the word with the unique pattern
  for (const pattern in patternCount) {
    if (patternCount[pattern].length === 1) {
      return words[patternCount[pattern][0]];
    }
  }

  return null; // In case no unique pattern is found
}

console.log(oddStringDifference(["adc", "wzy", "abc"])); // abc
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd"])); // bob
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd", "eee"])); // bob
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd", "eee", "fff"])); // bob
