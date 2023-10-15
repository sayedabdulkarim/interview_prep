function add(num) {
  if (num == 1) return 1;

  let prevNum = num;
  num--;

  return prevNum + add(num);
}

// console.log(add(5));
function addArr(arr) {
  // if (arr.length == 0) return 0;
  if (!arr.length) return 0;

  let lastIdx = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return lastIdx + addArr(arr);
}

// console.log(addArr([-1, 1, 2, 3, -1]));

function multi(num) {
  if (num == 0) return 1;

  let lastNum = num;
  num--;

  return lastNum * multi(num);
}

// console.log(multi(5));

function multiArr(arr) {
  if (!arr.length) return 1;

  let lastIdx = arr[arr.length - 1];
  arr.length = arr.length - 1;
  console.log({
    lastIdx,
    arr,
  });
  return lastIdx * multiArr(arr);
}

// console.log(multiArr([1, 5, 6]));

function rangeOfNums(start, end) {
  if (start == end) return end;

  let prevNum = start;
  start++;

  console.log({
    prevNum,
    start,
  });

  return [prevNum].concat(rangeOfNums(start, end));
}

// console.log(rangeOfNums(2, 6));

function factorial(num) {
  if (num == 0) return 1;

  let prevNum = num;
  num--;

  return prevNum * factorial(num);
}

// console.log(factorial(5));

function reverseStr(str) {
  if (!str.length) return "";

  let lastLetter = str.slice(str.length - 1, str.length);
  str = str.slice(0, str.length - 1);

  return lastLetter + reverseStr(str);
}

// console.log(reverseStr("hello"));
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

// ... rest of your code

function isPalindrome(str) {
  str = cleanedStr(str);
  if (str.length <= 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  let sliced = str.slice(1, str.length - 1);
  console.log(sliced);
  return isPalindrome(sliced);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(cleanedStr("A man, a plan, a canal: Panama"));
// cleanedStr("A man, a plan, a canal: Panama");
