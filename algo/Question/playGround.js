// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];

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

function removeDup(arr) {
  if (!arr.length) return null;

  const newSet = new Set(arr);
  const newArr = Array.from(newSet);

  return newArr.length === arr.length;
}

function chunkArray(arr, num) {
  const chunk = [];

  for (let i = 0; i < arr.length; i += num) {
    console.log(i);
    const sliced = arr.slice(i, i + num);
    chunk.push(sliced);
  }
  return chunk;
}

// chunkArray(array, 3);

console.log({
  // sortAsc: sortAsc(array),
  // sortDesc: sortDesc(array),
  // removeDup: removeDup(array),
  chunkArray: chunkArray(array, 5),
});

// console.log(array, " aaa");
