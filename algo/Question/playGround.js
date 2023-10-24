function removeDup(arr) {
  if (!arr.length) return [];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

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

// removeDup();
// console.log(removeDup([1, 3, 2, 4, 5, 1, 3]));

function twoSum(arr, t) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const temp = t - arr[i];
    if (obj[temp] !== undefined) {
      return [obj[temp], i];
    }

    obj[arr[i]] = i;
  }
}

// console.log(twoSum([1, 3, 2, 4, 5, 1, 3], 9));

function twoSumSorted(arr, t) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (t === sum) {
      return [right, left];
    } else if (left < right) {
      left++;
    } else right--;
  }

  return 0;
}

console.log(twoSumSorted([1, 3, 2, 4, 5, 8], 11));
