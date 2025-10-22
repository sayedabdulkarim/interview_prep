# Array Questions

## Array Definition

An array is a data structure that stores a collection of items, which can be of the same or different types, at contiguous memory locations. The elements can be accessed randomly by indexing into the array.

## Basic Operations

## filter unique objects

var test = arr.filter((item, index, self) => {
// console.log({ item, self });
return index === arr.findIndex(obj => obj.name === item.name && obj.age === item.age);
});

var arr = [
{name: "sai", age: 10},
{name:"Nang", age : 22},
{name: "sai", age: 10},
{name:"Nang", age: 22},
{name: "111111", age: 21}
];

1. **Find Maximum Element**

   ```javascript
   function maxElem(nums) {
     if (nums.length === 0) return null;
     let max = nums[0];
     for (let i = 1; i < nums.length; i++) {
       if (nums[i] > max) max = nums[i];
     }
     return max;
   }
   ```

   **Examples:**

   - Input: `[3, 7, 2, 9, 1]` → Output: `9`
   - Input: `[-5, -2, -10, -1]` → Output: `-1`
   - Input: `[42]` → Output: `42`

2. **Find Minimum Element**

   ```javascript
   function minElem(nums) {
     if (nums.length === 0) return null;
     let min = nums[0];
     for (let i = 1; i < nums.length; i++) {
       if (nums[i] < min) min = nums[i];
     }
     return min;
   }
   ```

   **Examples:**

   - Input: `[3, 7, 2, 9, 1]` → Output: `1`
   - Input: `[-5, -2, -10, -1]` → Output: `-10`
   - Input: `[100, 50, 25]` → Output: `25`

3. **Reverse Array**

   ```javascript
   function reverseArr(arr) {
     let n = arr.length;
     for (let i = 0; i < Math.floor(n / 2); i++) {
       [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
     }
     return arr;
   }
   ```

   **Examples:**

   - Input: `[1, 2, 3, 4, 5]` → Output: `[5, 4, 3, 2, 1]`
   - Input: `['a', 'b', 'c']` → Output: `['c', 'b', 'a']`
   - Input: `[10, 20]` → Output: `[20, 10]`

4. **Move Zeroes to Right**

   ```javascript
   function moveZeroesToRight(arr) {
     if (!arr.length) return [];
     let count = 0;
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] !== 0) {
         [arr[i], arr[count]] = [arr[count], arr[i]];
         count++;
       }
     }
     return arr;
   }
   ```

   **Examples:**

   - Input: `[0, 1, 0, 3, 12]` → Output: `[1, 3, 12, 0, 0]`
   - Input: `[1, 2, 0, 0, 3, 0, 4]` → Output: `[1, 2, 3, 4, 0, 0, 0]`
   - Input: `[0, 0, 0]` → Output: `[0, 0, 0]`

5. **Move Zeroes to Left**

   ```javascript
   function moveZeroesToLeft(arr) {
     if (!arr) return [];
     let count = arr.length - 1;
     for (let i = arr.length - 1; i >= 0; i--) {
       if (arr[i] !== 0) {
         arr[count] = arr[i];
         count--;
       }
     }
     for (let i = count; i >= 0; i--) {
       arr[i] = 0;
     }

     // or below
     <!-- for (let i = 0; i <= count; i++) {
       arr[i] = 0;
     } -->
     return arr;
   }
   ```

   **Examples:**

   - Input: `[0, 1, 0, 3, 12]` → Output: `[0, 0, 1, 3, 12]`
   - Input: `[1, 2, 0, 0, 3, 0, 4]` → Output: `[0, 0, 0, 1, 2, 3, 4]`
   - Input: `[5, 0, 0, 7]` → Output: `[0, 0, 5, 7]`

6. **Remove Duplicates**

   ```javascript
   function removeDup(arr) {
     if (!arr.length) return [];
     arr.sort((a, b) => {
       if (a < b) return -1;
       if (a > b) return 1;
       return 0;
     });
     let i = 0;
     for (let j = 1; j < arr.length; j++) {
       if (arr[j] !== arr[i]) {
         i++;
         arr[i] = arr[j];
       }
     }
     arr.length = i + 1;
     return arr;
   }
   ```

   **Examples:**

   - Input: `[1, 2, 2, 3, 4, 4, 5]` → Output: `[1, 2, 3, 4, 5]`
   - Input: `[7, 7, 7, 7]` → Output: `[7]`
   - Input: `[1, 3, 2, 3, 1, 5]` → Output: `[1, 2, 3, 5]`

7. **Check for Duplicates**

   ```javascript
   function containsDuplicate(nums) {
     let sets = new Set(nums);
     return sets.size !== nums.length;
   }
   ```

   **Examples:**

   - Input: `[1, 2, 3, 4, 5]` → Output: `false`
   - Input: `[1, 2, 3, 1]` → Output: `true`
   - Input: `[7, 7, 8, 9]` → Output: `true`

8. **Chunk Array**

   ```javascript
   function chunkArray(arr, size) {
     const result = [];
     for (let i = 0; i < arr.length; i += size) {
       result.push(arr.slice(i, i + size));
     }
     return result;
   }
   ```

   **Examples:**

   - Input: `([1, 2, 3, 4, 5, 6, 7, 8], 3)` → Output: `[[1, 2, 3], [4, 5, 6], [7, 8]]`
   - Input: `(['a', 'b', 'c', 'd'], 2)` → Output: `[['a', 'b'], ['c', 'd']]`
   - Input: `([1, 2, 3, 4, 5], 5)` → Output: `[[1, 2, 3, 4, 5]]`

9. **Convert Number to Excel Column**

   ```javascript
   function numberToExcelColumn(number) {
     let result = "";
     while (number > 0) {
       const remainder = (number - 1) % 26;
       result = String.fromCharCode(65 + remainder) + result;
       number = Math.floor((number - 1) / 26);
     }
     return result;
   }
   ```

   **Examples:**

   - Input: `1` → Output: `"A"`
   - Input: `26` → Output: `"Z"`
   - Input: `28` → Output: `"AB"`

## Medium Problems

10. **Two Sum**

    ```javascript
    function twoSum(arr, target) {
      const map = {};
      for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map[complement] !== undefined) {
          return [map[complement], i];
        }
        map[arr[i]] = i;
      }
      return map;
    }
    ```

    **Examples:**

    - Input: `([2, 7, 11, 15], 9)` → Output: `[0, 1]`
    - Input: `([3, 2, 4], 6)` → Output: `[1, 2]`
    - Input: `([3, 3], 6)` → Output: `[0, 1]`

11. **Two Sum (Sorted Array)**

    ```javascript
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
      return null;
    }
    ```

    **Examples:**

    - Input: `([2, 7, 11, 15], 9)` → Output: `[0, 1]`
    - Input: `([2, 3, 4], 6)` → Output: `[0, 2]`
    - Input: `([-1, 0], -1)` → Output: `[0, 1]`

12. **Three Sum**

    ```javascript
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
    ```

    **Examples:**

    - Input: `([-1, 0, 1, 2, -1, -4], 0)` → Output: `[[-1, -1, 2], [-1, 0, 1]]`
    - Input: `([0, 1, 1], 0)` → Output: `[]`
    - Input: `([0, 0, 0], 0)` → Output: `[[0, 0, 0]]`

13. **Single Number**

    ```javascript
    function singleNumber(nums) {
      function getObj(arr) {
        const obj = {};
        for (let i of arr) {
          obj[i] = (obj[i] || 0) + 1;
        }
        return obj;
      }
      const getCount = getObj(nums);
      for (let i in getCount) {
        if (getCount[i] == 1) {
          return i;
        }
      }
      return false;
    }
    ```

    **Examples:**

    - Input: `[2, 2, 1]` → Output: `"1"`
    - Input: `[4, 1, 2, 1, 2]` → Output: `"4"`
    - Input: `[1]` → Output: `"1"`

14. **Rotate Array by K**

    ```javascript
    function rotateArrByK(arr, k) {
      var res = [];
      for (let i = arr.length - k; i <= arr.length - 1; i++) {
        res.push(arr[i]);
      }
      const merge = [...res, ...arr];
      return merge.slice(0, arr.length);
    }
    ```

    **Examples:**

    - Input: `([1, 2, 3, 4, 5, 6, 7], 3)` → Output: `[5, 6, 7, 1, 2, 3, 4]`
    - Input: `([-1, -100, 3, 99], 2)` → Output: `[3, 99, -1, -100]`
    - Input: `([1, 2], 1)` → Output: `[2, 1]`

15. **Second Largest Element**

    ```javascript
    function secondLargestNumberInAnArray(arr) {
      var sortArr = arr.sort((a, b) => a - b);
      var uni = new Set(sortArr);
      var changedToArr = Array.from(uni);
      return changedToArr[changedToArr.length - 2];
    }
    ```

    **Examples:**

    - Input: `[3, 2, 1, 5, 6, 4]` → Output: `5`
    - Input: `[1, 1, 2, 2, 3, 3]` → Output: `2`
    - Input: `[5, 5, 4, 4, 3]` → Output: `4`

16. **Check Anagram**

    ```javascript
    function isAnagram(str1, str2) {
      return [...str1].sort().join("") === [...str2].sort().join("");
    }
    ```

    **Examples:**

    - Input: `("anagram", "nagaram")` → Output: `true`
    - Input: `("rat", "car")` → Output: `false`
    - Input: `("listen", "silent")` → Output: `true`

17. **Find Kth Largest Element**

    ```javascript
    function KthLargest(nums, n) {
      function dSort(arr) {
        let isSorted = false;
        while (!isSorted) {
          isSorted = true;
          for (let i = 0; i < arr.length; i++) {
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
      const getSortedArr = dSort(nums);
      const uniObj = new Set(getSortedArr);
      const getArr = Array.from(uniObj);
      return getArr[n - 1];
    }
    ```

    **Examples:**

    - Input: `([3, 2, 1, 5, 6, 4], 2)` → Output: `5`
    - Input: `([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)` → Output: `3`
    - Input: `([1], 1)` → Output: `1`

18. **Maximum Subarray Sum (Kadane's Algorithm)**

    ```javascript
    function maxSubArr(arr) {
      var maxCurrent = arr[0];
      var maxGlobal = arr[0];
      for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if (maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
        }
      }
      return maxGlobal;
    }
    ```

    **Examples:**

    - Input: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` → Output: `6`
    - Input: `[1]` → Output: `1`
    - Input: `[5, 4, -1, 7, 8]` → Output: `23`

19. **Container With Most Water**

    ```javascript
    function maxArea(height) {
      let max = 0;
      let i = 0;
      let j = height.length - 1;
      while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        if (area > max) {
          max = area;
        }
        if (height[i] < height[j]) {
          i++;
        } else {
          j--;
        }
      }
      return max;
    }
    ```

    **Examples:**

    - Input: `[1, 8, 6, 2, 5, 4, 8, 3, 7]` → Output: `49`
    - Input: `[1, 1]` → Output: `1`
    - Input: `[4, 3, 2, 1, 4]` → Output: `16`

20. **Product of Array Except Self**

    ```javascript
    function productExceptSelf(nums) {
      const n = nums.length;
      const output = new Array(n).fill(1);
      let leftProduct = 1;
      for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
      }
      let rightProduct = 1;
      for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
      }
      return output;
    }
    ```

    **Examples:**

    - Input: `[1, 2, 3, 4]` → Output: `[24, 12, 8, 6]`
    - Input: `[-1, 1, 0, -3, 3]` → Output: `[0, 0, 9, 0, 0]`
    - Input: `[2, 3, 4]` → Output: `[12, 8, 6]`

## Additional Problems

21. **Longest Subarray with Sum K**

    ```javascript
    function longestSubarrayWithSumK(nums, K) {
      let sum = 0;
      let maxLength = 0;
      const sumIndexMap = new Map();
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === K) {
          maxLength = i + 1;
        }
        if (sumIndexMap.has(sum - K)) {
          maxLength = Math.max(maxLength, i - sumIndexMap.get(sum - K));
        }
        if (!sumIndexMap.has(sum)) {
          sumIndexMap.set(sum, i);
        }
      }
      return maxLength;
    }
    ```

    **Examples:**

    - Input: `([1, -1, 5, -2, 3], 3)` → Output: `4`
    - Input: `([-2, -1, 2, 1], 1)` → Output: `2`
    - Input: `([1, 2, 3], 3)` → Output: `2`

22. **Majority Element**

    ```javascript
    function majorityElement(nums) {
      const dividedNum = Math.floor(nums.length / 2);
      function getCount(arr) {
        const obj = {};
        for (let i of arr) {
          obj[i] = (obj[i] || 0) + 1;
        }
        return obj;
      }
      const getObj = getCount(nums);
      let getNum = null;
      for (let i in getObj) {
        if (getObj[i] > dividedNum) {
          getNum = parseInt(i);
          break;
        }
      }
      return getNum;
    }
    ```

    **Examples:**

    - Input: `[3, 2, 3]` → Output: `3`
    - Input: `[2, 2, 1, 1, 1, 2, 2]` → Output: `2`
    - Input: `[1]` → Output: `1`

23. **Remove Element**

    ```javascript
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
    ```

    **Examples:**

    - Input: `([3, 2, 2, 3], 3)` → Output: `2` (array becomes `[2, 2]`)
    - Input: `([0, 1, 2, 2, 3, 0, 4, 2], 2)` → Output: `5` (array becomes `[0, 1, 3, 0, 4]`)
    - Input: `([1], 1)` → Output: `0` (array becomes `[]`)

24. **Find Common Elements**

    ```javascript
    function findCommon(nums1, nums2) {
      const set1 = new Set(nums1);
      const common = [];
      for (const num of nums2) {
        if (set1.has(num)) {
          common.push(num);
          set1.delete(num);
        }
      }
      return common;
    }
    ```

    **Examples:**

    - Input: `([1, 2, 2, 1], [2, 2])` → Output: `[2, 2]`
    - Input: `([4, 9, 5], [9, 4, 9, 8, 4])` → Output: `[9, 4]`
    - Input: `([1, 2, 3], [4, 5, 6])` → Output: `[]`

25. **Merge Sorted Arrays**

    ```javascript
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
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
      return merged;
    }
    ```

    **Examples:**

    - Input: `([1, 2, 3, 0, 0, 0], [2, 5, 6])` → Output: `[1, 2, 2, 3, 5, 6]`
    - Input: `([1], [])` → Output: `[1]`
    - Input: `([], [1])` → Output: `[1]`

26. **Merge Intervals**

    ```javascript
    function mergeIntervals(intervals) {
      intervals.sort((a, b) => a[0] - b[0]);
      const merged = [intervals[0]];
      for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastInterval = merged[merged.length - 1];
        if (currentInterval[0] <= lastInterval[1]) {
          lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
          merged.push(currentInterval);
        }
      }
      return merged;
    }
    ```

    **Examples:**

    - Input: `[[1, 3], [2, 6], [8, 10], [15, 18]]` → Output: `[[1, 6], [8, 10], [15, 18]]`
    - Input: `[[1, 4], [4, 5]]` → Output: `[[1, 5]]`
    - Input: `[[1, 4], [0, 4]]` → Output: `[[0, 4]]`

27. **Most Frequent Elements**

    ```javascript
    function mostFrequentElem(nums, k) {
      const obj = {};
      for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
      }
      const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
      const kMostFrequent = sorted.slice(0, k).map((entry) => Number(entry[0]));
      return kMostFrequent;
    }
    ```

    **Examples:**

    - Input: `([1, 1, 1, 2, 2, 3], 2)` → Output: `[1, 2]`
    - Input: `([1], 1)` → Output: `[1]`
    - Input: `([1, 2, 3, 1, 2, 1], 3)` → Output: `[1, 2, 3]`

28. **Longest Increasing Subsequence**

    ```javascript
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
    ```

    **Examples:**

    - Input: `[10, 9, 2, 5, 3, 7, 101, 18]` → Output: `4`
    - Input: `[0, 1, 0, 3, 2, 3]` → Output: `4`
    - Input: `[7, 7, 7, 7, 7, 7, 7]` → Output: `1`

29. **Find All Elements That Appear Twice**

    ```javascript
    function allTwice(nums) {
      function getObjCount(arr) {
        const obj = {};
        for (let i of arr) {
          obj[i] = (obj[i] || 0) + 1;
        }
        return obj;
      }
      const objCount = getObjCount(nums);
      const getTwiceArr = [];
      for (let i in objCount) {
        if (objCount[i] == 2) {
          getTwiceArr.push(+i);
        }
      }
      return getTwiceArr;
    }
    ```

    **Examples:**

    - Input: `[4, 3, 2, 7, 8, 2, 3, 1]` → Output: `[2, 3]`
    - Input: `[1, 1, 2]` → Output: `[1]`
    - Input: `[1, 1, 2, 2, 3, 3]` → Output: `[1, 2, 3]`

30. **Next Permutation**

    ```javascript
    function nextPermutation(nums) {
      let i = nums.length - 1;
      while (i > 0 && nums[i] <= nums[i - 1]) {
        i--;
      }
      if (i === 0) {
        nums.reverse();
        return;
      }
      let j = nums.length - 1;
      while (nums[j] <= nums[i - 1]) {
        j--;
      }
      [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
      let left = i;
      let right = nums.length - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }
    ```

    **Examples:**

    - Input: `[1, 2, 3]` → Output: `[1, 3, 2]`
    - Input: `[3, 2, 1]` → Output: `[1, 2, 3]`
    - Input: `[1, 1, 5]` → Output: `[1, 5, 1]`

31. **Remove Occurrences**

    ```javascript
    function removeOccurrences(arr, value) {
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
          arr[j] = arr[i];
          j++;
        }
      }
      arr.length = j;
      return j;
    }
    ```

    **Examples:**

    - Input: `([3, 2, 2, 3], 3)` → Output: `2` (array becomes `[2, 2]`)
    - Input: `([0, 1, 2, 2, 3, 0, 4, 2], 2)` → Output: `5` (array becomes `[0, 1, 3, 0, 4]`)
    - Input: `([1, 1, 1], 1)` → Output: `0` (array becomes `[]`)

32. **Longest Palindromic Substring**

    ```javascript
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
    ```

    **Examples:**

    - Input: `"babad"` → Output: `"bab"` (or `"aba"`)
    - Input: `"cbbd"` → Output: `"bb"`
    - Input: `"a"` → Output: `"a"`

33. **Convert Array to JSON by Property**

    ```javascript
    function getJson(arr) {
      const data = {};
      for (let i = 0; i < arr.length; i++) {
        const key = `phase${arr[i].phase}`;
        if (!data[key]) {
          data[key] = [];
        }
        data[key].push(arr[i]);
      }
      return data;
    }
    ```

    **Examples:**

    - Input: `[{id: 1, phase: 1}, {id: 2, phase: 2}, {id: 3, phase: 1}]` → Output: `{phase1: [{id: 1, phase: 1}, {id: 3, phase: 1}], phase2: [{id: 2, phase: 2}]}`
    - Input: `[{name: "A", phase: 3}, {name: "B", phase: 3}]` → Output: `{phase3: [{name: "A", phase: 3}, {name: "B", phase: 3}]}`
    - Input: `[]` → Output: `{}`
