function removeDup(arr) {
  arr.sort((a, b) => a - b);

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

console.log(removeDup([1, 2, 41, 2, 1, 2, 33, 4, 5, 6, 7]));
