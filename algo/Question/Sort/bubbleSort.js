function sort(arr) {
  var isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (i = 0; i <= arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSorted = false;
      }
    }
  }

  return arr;
}