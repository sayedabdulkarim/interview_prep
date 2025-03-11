// Remove Duplicates from Sorted Array

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// more examples
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(
  removeDuplicates([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
);
