function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) left = mid++;
    else right = mid--;
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

console.log(binarySearch([2, 4, 5, 6, 7, 8, 9], 5));
