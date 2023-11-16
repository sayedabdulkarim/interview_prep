function removeDup(arr) {
  if (!arr.length) return [];

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

// console.log(removeDup([2, 1, 2, 3, 4, 6, 2, 0, 0]));

function twoSum(arr, k) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (obj[temp] !== undefined) {
      return [obj[temp], i];
    }

    obj[arr[i]] = i;
  }

  return null;
}

// console.log(twoSum([2, 1, 2, 3, 4, 6, 2, 0, 0], 4));

function twoSumSorted(arr, k) {
  if (!arr.length) return null;

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

// console.log(twoSumSorted([1, 4, 5, 8, 8, 9, 13], 22));

function maxSubArr(arr) {
  if (!arr.length) return [];
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

// console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

const currying = (a) => (b) => b ? currying(a + b) : a;

// console.log(currying(5)(10)(20)());

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

// console.log(moveZeroesToRight([0, -2, 1, -3, 4, -1, 0, 2, 1, 0, -5, 4]));

function moveZeroesToLeft(arr) {
  if (!arr.length) return [];

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

  return arr;
}

// console.log(moveZeroesToLeft([0, -2, 1, -3, 4, -1, 0, 2, 1, 0, -5, 4]));

function rotateArrToRightByK(arr, k) {
  const res = [];

  for (let i = 0; i < arr.length - k; i++) {
    res.push(arr[i]);
  }

  const slicedArr = arr.slice(arr.length - k, arr.length);
  const array = [...slicedArr, ...res];

  return array;
}

console.log(rotateArrToRightByK([1, 2, 3, 4, 5], 2));
