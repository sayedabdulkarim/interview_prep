function maxElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      [arr[i], arr[0]] = [arr[0], arr[i]];
    }
  }

  return arr[0];
}

// console.log(maxElem([-1, -2, -5, -8, 0, -3, -4, -5])); // Output: 5
function minElem(arr) {
  if (!arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      [arr[i], arr[0]] = [arr[0], arr[i]];
    }
  }

  return arr[0];
}

// console.log(minElem([-1, -2, -5, -8, 0, -3, -4, -5])); // Output: 5

function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

// console.log(reverseArr([1, 2, 5, 8, 0, 3, 4, 5])); // Output: 5
// console.log(reverseArr([-1, -2, -5, -8, 0, -3, -4, -5])); // Output: 5

// Move Zeroes: Move all 0's to the end of an array while maintaining the relative order of the non-zero elements.
function moveZeroes(arr) {
  if (!arr.length) return [];

  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // arr[i] = arr[pos];
      arr[pos] = arr[i];
      pos++;
    }
  }

  for (let i = pos; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));

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

// console.log(sortDesc([34, 7, 23, 32, 5, 62]));

function removeDup(arr) {
  if (!arr.length) return [];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[pos]) {
      pos++;
      arr[pos] = arr[i];
    }
  }
  arr.length = pos + 1;
  return {
    pos,
    arr,
  };
}

// console.log(removeDup([34, 7, 34, 23, 32, 1, 1, 5, 62]));
