// 1. Find the maximum sum subarray of size `k`.
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (because 5 + 1 + 3 = 9)

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charMap.has(currentChar)) {
      start = Math.max(start, charMap.get(currentChar) + 1);
    }

    charMap.set(currentChar, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test the function
//   console.log(lengthOfLongestSubstring('abcabcbb'));  // Output: 3
//   console.log(lengthOfLongestSubstring('bbbbb'));     // Output: 1
//   console.log(lengthOfLongestSubstring('pwwkew'));    // Output: 3

// 1. Given an array of integers, find all contiguous subarrays that sum up to `k`.

function findSubarraysWithSumK(arr, k) {
  const res = [];
  const map = { 0: [-1] }; // Initialize a map with 0 sum at index -1
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map[sum - k]) {
      // If the sum minus k is in the map, we found a subarray
      for (const index of map[sum - k]) {
        res.push(arr.slice(index + 1, i + 1));
      }
    }

    if (!map[sum]) {
      map[sum] = [];
    }
    map[sum].push(i);
  }

  return res;
}

// Test the function
// console.log(findSubarraysWithSumK([1, 2, 3, 4, 5], 5));

// 2. Find the shortest substring that contains all distinct characters of the input string.
function shortestUniqueSubstring(str) {
  let minLength = Infinity;
  let start = 0;
  let shortestSubstr = "";
  const uniqueChars = new Set(str);
  const charCount = {};

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];

    if (!charCount[endChar]) {
      charCount[endChar] = 0;
    }
    charCount[endChar] += 1;

    while (Object.keys(charCount).length === uniqueChars.size) {
      if (end - start < minLength) {
        minLength = end - start;
        shortestSubstr = str.slice(start, end + 1);
      }

      const startChar = str[start];

      charCount[startChar] -= 1;
      if (charCount[startChar] === 0) {
        delete charCount[startChar];
      }

      start += 1;
    }
  }

  return minLength === Infinity ? "" : shortestSubstr;
}

// Test the function
// console.log(shortestUniqueSubstring("abcda")); // Output should be "abcda"
