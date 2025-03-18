# Array Questions for Interview Preparation

# =============== QUESTIONS OVERVIEW ===============

# EASY QUESTIONS:
# 1. Remove Duplicates from Array
# 2. Remove Duplicates from Sorted Array
# 3. Two Sum
# 6. Merge Sorted Array
# 10. Best Time to Buy and Sell Stock
# 16. Plus One
# 22. Maximum Subarray

# MEDIUM QUESTIONS:
# 4. 3 Sum
# 5. Rotate Array
# 7. Insert Delete GetRandom O(1) - Google Phone Screen
# 8. Sort Array - Startup
# 9. Product of Array Except Self - Forward Network
# 11. Container With Most Water
# 13. Boat Trip - Agoda
# 14. Rotate Image
# 15. Set Matrix Zeros - Amazon
# 17. Kth Largest Element
# 18. Next Permutation
# 19. Subsets - Sumo Logic
# 21. Min Stack - Meta and Google
# 23. Spiral Matrix - Bird Eye

# HARD QUESTIONS:
# 12. Longest Consecutive Sequence
# 20. Trapping Rain Water
# 24. Merge K Sorted Lists

# =============== DETAILED SOLUTIONS ===============

# ====== EASY QUESTIONS ======
# 1. Remove Duplicates from Array
#    - Difficulty: Easy
#    - Note: Frequently asked
'''
# Method 1: Using Set
# Method 2: Using filter
# Method 3: Using reduce
# Method 4: Using Map
# Method 5: Using Set and filter 
# Method 6: Using for loop - best solution
'''

# 2. Remove Duplicates from Sorted Array
#    - Difficulty: Easy
#    - Note: Frequently asked

'''
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
'''

# 3. Two Sum
#    - Difficulty: Easy
#    - Note: Frequently asked for 2 years of experience

'''
    function twoSum(arr, t) {
  // [2,7,5,9]

  var map = {}; //{ 2: 0, 7: 1, 5: 2, 9: 3 }

  //map[arr[i]] = i
  for (i = 0; i <= arr.length - 1; i++) {
    const complement = t - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    //{ 2: 0, 7: 1, 5: 2, 9: 3 }
    map[arr[i]] = i;
  }

  return map;
}

console.log(twoSum([2, 7, 11, 15], 9));

'''

# 6. Merge Sorted Array
#    - Difficulty: Easy
#    - Note: -

# 10. Best Time to Buy and Sell Stock
#    - Difficulty: Easy
#    - Note: -

# 16. Plus One
#    - Difficulty: Easy
#    - Note: -

# 22. Maximum Subarray
#    - Difficulty: Easy
#    - Note: Frequently asked

# ====== MEDIUM QUESTIONS ======
# 4. 3 Sum
#    - Difficulty: Medium
#    - Note: Follow up for above question

# 5. Rotate Array
#    - Difficulty: Medium
#    - Note: -

# 7. Insert Delete GetRandom O(1)
#    - Difficulty: Medium
#    - Note: Asked in Google phone screen

# 8. Sort Array
#    - Difficulty: Medium
#    - Note: Asked in a startup

# 9. Product of Array Except Self
#    - Difficulty: Medium
#    - Note: Asked in Forward Networe

# 11. Container With Most Water
#    - Difficulty: Medium
#    - Note: -

# 13. Boat Trip
#    - Difficulty: Medium
#    - Note: Asked in Agoda

# 14. Rotate Image
#    - Difficulty: Medium
#    - Note: -

# 15. Set Matrix Zeros
#    - Difficulty: Medium
#    - Note: Frequently asked in Amazon

# 17. Kth Largest Element
#    - Difficulty: Medium
#    - Note: -

# 18. Next Permutation
#    - Difficulty: Medium
#    - Note: -

# 19. Subsets
#    - Difficulty: Medium
#    - Note: Asked in Sumo Logic

# 21. Min Stack
#    - Difficulty: Medium
#    - Note: Frequently asked in Meta and google

# 23. Spiral Matrix
#    - Difficulty: Medium
#    - Note: Asked in Bird Eye

# ====== HARD QUESTIONS ======
# 12. Longest Consecutive Sequence
#    - Difficulty: Hard
#    - Note: -

# 20. Trapping Rain Water
#    - Difficulty: Hard
#    - Note: -

# 24. Merge K Sorted Lists
#    - Difficulty: Hard
#    - Note: -