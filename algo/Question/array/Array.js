/**
 * DEFN
 *
 * An array is a data structure that stores a collection of items, which can be of the same or different types, at contiguous memory locations.
 * The elements can be accessed randomly by indexing into the array.
 * In simple terms, you can think of an array as a list of items stored at adjoining memory locations.
 */

const array = [64, 34, 25, 12, 22, 11, 90, 64];
const rotateArray = [2, 3, 4, 5, 6, 7];
const removeDupArr = [0, 0, 1, 1, 2, 2, 3, 3];
const twoSum = [2, 3, 4, 5, 6, 7];
const maxSubArr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArr2 = [1, 2, 3, -1, 5, 6];

const obj1 = {
  one: 1,
  two: 2,
  three: 3,
};

const obj2 = {
  one: 1,
  two: 2,
  three: 223,
};

/////////////////
function maxElem(nums) {
  if (nums.length === 0) return null; // Handle empty array
  let max = nums[0]; // Initialize with the first element

  for (let i = 1; i < nums.length; i++) {
    // Start loop from 1 as nums[0] is already in max
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

function maxElem(arr) {
  if (!arr.length) return null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      // Swap the elements
      [arr[0], arr[i]] = [arr[i], arr[0]];
      // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr[0];
  // return arr[arr.length - 1];
}

console.log(maxElem([5, 1, 8, 19, 2, 5, 7])); // Should output 19

function minElem(nums) {
  if (nums.length === 0) return null; // Handle empty array
  let min = nums[0]; // Initialize with the first element

  for (let i = 1; i < nums.length; i++) {
    // Start loop from 1 as nums[0] is already in min
    if (nums[i] < min) min = nums[i];
  }
  return min;
}

function reverseArr(arr) {
  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  }
  return arr;
}

function reverseArr(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    console.log(i, " ii");
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}

function moveZeroesInPlace(nums) {
  let pos = 0; // position to place the next non-zero element

  // First, loop through the array to move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Then, fill the remaining positions with zeros
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
}

function moveZeroesNotInPlace(nums) {
  let pos = 0;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      res.push(nums[i]);
      pos++;
    }
  }

  for (let i = pos; i < nums.length; i++) {
    res.push((nums[i] = 0));
  }

  return res;
}

function sort(arr) {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (i = 0; i <= arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSorted = false;
      }
    }
  }

  return arr;
}

// console.log(reverseArr([1, 2, 3])); // Output should be [3, 2, 1]

function secondLargestNumberInAnArray(arr) {
  //sort
  var sortArr = arr.sort((a, b) => a - b);
  //Sets
  var uni = new Set(sortArr);
  //changed to Arr
  var changedToArr = Array.from(uni);
  //(length -1)
  return changedToArr[changedToArr.length - 2];
}

function rotateArrByK(arr, k) {
  var res = [];

  ///push the k numbers upto k count from the last
  for (i = arr.length - k; i <= arr.length - 1; i++) {
    res.push(arr[i]);
  }

  //merge [...res, ...arr]
  const merge = [...res, ...arr]; // [5,4,3,1,2,3,4,5]

  //slice - merge.slice(merge.length, marge.length-k)
  return merge.slice(0, arr.length);
  // return res;
}

function removeDup(arr) {
  //create Var
  var uniArr = [];

  //loop ( check if uniArr.indexOf(i) !== -1) the push

  for (i of arr) {
    if (uniArr.indexOf(i) == "-1") {
      uniArr.push(i);
    }
  }

  return uniArr;
}

//without extra space
function removeDuplicatesFromUnsortedArray(arr) {
  arr.sort((a, b) => a - b);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // Trim the remaining array
  arr.length = i + 1;
  return arr;
}

////////////////////////

function containsDuplicate(nums) {
  let sets = new Set(nums);
  let changedToArr = Array.from(sets);

  console.log(nums, " numss");
  console.log(changedToArr, " changeddd");

  return changedToArr.length == nums.length ? false : true;
}

function containsDuplicate(arr) {
  function getObj(arr) {
    var obj = {};

    for (let i in arr) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    return obj;
  }

  ///
  var getKeyNObj = getObj(arr);

  for (i in getKeyNObj) {
    if (getKeyNObj[i] >= 2) {
      return false;
    }
  }

  return true;
}

function getObj(arr) {
  var obj = {};

  for (let i in arr) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  return obj;
}

//Sorting algorithms like quicksort, mergesort, or the native JavaScript .sort() method generally have a time complexity of O(n log n).
function isAnagram(s, t) {
  //helper for checking objects are equal ?
  function objectsAreEqual(a, b) {
    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let i = 0; i < aKeys.length; i++) {
      if (aKeys[i] !== bKeys[i] || a[aKeys[i]] !== b[bKeys[i]]) {
        return false;
      }
    }

    return true;
  }
  ////////////////////////////////////////////////////////

  function getObj(arr) {
    var obj = {};

    for (i in arr) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    return obj;
  }

  ///////////////////////////////

  const sObj = getObj(s);
  const tObj = getObj(t);

  console.log({
    sObj,
    tObj,
  });

  return objectsAreEqual(sObj, tObj);
}

//Sorting algorithms like quicksort, mergesort, or the native JavaScript .sort() method generally have a time complexity of O(n log n).
function isAnagram(str1, str2) {
  return [...str1].sort().join("") === [...str2].sort().join("");
}

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

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // return null if no such elements are found
}

function threeSum(nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

// Test the function
// console.log(threeSum([1, 1, 2, 3, 4, 5], 6));  // Output: [ [ 1, 1, 4 ], [ 1, 2, 3 ] ]
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));  // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

// console.log(twoSumSorted([2, 3, 5, 7], 9));  // Should return [0, 3]

function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  // Left to right pass to fill in products from elements to the left
  let leftProduct = 1;

  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];

    console.log(leftProduct, " leftttt");
  }

  console.log(output, " output after left pass"); // This should print [1, 1, 2]

  //  Right to left pass to fill in products from elements to the right
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  console.log(output, " final output"); // This should print [1, 3, 12]
  return output;
}

function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}

function truncateString(str, num) {
  return `${str.slice(0, num)}...`;
}

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    console.log(i, " arrr[i]");
    result.push(arr.slice(i, i + size));
    //  i <= arr.length - size && result.push(arr.slice(i, i + size)); // for not adding the last index as well
  }

  return result;
}

//brute force
function maxSubArray(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

function maxSubArr(arr) {
  //kadane's Algo
  var maxCurrent = arr[0];
  var maxGlobal = arr[0];

  for (i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

//https://www.youtube.com/watch?v=ankCD9ylvBE&list=PLe3J6mZBq1xWLBJG-uUwxpJ8cUpTzoFvU&index=6
function maxArea(height) {
  let max = 0; // To store the maximum area
  let i = 0; // Left pointer
  let j = height.length - 1; // Right pointer

  while (i < j) {
    // Calculate the area between i and j
    let area = Math.min(height[i], height[j]) * (j - i);

    // Update max if the calculated area is greater
    if (area > max) {
      max = area;
    }

    // Move the pointers inward to find potentially greater areas
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}

///////////////////////////////////////

function reverse(nums) {
  if (!nums.length) return null;

  const res = [];

  for (i = nums.length; i > 0; i--) {
    res.push(nums[i - 1]);
  }

  return res;
}

function truncateString(nums, n) {
  let str = "";

  // for (i = 0; i <= nums.length - n; i++) {
  for (i = 0; i < n && i < nums.length; i++) {
    str += nums[i];
  }
  return str;
}

function singleNumber(nums) {
  function getObj(arr) {
    const obj = {};

    for (i of arr) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const getCount = getObj(nums);
  for (i in getCount) {
    if (getCount[i] == 1) {
      return i;
    }
  }
  return false;
}

function KthLargest(nums, n) {
  //sort
  function dSort(arr) {
    let isSorted = false;

    while (!isSorted) {
      isSorted = true;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          const temp = arr[i];

          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          isSorted = false;
        }
      }
    }
    return arr;
  }

  //uniObj
  const getSortedArr = dSort(nums);
  const uniObj = new Set(getSortedArr);

  //change to arr
  const getArr = Array.from(uniObj);

  return getArr[n - 1];
}

function longestSubarrayWithSumK(nums, K) {
  let sum = 0;
  let maxLength = 0;
  const sumIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // If sum equals K, update maxLength
    if (sum === K) {
      maxLength = i + 1;
    }

    // If the sum was K units ago, update maxLength
    if (sumIndexMap.has(sum - K)) {
      maxLength = Math.max(maxLength, i - sumIndexMap.get(sum - K));
    }

    // Save this sum if this is the first time we've seen it
    if (!sumIndexMap.has(sum)) {
      sumIndexMap.set(sum, i);
    }
  }

  return maxLength;
}

function longestSubarrayWithSumK(arr, k) {
  // Initialize an object to store sum-index pairs.
  let sumIndexObj = {};
  // sumIndexObj[0] = -1; // Initial condition
  // Variable to store the maximum length of the subarray with sum k.
  let maxLength = 0;

  // Variable to store the sum of the elements.
  let sum = 0;

  // Loop through the array.
  for (let i = 0; i < arr.length; i++) {
    // Update the sum.
    sum += arr[i];

    // If this sum has not been seen before, add it to the sumIndexObj.
    if (sumIndexObj[sum] === undefined) {
      sumIndexObj[sum] = i;
    }

    // Check if there is a subarray summing to k ending at index i.
    // If so, update maxLength.
    if (sumIndexObj[sum - k] !== undefined) {
      maxLength = Math.max(maxLength, i - sumIndexObj[sum - k]);
    }
  }

  // Debugging line to see the object of sums.
  console.log({
    sumIndexObj,
    sum,
  });

  // Return the maximum length found.
  return maxLength;
}

// const arr = [1, 2, 3, 4, 5];
// const K = 9;
// console.log(longestSubarrayWithSumK(arr, K));  // Output should be 2 because [4, 5] is the longest subarray with sum 9

function majorityElement(nums) {
  //dividedNum
  const dividedNum = Math.floor(nums.length / 2);
  // console.log(dividedNum, " ddd");
  //get count
  function getCount(arr) {
    const obj = {};

    for (i of arr) {
      obj[i] = (obj[i] || 0) + 1;
    }
    return obj;
  }

  const getObj = getCount(nums);
  // console.log(getObj, " getObj");
  let getNum = null;

  for (i in getObj) {
    if (getObj[i] > dividedNum) {
      getNum = parseInt(i);
      break; // for breaking the loop once get the majority
    }
  }

  return getNum;
}

//witout creating extra space
function removeElement(nums, num) {
  let newLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      nums[newLength] = nums[i];
      newLength++;
    }
  }
  return newLength;
}

function removeElement(nums, num) {
  const removedData = [];

  for (i of nums) {
    if (i !== num) {
      removedData.push(i);
    }
  }

  return removedData.length;
}

function findCommon(nums1, nums2) {
  const set1 = new Set(nums1);
  console.log(set1);
  const common = [];

  for (const num of nums2) {
    if (set1.has(num)) {
      common.push(num);
      set1.delete(num); // Remove to avoid duplicates
    }
  }

  return common;
}

// const arr1 = [1, 1, 2, 2];
// const arr2 = [1, 2, 2];

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

///
function mergeIntervals(intervals) {
  // Sort the intervals based on their start times.
  intervals.sort((a, b) => a[0] - b[0]);

  console.log(intervals, " in");

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = merged[merged.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      // Overlapping intervals, we merge them.
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      // Non-overlapping intervals, add the current one to the result.
      merged.push(currentInterval);
    }
  }

  return merged;
}

// Test the function
// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// console.log(mergeIntervals(intervals)); // Output should be [[1, 6], [8, 10], [15, 18]]

function mostFrequentElem(nums, k) {
  const obj = {};

  // Count the occurrences of each number
  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  // Sort the unique numbers based on their occurrences
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  // Take the first 'k' numbers from the sorted array
  const kMostFrequent = sorted.slice(0, k).map((entry) => Number(entry[0]));

  return kMostFrequent;
}

// const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6];
// console.log(mostFrequentElem(arr, 2));

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  let dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;
}

// const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(lengthOfLIS(nums)); // Output should be 4, as the longest increasing subsequence is [2, 3, 7, 101].

function allTwice(nums) {
  function getObjCount(arr) {
    const obj = {};

    for (i of arr) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const objCount = getObjCount(nums);
  const getTwiceArr = [];

  for (i in objCount) {
    if (objCount[i] == 2) {
      getTwiceArr.push(+i);
    }
  }

  return getTwiceArr;
}

function nextPermutation(nums) {
  let i = nums.length - 1;

  // Find the first decreasing element from the right
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }

  // If the array is already in descending order, reverse it to get the smallest permutation
  if (i === 0) {
    nums.reverse();
    return;
  }

  // Find the smallest number greater than nums[i - 1] to its right
  let j = nums.length - 1;
  while (nums[j] <= nums[i - 1]) {
    j--;
  }

  // Swap nums[i - 1] and nums[j]
  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

  // Reverse the subarray from i to the end of the array
  let left = i;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// const arr = [4, 2, 5, 1];
// nextPermutation(arr);
// console.log(arr); // Output should be [1, 3, 2]

// 1. Remove all occurrences of a specific value in a sorted array in-place.

function removeOccurrences(arr, value) {
  let j = 0; // Pointer to keep track of the position to place the next non-target value

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[j] = arr[i];
      j++;
    }
  }

  // Remove extra elements
  arr.length = j;

  return j; // Return the new length of the array
}

// Test cases
// console.log(removeOccurrences([1, 2, 2, 3, 4, 5], 2)); // Output should be 4
// console.log(removeOccurrences([5, 5, 5, 5, 5], 5)); // Output should be 0
// console.log(removeOccurrences([1, 2, 3, 4, 5], 6)); // Output should be 5

function longestPalindromicSubstring(s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

// console.log(longestPalindromicSubstring("babad")); // Output will be "bab" or "aba"
// console.log(longestPalindromicSubstring("cbbd")); // Output will be "bb"
