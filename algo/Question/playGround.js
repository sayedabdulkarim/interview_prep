function addNum(num) {
  if (num === 1) return 1;

  let lastNum = num;
  num--;

  return lastNum + addNum(num);
}

// console.log(addNum(5));

function addArr(arr) {
  if (arr.length == 0) return 0;

  let lastIdx = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastIdx + addArr(arr);
}
// console.log(addArr([5, 4, 2, 1]));

function numRange(start, end) {
  if (end == start) return start;

  let prevStart = start;
  start++;

  return [start - 1].concat(numRange(start, end));
}

// console.log(numRange(-12, 5));

function multi(num) {
  if (num === 1) return 1;

  let lastNum = num;
  num--;

  return lastNum * multi(num);
}
// console.log(multi(5));

// function revStr(str) {
//   str = [...str];

//   for (let i = 0; i < Math.round(str.length / 2); i++) {
//     [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
//   }
//   return str.join("");
//   // return res.join("");
// }

// function revStr(str) {
//   str = [...str];

//   if (str.length === 0) return "";

//   let lastElem = str[str.length - 1];
//   str.length = str.length - 1;

//   return lastElem + revStr(str);
// }

function revStr(str) {
  if (str.length === 0) return "";

  let lastElem = str[str.length - 1];
  str = str.slice(0, str.length - 1);

  return lastElem + revStr(str);
}

// console.log(revStr("qwerty"));

function cleanedStr(str) {
  str = str.trim().toLowerCase();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if ((i >= "0" && i <= "9") || (i >= "a" && i <= "z")) {
      res += str[i];
    }
  }
  return res;
}

function isPalindrome(str) {
  const res = cleanedStr(str);

  return res === [...res].reverse().join("");
}

// console.log(isPalindrome("eye"));

function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(3));

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  if (str.length === 0) return 0;

  let count = 0;

  let lastElem = str[str.length - 1];

  if (vowels.includes(lastElem)) {
    count++;
  }

  str = str.slice(0, str.length - 1);
  return count + countVowels(str);
}

console.log(countVowels("apple"));
