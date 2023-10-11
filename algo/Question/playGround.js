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

// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("Was it a car or a cat I saw")); // Output: true

function firstUni(str) {
  function getObjCount(nums) {
    const obj = {};
    for (i of nums) {
      obj[i] = (obj[i] || 0) + 1;
    }
    return obj;
  }
  const getCount = getObjCount(str);
  for (let i = 0; i < str.length; i++) {
    if (getCount[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

// console.log(firstUni("leetcode")); // Output: 0
// console.log(firstUni("loveleetcode")); // Output: 2
// console.log(firstUni("aabb")); // Output: -1

function lengthOfLastWord(str) {
  str = str.trim().split(" ");
  return str[str.length - 1].length;
}

// console.log(lengthOfLastWord("Hello World")); // Output: 5`
// console.log(lengthOfLastWord("a ")); // Output: 1`
// console.log(lengthOfLastWord(" ")); // Output: 0`
// console.log(lengthOfLastWord("Today is a good day")); // Output: 3`
// console.log(lengthOfLastWord("Code")); // Output: 4`

function validParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    }
    // else {
    //   const topElement = stack.pop();
    //   if (map[char] !== topElement) {
    //     console.log(stack, " sss");
    //     return false;
    //   }
    // }
  }

  console.log(stack, " stackk");
  return stack.length === 0;
}

console.log(validParentheses("()")); // Output: true
console.log(validParentheses("()[]{}")); // Output: true
console.log(validParentheses("(]")); // Output: false
console.log(validParentheses("([)]")); // Output: false
console.log(validParentheses("{[]}")); // Output: true
