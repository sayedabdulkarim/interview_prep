// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];

function maxElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }

  return arr;
}

function minElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
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
  if (!arr.length) return null;

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

  return {
    count,
    arr,
  };
}

function moveZeroesToLeft(arr) {
  if (!arr.length) return null;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = 0; i < arr.length - count; i++) {
    arr[i] = 0;
  }

  return {
    count,
    arr,
  };
}

function sortArrDesc(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }

  return arr;
}

function sortArrAsc(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        isSorted = false;
      }
    }
  }

  return arr;
}

function removeDup(arr) {
  let newSet = new Set(arr);
  let newArr = Array.from(newSet);
  return newArr;
}

function chunkArray(arr, num) {
  const chunk = [];

  for (let i = 0; i < arr.length; i += num) {
    // console.log(i, " ii");
    const sliced = arr.slice(i, num + i);
    chunk.push(sliced);
  }
  return chunk;
}

console.log({
  // maxElem: maxElem(array),
  // minElem: minElem(array),
  // reverseArr: reverseArr(array),
  // moveZeroesToRight: moveZeroesToRight(array),
  // moveZeroesToLeft: moveZeroesToLeft(array),
  // sortArrDesc: sortArrDesc(array),
  // sortArrAsc: sortArrAsc(array),
  // removeDup: removeDup(array),
  chunkArray: chunkArray(array, 3),
});
