function linearSearch(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([2, 4, 5, 6, 7, 8, 9], 55));
