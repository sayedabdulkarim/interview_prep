const list = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
    console.log(
      {
        left,
        right,
        arr: arr.length,
      },
      " leftt"
    );
  }
  return -1;
}

// Examples:
// Input: ([2, 4, 5, 6, 7, 8, 9], 5) → Output: 2
// Input: ([1, 3, 5, 7, 9], 7) → Output: 3
// Input: ([1, 2, 3, 4, 5], 6) → Output: -1
console.log(binarySearch([2, 4, 5, 6, 7, 8, 9], 5));

function firstOccurrence(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // Initialize result variable

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Fixed the mid calculation
    if (arr[mid] == val) {
      result = mid; // Update the result when found
      right = mid - 1; // Move to the left sub-array to find the first occurrence
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// Examples:
// Input: ([1, 2, 2, 2, 3, 4, 5], 2) → Output: 1
// Input: ([1, 1, 1, 2, 3], 1) → Output: 0
// Input: ([1, 2, 3, 4, 5], 6) → Output: -1

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

// Examples:
// Input: ([1, 2, 2, 2, 3, 4, 5], 2) → Output: 3
// Input: ([1, 1, 1, 2, 3], 1) → Output: 2
// Input: ([1, 2, 3, 4, 5], 6) → Output: -1

function range(arr, val) {
  let first = -1,
    last = -1;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      if (first == -1) {
        first = i;
      }
      last = i;
    }
  }
  return {
    first,
    last,
  };
}

// Examples:
// Input: ([1, 2, 2, 2, 3, 4, 5], 2) → Output: {first: 1, last: 3}
// Input: ([1, 1, 1, 2, 3], 1) → Output: {first: 0, last: 2}
// Input: ([1, 2, 3, 4, 5], 6) → Output: {first: -1, last: -1}
