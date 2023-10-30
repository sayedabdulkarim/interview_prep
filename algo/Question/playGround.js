function removeDup(arr) {
  if (!arr.length) return [];

  // arr = arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
      // arr[i] = arr[count];
    }
  }

  arr.length = count + 1;

  return arr;
}

// console.log(removeDup([1, 2, 2, 3, 3, 3, 5, 7, 8, 8, 8, 99]));

function twoSum(arr, k) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];

    if (obj[temp] !== undefined) {
      return [obj[temp], i];
    }

    obj[arr[i]] = i;
  }
}

// console.log(twoSum([2, 5, 17, 7, 9], 22));

function twoSumSorted(arr, k) {
  let left = 0;
  let right = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === k) {
      return [left, right];
    }
    if (k < sum) {
      left++;
    } else {
      right--;
    }
  }
}

// console.log(twoSum([2, 5, 7, 9], 14));
function maxSubArr(arr) {
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

// console.log(maxSubArr([10, 5, 2, 7, 1, 9]));
// console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//
function revStr(str) {
  if (str.length == 0) return "";

  let lastElem = str[str.length - 1];

  str = str.slice(0, str.length - 1);

  return lastElem + revStr(str);
}

// console.log(revStr("hello"));

function validParentheses(str) {
  const obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (let i of str) {
    if (Object.keys(obj).includes(i)) {
      stack.push(i);
    } else {
      const popped = stack.pop();
      if (obj[popped] !== i) {
        return false;
      }
    }
  }

  return stack.length == 0;
}

console.log(validParentheses("()]{}"));
