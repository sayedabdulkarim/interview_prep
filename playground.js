// 2. Remove Duplicates from Sorted Array
const removeDuplicatesFromSortedArray = (arr) => {
  // Only works with sorted arrays
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  if (arr.length === 0) return 0;

  let i = 0; // slow pointer

  // j is the fast pointer
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // Return the length of unique elements
  return i + 1;
};

// Example usage:
console.log("Remove Duplicates (unsorted array):");
console.log(removeDuplicates([1, 3, 2, 3, 4, 1, 5])); // [1, 3, 2, 4, 5]

console.log("\nRemove Duplicates from Sorted Array:");
const sortedArr = [1, 1, 2, 2, 3, 4, 4, 5];
const length = removeDuplicatesFromSortedArray(sortedArr);
console.log("Length of unique elements:", length);
console.log(
  "Array after removal (first " + length + " elements):",
  sortedArr.slice(0, length)
); // [1, 2, 3, 4, 5]

console.log("\nFilter Unique Elements:");
console.log(filterUni([1, 3, 2, 3, 4, 1, 5])); // [1, 3, 2, 4, 5]
