// const array = [64, 34, 25, 12, 22, 11, 90, 64];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 64];

function maxElem(arr) {
  let maxElem = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
  }

  return maxElem;
}

function maxElem2(arr) {
  if (!arr.length) return null;

  for (let o = 0; o < arr.length; o++) {
    if (arr[0] < arr[o]) {
      [arr[0], arr[o]] = [arr[o], arr[0]];
    }
  }
  return arr;
}

function minElem(arr) {
  if (!arr.length) return null;

  for (let o = 0; o < arr.length; o++) {
    if (arr[0] > arr[o]) {
      [arr[o], arr[0]] = [arr[0], arr[o]];
    }
  }
  return arr;
}

function reverseArr(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < Math.round(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

function moveZeroesToRight(arr) {
  let count = 0;
  if (!arr.length) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }

  return { arr, count };
}

// console.log({ maxElem: maxElem2(array), minElem: minElem(array) });
// console.log({ reverseArr: reverseArr(array) });
console.log({ moveZeroesToRight: moveZeroesToRight(array) });
