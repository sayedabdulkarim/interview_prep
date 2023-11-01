function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return -1;
}

// console.log(binarySearch([2, 4, 5, 5, 6, 7, 8, 9], 5));

function lastOccurrence(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // Initialize result variable

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Fixed the mid calculation
    if (arr[mid] == val) {
      result = mid; // Update the result when found
      left = mid + 1; // Move to the right sub-array to find the last occurrence
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
console.log(lastOccurrence([2, 4, 5, 5, 6, 7, 8, 9], 5));
