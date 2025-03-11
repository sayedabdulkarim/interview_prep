// Helper function to sort string using bubble sort
const sortString = (str) => {
  const arr = str.split("");

  // Bubble sort implementation
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap characters
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr.join("");
};

// isAnagram using our custom sort helper
const isAnagramCustomSort = (s, t) => {
  if (s.length !== t.length) return false;

  const sortedS = sortString(s);
  const sortedT = sortString(t);

  return sortedS === sortedT;
};

// Another approach using character count (more efficient)
const isAnagramCount = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count characters in first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement count for second string
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  // Check if all counts are zero
  return Object.values(charCount).every((count) => count === 0);
};

// Test cases
const testCases = [
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["hello", "olleh"],
  ["", ""],
  ["a", "a"],
];

console.log("=== Testing Different Anagram Solutions ===");
testCases.forEach(([s, t]) => {
  console.log(`\nTesting strings: "${s}" and "${t}"`);
  console.log("Using custom sort:", isAnagramCustomSort(s, t));
  console.log("Using char count:", isAnagramCount(s, t));
});

/* Explanation of sortString helper:
1. Convert string to array using split('')
2. Use bubble sort algorithm:
   - Compare adjacent characters
   - Swap if they're in wrong order
   - Continue until no more swaps needed
3. Join array back to string

Example for "hello":
Initial: ['h','e','l','l','o']
Pass 1: ['e','h','l','l','o']
Pass 2: ['e','h','l','l','o']
Final: "ehllo"

Time Complexity:
- sortString: O(n²) where n is string length
- isAnagramCustomSort: O(n²)
- isAnagramCount: O(n) - more efficient!
*/
