function add(num) {
  if (num == 0) return 0;

  let prevNum = num;
  // num--;

  // return prevNum + add(num);
  return num + add(num - 1);
}

// console.log(add(5));

function addArr(arr) {
  if (arr.length == 0) return 0;

  // let lastElem = arr[arr.length - 1];
  // arr.length = arr.length - 1;
  arr.length--;
  return arr[arr.length - 1] + addArr(arr);
}

// console.log(addArr([1, 2, 3, 5, 6]));
let res = [];

function rangeOfNums(start, end) {
  if (start === end) return start;

  let firstElem = start;
  start++;

  return [firstElem].concat(rangeOfNums(start, end));
}

console.log(rangeOfNums(2, 4));
// console.log(res);
