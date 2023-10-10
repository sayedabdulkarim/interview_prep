function cleanedStr(str) {
  let cleaned = "";

  for (i of str) {
    i = i.toLowerCase();
    if ((i >= "a" && i <= "z") || (i <= "9" && i >= "0")) {
      cleaned += i;
    }
  }

  return cleaned;
}

function isPalindrome(str) {
  return [...cleanedStr(str)].reverse().join("") == str.toLowerCase();
}

// function cleanString(str) {
//   let cleanedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
//       cleanedStr += char;
//     }
//   }
//   return cleanedStr;
// }

// function isPalindrome(str) {
//   const cleanedStr = cleanString(str);
//   console.log(cleanedStr, " cleaned");
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Was it a car or a cat I saw")); // Output: true
