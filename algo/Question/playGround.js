function maxElem(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
  return arr[0];
}

// console.log(maxElem([2, 22, 35, 6, 8, 8, 9, 3]));

function minElem(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }
  return arr[0];
}

// console.log(minElem([2, 22, 35, 6, 1, 8, 8, 9, 3]));

function reverseArr(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < Math.round(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

// console.log(reverseArr([2, 22, 35, 6, 1, 8, 8, 9, 3]));
function moveZeroesToRight(arr) {
  if (!arr) return [];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// console.log(moveZeroes([2, 22, 35, 6, 0, 1, 8, 0, 8, 9, 3]));

function moveZeroesToLeft(arr) {
  if (!arr) return [];

  let count = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count--;
    }
  }
  console.log(arr, " arrr");
  //   for (let i = count; i >= 0; i--) {
  //     arr[i] = 0;
  //   }
  return arr;
}

console.log(moveZeroesToLeft([2, 0, 1, 8, 0, 8]));
