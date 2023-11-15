function maxElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
    }
  }

  return arr;
}

// console.log(maxElem([3, 2, 11, 2, 4, 0, 33]));
function reverseArr(arr) {
  if (!arr.length) return [];

  for (let i = 0; i < Math.round(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }

  return arr;
}

// console.log(reverseArr([3, 2, 11, 2, 4, 0, 33]));
function moveZeroesToRight(arr) {
  if (!arr.length) return [];

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

// console.log(moveZeroesToRight([3, 0, 2, 11, 2, 4, 0, 33]));

// function moveZeroesToLeft(arr) {
//   if (!arr.length) return [];

//   let count = arr.length - 1;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] !== 0) {
//       arr[count] = arr[i];
//       count--;
//     }
//   }

//   for (let i = count; i >= 0; i--) {
//     arr[i] = 0;
//   }

//   return {
//     count,
//     arr,
//   };
// }

// function moveZeroesToLeft(arr) {
//   if (!arr) return [];

//   let count = arr.length - 1;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] !== 0) {
//       arr[count] = arr[i];
//       count--;
//     }
//   }
//   //   console.log(arr, " arrr");
//   //   for (let i = count; i >= 0; i--) {
//   //     arr[i] = 0;
//   //   }
//   return arr;
// }

// console.log(moveZeroesToLeft([3, 0, 2, 11, 0, 2, 4, 0, 33]));

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

// console.log(sortAsc([3, 0, 2, 11, 0, 2, 4, 0, 33]));

function removeDup(arr) {
  if (!arr.length) return [];

  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }

  arr.length = count + 1;

  return { arr, count };
}

// console.log(removeDup([3, 0, 2, 11, 0, 2, 4, 0, 33]));

function chunkArray(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    console.log(i);
    const sliced = arr.slice(i, num + i);
    result.push(sliced);
  }
  return result;
}

// console.log(chunkArray([3, 0, 2, 11, 0, 2, 2, 2, 3, 4, 0, 33], 2));

function twoSum(arr, k) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const temp = k - arr[i];
    if (obj[temp] !== undefined) {
      return [obj[temp], i];
    }

    obj[arr[i]] = i;
  }
  return null;
}

// console.log(twoSum([3, 0, 2, 11, 0, 2, 2, 2, 3, 4, 0, 33], 14));

const arr = [
  { phase: 1, name: "phase One", age: 1 },
  { phase: 2, name: "phase Two", age: 2 },
  { phase: 1, name: "phase One", age: 1 },
  { phase: 2, name: "phase Two", age: 2 },
  { phase: 1, name: "phase One", age: 1 },
];

json = {
  phase1: [
    { phase: 1, name: "phase One", age: 1 },
    { phase: 1, name: "phase One", age: 1 },
    { phase: 1, name: "phase One", age: 1 },
  ],
  phase2: [
    { phase: 2, name: "phase Two", age: 2 },
    { phase: 2, name: "phase Two", age: 2 },
  ],
};

// function getJson(arr) {
//     const data = {};

//     arr.forEach(item => {
//       // Construct the key name, e.g., 'phase1', 'phase2', etc.
//       const key = `phase${item.phase}`;

//       // Initialize the array if this key hasn't been seen before
//       if (!data[key]) {
//         data[key] = [];
//       }

//       // Push the current item onto the array for this key
//       data[key].push(item);
//     });

//     return data;
//   }

function getJson(arr) {
  const data = {};

  for (let i = 0; i < arr.length; i++) {
    const key = `phase${arr[i].phase}`;

    if (!data[key]) {
      data[key] = [];
    }

    data[key].push(arr[i]);
  }

  return data;
}

console.log(getJson(arr));
