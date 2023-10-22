function add(num) {
  if (num == 1) return 1;

  let lastNum = num;
  num--;
  return lastNum + add(num);
}

// console.log(add(5));

function addArr(arr) {
  if (arr.length === 0) return 0;

  let lastIdx = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return lastIdx + addArr(arr);
}

// console.log(addArr([1, 2, 3]));
function multi(num) {
  if (num === 1) return 1;

  let lastNum = num;
  num--;

  return lastNum * multi(num);
}

// console.log(multi(5));

function multiArr(arr) {
  if (arr.length === 0) return 1;

  let lastIdx = arr[arr.length - 1];
  console.log(lastIdx, "lll");
  arr.length = arr.length - 1;

  return lastIdx * multiArr(arr);
}

// console.log(multiArr([1, 2, 3, 6]));

function rangeOfNums(start, end) {
  if (end === start) return end;

  let num = end;
  end--;
  // return [num].concat(rangeOfNums(start, end));
  return num + rangeOfNums(start, end);
}

// console.log(rangeOfNums(2, 4));

// function revStr(str) {
//   str = [...str];

//   if (str.length == 0) return "";

//   let lastLetter = str[str.length - 1];
//   str.length = str.length - 1;

//   let res = [lastLetter].concat(revStr(str));
//   return res.join("");
// }

function revStr(str) {
  if (str.length == 0) return "";
  let currentElem = str[str.length - 1];
  str = str.slice(0, str.length - 1);
  return currentElem + revStr(str);
}

console.log(revStr("hello"));
