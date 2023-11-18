function removeDup(arr) {
  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }

  arr.length = count + 1;

  return arr;
}

// console.log(removeDup([1, 2, 41, 2, 1, 2, 33, 4, 5, 6, 7]));

function twoSumSorted(arr, k) {
  if (!arr.length) return [];

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === k) {
      return [left, right];
    } else if (sum < k) {
      left++;
    } else right--;
  }
  return null;
}

// console.log(twoSumSorted([1, 2, 2, 41], 42));

function maxSubArr(arr) {
  if (!arr.length) return [];
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 0; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}
// console.log(twoSumSorted([1, 2, 2, 41], 42));

const currying = (a) => (b) => b ? currying(a + b) : a;

// console.log(currying(5)(6)(6)());
function moveZeroesToRight(arr) {
  if (!arr.length) return [];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

function moveZeroesToLeft(arr) {
  if (!arr.length) return [];

  let count = arr.length - 1;

  for (let i = count; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count--;
    }
  }

  for (let i = count; i >= 0; i--) {
    arr[i] = 0;
  }

  return { arr, count };
}

// console.log(moveZeroesToLeft([2, 3, 0, 0, 1, 2, 0, 3]));

function rotateArrByK(arr, k) {
  if (!arr.length) return [];

  const res = [];

  for (let i = 0; i < arr.length - k; i++) {
    res.push(arr[i]);
  }

  const mergedArr = [...arr.slice(arr.length - k, arr.length), ...res];

  return mergedArr;
}

// console.log(rotateArrByK([2, 3, 0, 0, 1, 2], 2));
function isAnagaram(str1, str2) {
  //getObj
  function getObj(str) {
    const obj = {};

    for (i of str) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  //compare obj
  function compareObj(obj1, obj2) {
    //
    const objOneKeysSorted = Object.keys(obj1).sort();
    const objTwoKeysSorted = Object.keys(obj2).sort();

    for (let i = 0; i < objOneKeysSorted.length; i++) {
      if (
        objOneKeysSorted[i] !== objTwoKeysSorted[i] ||
        obj1[objOneKeysSorted[i]] !== obj2[objTwoKeysSorted[i]]
      ) {
        return false;
      }
    }

    return true;
  }

  const obj1 = getObj(str1);
  const obj2 = getObj(str2);

  return compareObj(obj1, obj2);
}

console.log(isAnagaram("eye", "yee"));
