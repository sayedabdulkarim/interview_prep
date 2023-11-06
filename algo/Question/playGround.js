function maxElem(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
  return arr[0];
}

// console.log(maxElem([2, 4, 55, 6, 7, 8]));

function minElem(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
}

console.log(maxElem([2, 4, 55, 6, 7, 8]));
