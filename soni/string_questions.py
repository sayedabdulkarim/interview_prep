'''
String Interview Questions:

Easy Level Questions:
• Valid Anagram
  - Input: s = "anagram", t = "nagaram"
  - Output: true
  - Input: s = "rat", t = "car"
  - Output: false

• Add Digits
  - Input: num = 38
  - Output: 2 (3+8=11, 1+1=2)
  - Input: num = 0
  - Output: 0

• Valid Parentheses
  - Input: s = "()[]{}"
  - Output: true
  - Input: s = "([)]"
  - Output: false

• Odd String Difference
  - Input: words = ["adc","wzy","abc"]
  - Output: "abc"
  - Input: words = ["aaa","bob","ccc","ddd"]
  - Output: "bob"

Medium Level Questions:
• Group Anagrams
  - Input: strs = ["eat","tea","tan","ate","nat","bat"]
  - Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  - Input: strs = [""]
  - Output: [[""]]

• Find All Anagrams in a String
  - Input: s = "cbaebabacd", p = "abc"
  - Output: [0,6]
  - Input: s = "abab", p = "ab"
  - Output: [0,1,2]

• Count and Say
  - Input: n = 1
  - Output: "1"
  - Input: n = 4
  - Output: "1211"

• Longest Substring Without Repeating Characters
  - Input: s = "abcabcbb"
  - Output: 3 ("abc")
  - Input: s = "bbbbb"
  - Output: 1 ("b")

• Decode String
  - Input: s = "3[a]2[bc]"
  - Output: "aaabcbc"
  - Input: s = "3[a2[c]]"
  - Output: "accaccacc"

• Search Suggestion System
  - Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
  - Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
  - Input: products = ["havana"], searchWord = "havana"
  - Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

• Implement Trie (Prefix Tree)
  - Input: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"], [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
  - Output: [null, null, true, false, true, null, true]
  - Input: ["Trie", "insert", "insert", "insert", "search", "startsWith"], [[], ["hello"], ["help"], ["hell"], ["help"], ["hel"]]
  - Output: [null, null, null, null, true, true]

Hard Level Questions:
• Minimum Window Substring
  - Input: s = "ADOBECODEBANC", t = "ABC"
  - Output: "BANC"
  - Input: s = "a", t = "a"
  - Output: "a"

• Text Justification
  - Input: words = ["This", "is", "an", "example"], maxWidth = 16
  - Output: ["This    is    an","example        "]
  - Input: words = ["What","must","be"], maxWidth = 6
  - Output: ["What  ","must  ","be    "]

• Basic Calculator
  - Input: s = "1 + 1"
  - Output: 2
  - Input: s = " 2-1 + 2 "
  - Output: 3
'''

# String Questions for Interview Preparation

# ====== EASY QUESTIONS ======
# 1. Valid Anagram
#    - Difficulty: Easy
#    - Note: -
#    Question: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
#    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

'''
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

const sortString = (str) => {
  const arr = str.split("");

  // Bubble sort implementation
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap characters
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr.join("");
};

// isAnagram using our custom sort helper
const isAnagramCustomSort = (s, t) => {
  if (s.length !== t.length) return false;

  const sortedS = sortString(s);
  const sortedT = sortString(t);

  return sortedS === sortedT;
};

'''

# 4. Add Digits
#    - Difficulty: Easy
#    - Note: Asked in Apollo.io
#    Question: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

'''
const addDigitsSimple = (num) => {
  return num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
};

function addDigitsSimple(num) {
  var numStr = num.toString();
  var digits = numStr.split("");
  var sum = 0;

  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }

  return sum;
}


console.log(addDigits(38));

//more output input
console.log(addDigits(123456789)); // 45 -> 9
console.log(addDigits(1234567890)); // 45 -> 9
console.log(addDigits(12345678901)); // 46 -> 10 -> 1
console.log(addDigits(123456789012)); // 46 -> 10 -> 1
console.log(addDigits(1234567890123)); // 46 -> 10 -> 1
console.log(addDigits(12345678901234)); // 46 -> 10 -> 1
console.log(addDigits(123456789012345)); // 46 -> 10 -> 1

'''

# 6. Valid Parentheses
#    - Difficulty: Easy
#    - Note: Asked in Forward Network
#    Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
#    determine if the input string is valid. The string is valid if all open brackets are closed 
#    in the correct order.

# 10. Odd String Difference
#    - Difficulty: Easy
#    - Note: -
#    Question: Find the string that is different when comparing character differences between strings.

# ====== MEDIUM QUESTIONS ======
# 2. Group Anagrams
#    - Difficulty: Medium
#    - Note: -
#    Question: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
#    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

# 3. Find All Anagrams in a String
#    - Difficulty: Medium
#    - Note: Asked in Uber, frequently asked
#    Question: Given two strings s and p, return an array of all the start indices of p's anagrams in s.
#    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

# 5. Count and Say
#    - Difficulty: Medium
#    - Note: Asked in Multiplier
#    Question: The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
#    countAndSay(1) = "1"
#    countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1)

# 7. Longest Substring Without Repeating Characters
#    - Difficulty: Medium
#    - Note: Asked in ShareChat & Mind Tickle
#    Question: Given a string s, find the length of the longest substring without repeating characters.

# 9. Decode String
#    - Difficulty: Medium
#    - Note: -
#    Question: Given an encoded string, return its decoded string.
#    The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is 
#    being repeated exactly k times.

# 13. Search Suggestion System
#    - Difficulty: Medium
#    - Note: -
#    Question: Design a system that suggests products after each character of a search word is typed.

# 14. Implement Trie (Prefix Tree)
#    - Difficulty: Medium
#    - Note: Concept used in Typeahead
#    Question: Implement a trie (prefix tree) with insert, search, and startsWith methods.

# ====== HARD QUESTIONS ======
# 8. Minimum Window Substring
#    - Difficulty: Hard
#    - Note: -
#    Question: Given two strings s and t, return the minimum window substring of s such that every 
#    character in t (including duplicates) is included in the window. If there is no such substring, 
#    return the empty string "".

# 11. Text Justification
#    - Difficulty: Hard
#    - Note: Asked in Coursera
#    Question: Given an array of strings words and a width maxWidth, format the text such that each line 
#    has exactly maxWidth characters and is fully (left and right) justified.

# 12. Basic Calculator
#    - Difficulty: Hard
#    - Note: Asked in machine coding to build a calculator
#    Question: Given a string s representing a valid expression, implement a basic calculator to evaluate it.
#    The expression string may contain open ( and closing parentheses ), the plus + or minus sign -,
#    non-negative integers and empty spaces.