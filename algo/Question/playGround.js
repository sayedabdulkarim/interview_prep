function maxElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
  return arr[0];
}

// console.log(maxElem([1, 9, 5, 6]));

function minElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
  return arr;
}

// console.log(minElem([1, 9, 5, 0, -11, 6]));

function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }

  return arr;
}

// console.log(reverseArr([1, 9, 5, 0, -11, 6]));

function moveZeroesInPlace(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  for (let i = pos; i < arr.length; i++) {
    arr[pos] = 0;
  }

  return arr;
}

// console.log(moveZeroesInPlace([1, 9, 5, 0, -11, 6]));

function sort(arr) {
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

// console.log(sort([1, 9, 5, 0, -11, 6]));

function removeDup(arr) {
  if (!arr.length) return [];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }

  arr.length = count + 1;

  return arr;
}

// console.log(removeDup([1, 2, 3, 2, 4, 5, 6, 1, 3]));

function containsDuplicate(arr) {
  const setArr = new Set(arr);

  return setArr.size === arr.length;
}

// console.log(containsDuplicate([1, 2, 3, 2, 4, 5, 6, 1, 3]));

function chunkArray(arr, k) {
  if (!arr.length) return [];

  const chunked = [];

  for (let i = 0; i < arr.length; i += k) {
    const sliced = arr.slice(i, k + i);

    chunked.push(sliced);
  }
  return chunked;
}

// console.log(chunkArray([1, 2, 3, 2, 4, 5, 6, 1, 3], 4));

/////
function twoSum(arr, k) {
  if (!arr.length) return null;

  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const target = k - arr[i];
    if (map[target] !== undefined) {
      return [i, map[target]];
    }

    map[arr[i]] = i;
  }
}

// console.log(twoSum([1, 2, 3, 2, 4, 5, 6, 1, 3], 4));
function twoSumSorted(arr, t) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === t) {
      return [left, right];
    } else if (sum < t) left++;
    else right--;
  }
  return null;
}

// console.log(twoSumSorted([1, 2, 3, 4, 5, 6], 11));

function isAnagram(str1, str2) {
  //getObjCount
  function getObjCount(param) {
    const obj = {};

    for (i of param) {
      obj[i] = (obj[i] || 0) + 1;
    }
    return obj;
  }

  //eqObj
  function eqObj(obj1, obj2) {
    const objOneSort = Object.keys(obj1).sort();
    const objTwoSort = Object.keys(obj2).sort();
    for (let i = 0; i < objOneSort.length; i++) {
      if (
        objOneSort[i] !== objTwoSort[i] ||
        obj1[objOneSort[i]] !== obj2[objTwoSort[i]]
      ) {
        return false;
      }
    }
    return true;
  }

  //
  const getObjOneCount = getObjCount(str1);
  const getObjTwoCount = getObjCount(str2);

  return eqObj(getObjOneCount, getObjTwoCount);
}

// console.log(isAnagram("one", "neo"));

function maxSubArr(arr) {}
