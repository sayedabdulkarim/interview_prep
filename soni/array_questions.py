# Array Questions for Interview Preparation

# =============== QUESTIONS OVERVIEW ===============

# EASY QUESTIONS:
# 1. Remove Duplicates from Array           # [1,1,2,2,3] → [1,2,3] | [1,2,2,3,3,3,4] → [1,2,3,4]
# 2. Remove Duplicates from Sorted Array    # [1,1,2,3,3] → [1,2,3] | [0,0,1,1,1,2,2] → [0,1,2]
# 3. Two Sum                               # [2,7,11,15], 9 → [0,1] | [3,2,4], 6 → [1,2]
# /////
# 6.  Merge Sorted Array                    # [1,3,5],[2,4,6] → [1,2,3,4,5,6] | [1,2,3],[4,5] → [1,2,3,4,5]
# 10. Best Time to Buy and Sell Stock      # [7,1,5,3,6,4] → 5 | [7,6,4,3,1] → 0
# 16. Plus One                            # [1,2,3] → [1,2,4] | [9,9,9] → [1,0,0,0]
# 22. Maximum Subarray                     # [-2,1,-3,4,-1,2,1,-5,4] → 6 | [1] → 1

# MEDIUM QUESTIONS:
# 4. 3 Sum                                # [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]] | [0,0,0] → [[0,0,0]]
# 5. Rotate Array                         # [1,2,3,4,5],k=2 → [4,5,1,2,3] | [1,2],k=3 → [2,1]
# 7. Insert Delete GetRandom O(1)         # add(1),remove(2),getRandom() | add(2),remove(1),getRandom()
# 8. Sort Array                          # [5,2,3,1] → [1,2,3,5] | [5,1,1,2,0,0] → [0,0,1,1,2,5]
# 9. Product of Array Except Self        # [1,2,3,4] → [24,12,8,6] | [-1,1,0,-3,3] → [0,0,9,0,0]
# 11. Container With Most Water          # [1,8,6,2,5,4,8,3,7] → 49 | [1,1] → 1
# 13. Boat Trip                          # [2,2,2,3],3,3 → true | [3,2,2,1],3,3 → false
# 14. Rotate Image                       # [[1,2],[3,4]] → [[3,1],[4,2]] | [[1]] → [[1]]
# 15. Set Matrix Zeros                   # [[1,1,1],[1,0,1]] → [[1,0,1],[0,0,0]] | [[0,1],[1,1]] → [[0,0],[0,1]]
# 17. Kth Largest Element               # [3,2,1,5,6,4],k=2 → 5 | [3,2,3,1,2,4,5,5,6],k=4 → 4
# 18. Next Permutation                  # [1,2,3] → [1,3,2] | [3,2,1] → [1,2,3]
# 19. Subsets                          # [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] | [0] → [[],[0]]
# 21. Min Stack                        # push(-2),push(0),push(-3),getMin(),pop(),top() | push(0),getMin()
# 23. Spiral Matrix                    # [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5] | [[1]] → [1]

# HARD QUESTIONS:
# 12. Longest Consecutive Sequence     # [100,4,200,1,3,2] → 4 | [0,3,7,2,5,8,4,6,0,1] → 9
# 20. Trapping Rain Water             # [0,1,0,2,1,0,1,3,2,1,2,1] → 6 | [4,2,0,3,2,5] → 9
# 24. Merge K Sorted Lists           # [[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6] | [[1]] → [1]

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