function sortAsc(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }

  return arr;
}
console.log(sortAsc([2, 3, 1, 4, 6, 3, 6]));

function isSortedAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted
    }
  }
  return true; // Array is sorted
}

console.log(isSorted([1, 2, 3, 14, 4, 5]));

function isSortedDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false; // Array is not sorted in descending order
    }
  }
  return true; // Array is sorted in descending order
}

console.log(isSortedDescending([1, 2, 3, 14, 4, 5]));

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Build a max heap (rearrange the array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const unsortedArray = [4, 10, 3, 5, 1];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
