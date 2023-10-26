function removeDup(arr) {
  if (!arr.length) return [];

  arr = arr.sort((a, b) => a - b);

  arr = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[pos] !== arr[i]) {
      pos++;
      arr[pos] = arr[i];
    }
  }

  arr.length = pos + 1;

  return arr;
}

// console.log(removeDup([1, 1, 2, 2, 3, 3]));
// console.log(removeDup([1, 2, 31, 4, 1, 3]));
function twoSum(arr, k) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];

    if (obj[temp] !== undefined) {
      return [i, obj[temp]];
    }

    obj[arr[i]] = i;
  }
  return null;
}

// console.log(twoSum([1, 2, 31, 4, 1, 3], 35));

function twoSumSorted(arr, k) {
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
  // return null;
}

// console.log(twoSumSorted([1, 1, 2, 2, 3, 3], 5));
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

const exampleArr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArr(exampleArr1)); // Result: 6 (subarray [4, -1, 2, 1])

// Example 2
// const exampleArr2 = [1, 2, 3, 4, 5];
// const result2 = maxSubArr(exampleArr2); // Result: 15 (entire array is the maximum subarray)

// Example 3
// const exampleArr3 = [-1, -2, -3, -4, -5];
// const result3 = maxSubArr(exampleArr3); // Result: -1 (the maximum subarray is a single element)
function revStr(str) {
  if (!str.length) return "";

  str = [...str];

  for (let i = 0; i < Math.round(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  return str.join("");
}

// console.log(revStr("hello"));

function validParenthese(str) {
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (i of str) {
    if (Object.keys(map).includes(i)) {
      stack.push(i);
    } else {
      const poppedNode = stack.pop();

      if (!map[poppedNode]) return false;
    }
  }
  return stack.length == 0;
}

function validParenthesesOwn(str) {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (i of str) {
    if (Object.keys(map).includes(i)) {
      stack.push(i);
    } else {
      const popped = stack.pop();
      if (map[popped] !== i) return false;
    }
  }

  return stack.length == 0;
}

console.log(validParenthese("(()"));
console.log(validParenthesesOwn("(()"));
