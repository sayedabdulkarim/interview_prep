// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";

function maxElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
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

  for (let i = 0; i < arr.length - count; i++) {
    arr[i] = 0;
  }

  return arr;
}

function sortDesc(arr) {
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

function sortAsc(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  return arr;
}

function removeDup(arr) {
  if (!arr.length) return null;

  const newSet = new Set(arr);
  const newArr = Array.from(newSet);

  return newArr;
}

function containsDuplicate(arr) {
  if (!arr.length) return null;

  function getObj(array) {
    const obj = {};
    for (let i of array) {
      obj[i] = (obj[i] || 0) + 1;
    }
    return obj;
  }

  const newObj = getObj(arr);

  for (let i in newObj) {
    if (newObj[i] >= 2) return true;
  }

  return false;
}

function chunkArray(arr, num) {
  if (!arr.length) return null;

  const chunked = [];

  for (let i = 0; i < arr.length; i += num) {
    const sliced = arr.slice(i, num + i);
    chunked.push(sliced);
    // console.log(i);
  }
  return chunked;
}

console.log({
  // maxElem: maxElem(array),
  // reverseArr: reverseArr(array),
  // moveZeroesToRight: moveZeroesToRight(array),
  // sortDesc: sortDesc(array),
  // sortAsc: sortAsc(array),
  // removeDup: removeDup(array),
  // containsDuplicate: containsDuplicate([1, 2, 3, 45, 3]),
  chunkArray: chunkArray(array, 5),
});
