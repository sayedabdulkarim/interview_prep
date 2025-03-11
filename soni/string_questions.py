'''
String Interview Questions:

Easy Level Questions:
• Valid Anagram
  - Check if two strings are anagrams of each other
  - Example: "anagram" and "nagaram" are anagrams

• Add Digits
  - Asked in Apollo.io
  - Given an integer, repeatedly add its digits until result is single digit
  - Example: 38 → 3 + 8 = 11 → 1 + 1 = 2

• Valid Parentheses
  - Asked in Forward Network
  - Check if string has valid parentheses pairs (), [], {}
  - Example: "()[]{}" is valid, "([)]" is not valid

• Odd String Difference
  - Find string that is different when comparing character differences
  - Example: Find odd one out based on character difference pattern

Medium Level Questions:
• Group Anagrams
  - Group strings that are anagrams of each other
  - Example: ["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]

• Find All Anagrams in a String
  - Asked in Uber (frequently asked)
  - Find all start indices of anagrams of pattern in string
  - Example: s="cbaebabacd", p="abc" → [0,6]

• Count and Say
  - Asked in Multiplier
  - Generate sequence where each term describes previous term
  - Example: 1 → "one 1" → "11" → "two 1s" → "21"

• Longest Substring Without Repeating Characters
  - Asked in ShareChat & Mind Tickle
  - Find longest substring with unique characters
  - Example: "abcabcbb" → "abc" (length 3)

• Decode String
  - Decode string with format k[encoded_string]
  - Example: "3[a]2[bc]" → "aaabcbc"

• Search Suggestion System
  - Design system to suggest products after each character typed
  - Example: Show suggestions as user types search query

• Implement Trie (Prefix Tree)
  - Concept used in Typeahead
  - Implement prefix tree with insert, search, startsWith methods
  - Used for efficient string search and prefix matching

Hard Level Questions:
• Minimum Window Substring
  - Find smallest substring containing all characters of target
  - Example: Find smallest substring containing all letters of "ABC"

• Text Justification
  - Asked in Coursera
  - Format text with exact width and proper justification
  - Example: Align text to both left and right margins

• Basic Calculator
  - Asked in machine coding rounds
  - Evaluate string expressions with numbers and basic operations
  - Example: Evaluate "3 + 5 * (2 - 1)"
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