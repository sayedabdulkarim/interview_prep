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

//rangeOfNums
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

function rangeOfNums(start, end) {
  if (start === end) return start;

  let firstElem = start;
  start++;

  return [firstElem].concat(rangeOfNums(start, end));
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

//revStr
function revStr(str) {
  if (str.length == 0) return "";
  let currentElem = str[str.length - 1];
  str = str.slice(0, str.length - 1);
  return currentElem + revStr(str);
}

function cleanedStr(str) {
  str = str.toLowerCase();
  let res = "";
  for (i of str) {
    if ((i >= "a" && i <= "z") || (i >= "0" && i <= "9")) {
      res += i;
    }
  }
  return res;
}

function isPalindrome(str) {
  str = cleanedStr(str);
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

function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacci(5)); // 5 (because F(5) = 5)

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello, World!")); // Output: 3

function countVowels(str) {
  if (str.length == 0) return 0;
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let lastElem = str[str.length - 1];

  if (vowels.includes(lastElem)) {
    count++;
  }
  str = str.slice(0, str.length - 1);
  return count + countVowels(str);
}
