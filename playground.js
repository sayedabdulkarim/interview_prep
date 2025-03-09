// # 1. Remove Duplicates from Array examples

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(
  removeDuplicates([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
);

// Original incorrect version:
const filterUniIncorrect = (arr) => {
  const uniArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniArr.indexOf(arr[i] === -1)) {
      // Wrong! Parentheses in wrong place
      uniArr.push(arr[i]);
    }
  }
  return uniArr;
};

// Corrected version:
const filterUni = (arr) => {
  const uniArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniArr.indexOf(arr[i]) === -1) {
      // Correct! Proper parentheses placement
      uniArr.push(arr[i]);
    }
  }
  return uniArr;
};

// Test all versions
const testArray = [1, 2, 2, 3, 3, 4, 5, 5];
console.log("\n=== Testing with array:", testArray, "===");

console.log("Incorrect version (original):", filterUniIncorrect(testArray));
console.log("Corrected version:", filterUni(testArray));
console.log("Set version:", removeDuplicates(testArray));

// More test cases
console.log("\n=== More Test Cases ===");
console.log(filterUni([1, 1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(filterUni([1, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(filterUni([1, 2, 3])); // [1, 2, 3]

/* Explanation of the issue:

Original (Wrong):
if(uniArr.indexOf(arr[i] === -1))
This evaluates as: uniArr.indexOf(false) or uniArr.indexOf(true)
Because (arr[i] === -1) evaluates to a boolean

Corrected:
if(uniArr.indexOf(arr[i]) === -1)
This correctly checks if the element is NOT in the array

How indexOf works:
- Returns -1 if element is not found in array
- Returns index position (0 or greater) if element is found

Example walkthrough for [1, 2, 2, 3]:
1. First element (1):
   uniArr = [] → indexOf(1) = -1 → push(1) → uniArr = [1]
   
2. Second element (2):
   uniArr = [1] → indexOf(2) = -1 → push(2) → uniArr = [1, 2]
   
3. Third element (2):
   uniArr = [1, 2] → indexOf(2) = 1 → skip
   
4. Fourth element (3):
   uniArr = [1, 2] → indexOf(3) = -1 → push(3) → uniArr = [1, 2, 3]
*/
