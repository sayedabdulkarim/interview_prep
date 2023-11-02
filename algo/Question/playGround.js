function moveZeros(arr) {
  if (!arr.length) return [];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }

  return arr;
}

console.log(moveZeros([8, 5, 0, 9, 0, 1, 2]));
