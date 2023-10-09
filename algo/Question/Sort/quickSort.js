function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quickSort(greater), pivot, ...quickSort(less)];
}

// Example usage:
const arr = [22, 14, 5, 26, 57, 18, 29];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output should be [57, 29, 26, 22, 18, 14, 5]
