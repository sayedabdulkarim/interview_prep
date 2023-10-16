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

// console.log(threeSum([1, 1, 2, 3, 4, 5], 6)); // Output: [ [ 1, 1, 4 ], [ 1, 2, 3 ] ]
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

console.log(threeSum([-1, 0, 1, 2, -1, 2], 3)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
