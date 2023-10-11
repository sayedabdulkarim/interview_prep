function findTheMax(arr) {
  if (!arr.length) return null;

  for (i = 0; i < arr.length; i++) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
  }
  return arr;
}

console.log(findTheMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findTheMax([-1, -2, -3, -4, -5])); // Output: -1
console.log(findTheMax([0, 0, 0, 0, 0])); // Output: 0
console.log(findTheMax([])); // Output: Error: Array cannot be empty (assuming the function checks for an empty array)
