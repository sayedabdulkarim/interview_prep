// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";

function reversedStr(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

function reversedStr2(str) {
  str = [...str];

  for (let i = 0; i < Math.round(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  return str.join("");
}

function cleanedStr(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let lowercase = str[i].toLowerCase();
    if (
      (lowercase >= "a" && lowercase <= "z") ||
      (lowercase >= "0" && lowercase <= "9")
    ) {
      res += lowercase;
    }
  }
  return res;
}

function cleanString(str) {
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanedStr += char;
    }
  }
  return cleanedStr;
}

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   console.log(str);
//   const a = [...str].join("").trim(" ");
//   const b = [...str].reverse().join("").trim();

//   return {
//     a,
//     b,
//   };
// }

function isPalindrome(str) {
  const string = cleanedStr(str);
  // const string = cleanString(str);
  return string === [...string].reverse().join("");
}

console.log({
  // reversedStr: reversedStr(string),
  // reversedStr2: reversedStr2(string),
  // isPalindrome: isPalindrome("Hello"),
  isPalindrome: isPalindrome(string),
});
