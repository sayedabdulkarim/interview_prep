function removeDup(arr) {
  arr.sort((a, b) => a - b);
  if (!arr.length) return false;

  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[pos]) {
      pos++;
      arr[pos] = arr[i];
    }
  }

  arr.length = pos + 1;
  return arr;
}

console.log(removeDup([1, 2, 2, 3, 4, 3, 5])); // Output:
