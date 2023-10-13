function add(num) {
  if (num == 0) return 0;

  let prevNum = num;
  num--;

  return prevNum + add(num);
}

// console.log(add(5));
function addArr(arr) {
  if (arr.length == 0) return 0;

  let lastElem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return lastElem + addArr(arr);
}

// console.log(addArr([1, 2, 3, 4]));

function multiply(num) {
  if (num == 0) return 1;
  let lastNum = num;
  num--;

  return lastNum * multiply(num);
}

// console.log(multiply(5));

function multiplyArr(arr) {
  if (arr.length == 0) return 1;

  let lastElem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElem * multiplyArr(arr);
}

// console.log(multiplyArr([1, 2, 4]));

function rangeOfNums(start, end) {
  if (start > end) return 0;

  let elem = start;
  start++;

  return elem + rangeOfNums(start, end);
}

// console.log(rangeOfNums(2, 7));

function rangeOfNumsArr(start, end) {
  if (start == end) return end;

  let currentElem = start;
  start++;

  return [currentElem].concat(rangeOfNumsArr(start, end));
}

// console.log(rangeOfNumsArr(2, 7));

function factorial(num) {
  if (num == 0) return 1;

  let currentElem = num;
  num--;

  return currentElem * factorial(num);
}

// console.log(factorial(5));
function revStr(str) {
  if (str.length == 0) return "";
  let currentElem = str[str.length - 1];
  str = str.slice(0, str.length - 1);
  return currentElem + revStr(str);
}

// console.log(revStr("Hello"));

function isPalindrome(str) {
  if (str.length == 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  else {
    const sliced = str.slice(1, str.length - 1);
    console.log(sliced, " sliced");
    return isPalindrome(sliced);
  }
}

// function isPalindrome(str) {
//   if (str.length <= 0) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   let sliced = str.slice(1, str.length - 1);
//   console.log(sliced);
//   return isPalindrome(sliced);
// }

console.log(isPalindrome(""));
