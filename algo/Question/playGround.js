// *- Remove Duplicate from an array
// * twoSum
// * twoSumSorted
// *- Longest Subarray with Sum K: Given an array, find the length of the longest subarray that sums to `K`.
// *- Currying
// *- numberToExcelColumn
// * fibonacci with Memo - https://www.youtube.com/watch?v=lnBxB7O9mac&ab_channel=RizwanKhan (10: 19)
// * moveZeroesToRight (both sol)
// * Move ZeroesToLeft
// - Rotate an Array: Given an array, rotate it to the right by k steps.
// - Is Anagram
// - Kth Largest Element: Find the kth largest element in an array.
// *- Longest Subarray with Sum K: Given an array, find the length of the longest subarray that sums to `K`.

function removeDup(arr) {
  if (!arr.length) return [];

  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[count]) {
      count++;
      arr[count] = arr[i];
    }
  }
  console.log(count);

  arr.length = count + 1;

  return arr;
}

// console.log(removeDup([11, 2, 4, 2, 11]));

function twoSum(arr, k) {
  if (!arr.length) return null;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (obj[temp] !== undefined) {
      return [obj[temp], i];
    }

    obj[arr[i]] = i;
  }
  return null;
}

function twoSumSorted(arr, k) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum == k) {
      return [left, right];
    } else if (sum < k) {
      left++;
    } else right--;
  }
  return null;
}

// console.log(twoSumSorted([11, 12, 14, 22, 31], 25));

function maxSubArr(arr) {
  let maxCurrent = arr[0],
    maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

console.log(maxSubArr([34, -50, 42, 14, -5, 86]));
// Example 1:
// Input: [-2, -3, 4, -1, -2, 1, 5, -3]
// Output: The maximum subarray sum is: 7

// Example 2:
// Input: [1, 2, 3, 4]
// Output: The maximum subarray sum is: 10

// Example 3:
// Input: [-1, -2, -3, -4]
// Output: The maximum subarray sum is: -1

// Example 4:
// Input: [34, -50, 42, 14, -5, 86]
// Output: The maximum subarray sum is: 137

// Example 5:
// Input: [8, -19, 5, -4, 20]
// Output: The maximum subarray sum is: 21
