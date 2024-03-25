// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";



function maxElem(nums) {
    if (nums.length === 0) return null; // Handle empty array
    let max = nums[0]; // Initialize with the first element
  
    for (let i = 1; i < nums.length; i++) {
      // Start loop from 1 as nums[0] is already in max
      if (nums[i] > max) max = nums[i];
    }
    return max;
  }
  
  function maxElem(arr) {
    if (!arr.length) return null;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        // Swap the elements
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    return arr[0];
    // return arr[arr.length - 1];
  }
  