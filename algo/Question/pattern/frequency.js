// MEANS HASH MAP

// 1. Count the frequency of each character in a string.
function freqCount(str) {
  const obj = {};

  for (i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  return obj;
}

// 2. Find the first non-repeating character in a string.

function firstNonRepetative(params) {
  function getCount(str) {
    const obj = {};

    for (i of str) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const getObj = getCount(params);
  let letter = null;
  for (i in getObj) {
    if (getObj[i] == 1) {
      letter = i;
      break;
    }
  }
  return letter;
}

// console.log(firstNonRepetative("abca")); // should return 'b'
// console.log(firstNonRepetative("abcabc")); // should return null
// console.log(firstNonRepetative("aabbcc")); // should return null
// console.log(firstNonRepetative("abcd")); // should return 'a'
// console.log(firstNonRepetative("abcdeedcba")); // should return null
//   console.log(firstNonRepetative("abcde")); // should return 'a'

// 1. Check if two strings are anagrams of each other.
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  //getobjCount
  function getObjCount(str) {
    const obj = [];

    for (i of str) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  //objEq
  function objEq(obj1, obj2) {
    //sort2
    //sort1
    const sortedObj1 = Object.keys(obj1).sort();
    const sortedObj2 = Object.keys(obj2).sort();

    //loop
    for (i = 0; i < sortedObj1.length; i++) {
      if (
        sortedObj1[i] !== sortedObj2[i] ||
        obj1[sortedObj2[i]] !== obj2[sortedObj2[i]]
      ) {
        return false;
      }
    }
    return true;
  }

  const getObj1 = getObjCount(str1);
  const getObj2 = getObjCount(str2);

  return objEq(getObj1, getObj2);
}

// 2. Find all duplicates in an array where elements are between 1 and n.
// 4,3,2,7,8,2,3,1

function findDup(arr) {
  const res = [];

  function getObj(nums) {
    const obj = [];

    for (i of nums) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const getCount = getObj(arr);

  for (i in getCount) {
    if (getCount[i] >= 2) res.push(i);
  }

  return res;
}

//   console.log(findDup([4, 3, 2, 7, 8, 2, 3, 1]));

// 1. Count the number of smaller elements to the right of each element in an array.
function smallerCount(arr) {
  const res = [];

  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    res.push(count);
  }

  return res;
}

// console.log(smallerCount([3, 4])); // Should print [1, 2, 1, 0]

//   console.log(smallerCount([3, 4, 2, 1])); // Should print [2, 2, 1, 0]

// 2. Given an array of integers, find all the subsets that sum up to a particular target.

function findSubsets(arr, target, start = 0, currentSubset = [], result = []) {
  // Base case: if the target sum becomes zero, we've found a valid subset.
  if (target === 0) {
    result.push([...currentSubset]);
    return;
  }

  // If the target becomes negative or no more elements are left, return.
  if (target < 0 || start === arr.length) {
    return;
  }

  // Include the current element in the subset.
  currentSubset.push(arr[start]);
  findSubsets(arr, target - arr[start], start + 1, currentSubset, result);

  // Exclude the current element from the subset.
  currentSubset.pop();
  findSubsets(arr, target, start + 1, currentSubset, result);

  return result;
}

// Test the function
const array = [1, 2, 3];
const target = 4;
console.log(findSubsets(array, target));
