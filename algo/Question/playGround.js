function revStr(str) {
  str = [...str];

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  return str.join("");
}

// console.log(revStr("hello"));
function cleanString(str) {
  str = str.toLowerCase();
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")) {
      res += str[i];
    }
  }
  return res;
}

function isPalindrome(str) {
  const cleanedStr = cleanString(str);

  return cleanedStr === [...cleanedStr].reverse("").join("");
}

// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("A man a plan a canal Panama")); // Output: true

function firstUniqueChar(str) {
  function getObj(params) {
    const obj = {};

    for (i of params) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const getCount = getObj(str);

  for (let i in getCount) {
    if (getCount[i] === 1) {
      return str.indexOf(i);
    }
  }
  return -1;
}

// console.log(firstUniqueChar("leetcode")); // Output: 0
// console.log(firstUniqueChar("loveleetcode")); // Output: 2
// console.log(firstUniqueChar("aabbcc")); // Output: -1
// console.log(firstUniqueChar("")); // Output: -1
// console.log(firstUniqueChar("z")); // Output: 0

function lengthOfLastWord(str) {
  str = str.trim().split(" ");
  return str[str.length - 1].length;
}

// console.log(lengthOfLastWord("Hello World")); // Output: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
// console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 7
// console.log(lengthOfLastWord(" ")); // Output: 0
// console.log(lengthOfLastWord("a")); // Output: 1

function validParentheses(str) {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (i of str) {
    if (Object.keys(map).includes(i)) {
      stack.push(i);
    } else {
      const popped = stack.pop();
      if (map[popped] !== i) return false;
    }
  }

  return stack.length == 0;
}

console.log(validParentheses("()")); // Output: true
console.log(validParentheses("()[]{}")); // Output: true
console.log(validParentheses("(]")); // Output: false
console.log(validParentheses("([)]")); // Output: false
console.log(validParentheses("{[]}")); // Output: true
console.log(validParentheses("")); // Output: true
console.log(validParentheses("[")); // Output: false
