////
function sampleRecursion(num) {
  if (num == 0) return;
  console.log(num, "  numm");
  num--;
  sampleRecursion(num);
}

//udemy course questions

/**
 * push all the number in an array nd return pushIntoArrRec(5) [5,4,3,2,1]
 * sumRange (3) - 6
 * factorial(5) - 120
 * productOfArray [1,2,3, 10] - 60
 * recursiveRange- same as sumRange
 */

//pushIntoArr

function pushIntoArr(num) {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
}

const res = [];

function pushIntoArrRec(num) {
  if (num <= 0) {
    //base
    console.log("done");
    return;
  }
  res.push(num);
  num--;
  console.log(res);
  pushIntoArrRec(num);
}

// sumRange
function sumRange(num) {
  if (num == 1) return 1;

  num + sumRange(num - 1);
}

function sumOfArr(arr) {
  if (arr.length == 0) return 0;

  let elem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return elem + sumOfArr(arr);
}

//factorial
function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1);
}

function factorial(num) {
  if (num == 1) return 1;

  let prevNum = num;
  num--;
  console.log({
    num,
    prevNum,
  });
  // console.log(factorial(num), " ff");
  return prevNum * factorial(num);
}

///productOfArray
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function productOfArray(arr) {
  let count = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return 1;

    if (helperInput[0]) {
      count *= helperInput[0];
    }

    helper(helperInput.slice(1));
    // return
  }

  helper(arr);

  return count;
}

////recursiveRange
function recursiveRange(num) {
  if (num == 0) return 0;

  return num + recursiveRange(num - 1);
}

///
//ADD
function add(num) {
  if (num == 0) return 0;

  let prevNum = num;
  --num;

  return prevNum + add(num);
}

function addArr(arr) {
  if (arr.length == 0) return 0;

  let prevElem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return prevElem + addArr(arr);
}

// MULTIPLY
function multiply(num) {
  if (num == 0) return 1;

  let lastNum = num;
  --num;

  return lastNum * multiply(num);
}

function multiplyArr(arr) {
  if (arr.length == 0) return 1;

  let lastElem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return lastElem * multiplyArr(arr);
}

//
function reverse(str) {
  str = [...str];

  // console.log(str);
  if (str.length <= 0) return "";
  else {
    let lastElem = str[str.length - 1];
    str.length = str.length - 1;
    let revStr = lastElem + reverse(str);
    console.log({
      revStr,
    });
    return revStr;
  }
}

//
function rangeOfNums(start, end, arr = []) {
  if (start > end) return arr;

  let prevStart = start;

  start++;

  // console.log(prevStart);
  arr.push(prevStart);

  return rangeOfNums(start, end, arr);
}

function rangeOfNums(start, end, arr = []) {
  if (end < start) return [];
  else {
    let endNum = end - 1;
    // --end;
    const numbers = rangeOfNums(start, endNum);
    numbers.push(end);

    console.log({
      end,
      numbers,
    });

    return numbers;
  }
}

function isPalindrome(str) {
  if (str.length <= 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  let sliced = str.slice(1, str.length - 1);
  console.log(sliced);
  return isPalindrome(sliced);
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
