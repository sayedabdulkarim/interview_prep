function removeDup(arr) {
  if (!arr.length) return [];
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

// console.log(removeDup([2, 4, 3, 1, 2, 3]));

function twoSum(arr, k) {
  if (!arr.length) return null;
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (obj[temp] !== undefined) {
      return [i, obj[temp]];
    }

    obj[arr[i]] = i;
  }
}

// console.log(twoSum([1, 1, 2, 2, 3, 4, 5, 5], 2));

function twoSumSorted(arr, k) {
  if (!arr.length) return null;

  let left = 0;
  let right = arr.length;

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

// console.log(twoSumSorted([1, 1, 2, 2, 3, 4, 5, 5], 2));

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

// console.log(maxSubArr([1, 1, 2, 2, 3, 4, 5, 5]));

function reversedStr(str) {
  str = [...str];

  for (let i = 0; i < Math.round(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  return str.join("");
}

// console.log(reversedStr("qwerty"));

function isValidParntheses(str) {
  if (!str.length) return null;

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
      let popped = stack.pop();
      if (map[popped] !== i) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParntheses("()")); // Output: true
console.log(isValidParntheses("{[]}")); // Output: true
console.log(isValidParntheses("(]")); // Output: false
console.log(isValidParntheses("([)]")); // Output: false
console.log(isValidParntheses("([)]{}}{")); // Output: false
