function maxElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[i], arr[0]] = [arr[0], arr[i]];
    }
  }

  return arr[0];
}

console.log(maxElem([3, 33, 2, 4, 5, 6]));

function minElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      [arr[i], arr[0]] = [arr[0], arr[i]];
    }
  }

  return arr[0];
}

console.log(minElem([3, 33, 2, 4, 5, 6]));
