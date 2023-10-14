// function twoSum(arr, k) {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     const temp = k - arr[i];
//     if (obj[temp] !== undefined) {
//       return [i, obj[temp]];
//     }

//     obj[arr[i]] = i;
//   }
// }

console.log(twoSum([2, 7, 11, 15], 22));

function twoSum(arr, target) {
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
