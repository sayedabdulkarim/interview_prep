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
'''

# 4. Add Digits
#    - Difficulty: Easy
#    - Note: Asked in Apollo.io
#    Question: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

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