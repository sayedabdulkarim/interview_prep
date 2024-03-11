// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";

function revStr(str) {
  if (!str.length) return null;

  str = [...str];

  for (let i = 0; i < Math.round(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }
  return str.join("");
}

// function cleanString(str) {
//   let cleaned = "";

//   for (let i = 0; i < str.length; i++) {
//     const temp = str[i].toLowerCase();
//     if ((temp >= "a" || temp <= "z") && (temp >= "0" || temp <= "9")) {
//       cleaned += temp;
//     }
//   }
//   return cleaned;
// }

// function isPalindrome(str) {
//   // const cleaned = cleanedStr(str);
//   const cleaned = cleanString(str);
//   return str === [...cleaned].reverse().join("");
// }

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

function isPalindrome(str) {
  const cleanedStr = cleanString(str);
  console.log(cleanedStr, " cleaned");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log({
  // revStr: revStr("string"),
  // cleanedStr: cleanedStr(string),
  isPalindrome: isPalindrome(string),
});
