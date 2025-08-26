# String Questions

## Basic String Operations

1. **Reverse a String**

   ```javascript
   function revStr(str) {
     str = [...str];
     for (i = 0; i < Math.floor(str.length / 2); i++) {
       [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
     }
     return str.join("");
   }
   ```

   **Examples:**

   - Input: `"hello"` → Output: `"olleh"`
   - Input: `"JavaScript"` → Output: `"tpircSavaJ"`
   - Input: `"a"` → Output: `"a"`

2. **Clean String (Remove Non-Alphanumeric)**

   ```javascript
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
   ```

   **Examples:**

   - Input: `"A man, a plan, a canal: Panama"` → Output: `"amanaplanacanalpanama"`
   - Input: `"race a car"` → Output: `"raceacar"`
   - Input: `"hello123!@#"` → Output: `"hello123"`

3. **Check if String is Palindrome**

   ```javascript
   function isPalindrome(str) {
     const cleanedStr = cleanString(str);
     const reversedStr = cleanedStr.split("").reverse().join("");
     return cleanedStr === reversedStr;
   }
   ```

   **Examples:**

   - Input: `"A man, a plan, a canal: Panama"` → Output: `true`
   - Input: `"race a car"` → Output: `false`
   - Input: `"Madam"` → Output: `true`

4. **Find First Unique Character**

   ```javascript
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
   ```

   **Examples:**

   - Input: `"leetcode"` → Output: `0` (first unique char 'l' at index 0)
   - Input: `"loveleetcode"` → Output: `2` (first unique char 'v' at index 2)
   - Input: `"aabb"` → Output: `-1` (no unique characters)

5. **Length of Last Word**

   ```javascript
   function lengthOfLastWord(str) {
     str = str.trim().split(" ");
     return str[str.length - 1].length;
   }
   ```

   **Examples:**

   - Input: `"Hello World"` → Output: `5`
   - Input: `"   fly me   to   the moon  "` → Output: `4`
   - Input: `"luffy is still joyboy"` → Output: `6`

## Parentheses and Brackets

6. **Valid Parentheses Check**

   ```javascript
   function isValidParntheses(s) {
     const stack = [];
     const map = {
       ")": "(",
       "}": "{",
       "]": "[",
     };

     for (const char of s) {
       if (["(", "{", "["].includes(char)) {
         stack.push(char);
       } else {
         const topElement = stack.pop();
         if (map[char] !== topElement) {
           return false;
         }
       }
     }

     return stack.length === 0;
   }
   ```

   **Examples:**

   - Input: `"()"` → Output: `true`
   - Input: `"()[]{}"` → Output: `true`
   - Input: `"(]"` → Output: `false`

7. **Another Approach to Valid Parentheses**

   ```javascript
   function validParenthesesOwn(str) {
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
   ```

   **Examples:**

   - Input: `"{[()]}"` → Output: `true`
   - Input: `"([)]"` → Output: `false`
   - Input: `"((("` → Output: `false`

## String Conversion and Manipulation

8. **String to Integer (atoi)**

   ```javascript
   function atoi(str) {
     let trimmedStr = str.trim(); // Remove leading white-spaces
     let result = 0;
     let sign = 1;
     let startIndex = 0;

     // Check for the sign
     if (trimmedStr[0] === "-" || trimmedStr[0] === "+") {
       sign = trimmedStr[0] === "-" ? -1 : 1;
       startIndex = 1;
     }

     // Iterate through each character and update result
     for (let i = startIndex; i < trimmedStr.length; i++) {
       const char = trimmedStr[i];

       // Stop if the current character is not a number
       if (isNaN(char) || char === " ") {
         break;
       }

       result = result * 10 + Number(char);
     }

     return result * sign;
   }
   ```

   **Examples:**

   - Input: `"42"` → Output: `42`
   - Input: `"   -42"` → Output: `-42`
   - Input: `"4193 with words"` → Output: `4193`

9. **Count and Say**

   ```javascript
   function countAndSay(n) {
     let current = "1";

     for (let i = 1; i < n; i++) {
       let next = "";
       let count = 1;

       for (let j = 0; j < current.length; j++) {
         if (current[j] === current[j + 1]) {
           count++;
         } else {
           next += count + current[j];
           count = 1;
         }
       }

       current = next;
     }

     return current;
   }
   ```

   **Examples:**

   - Input: `1` → Output: `"1"`
   - Input: `4` → Output: `"1211"` (sequence: "1" → "11" → "21" → "1211")
   - Input: `5` → Output: `"111221"`

10. **Longest Common Prefix**

    ```javascript
    function longestCommonPrefix(strs) {
      if (strs.length === 0) return "";

      const firstStr = strs[0];
      for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];

        for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== char) {
            return firstStr.slice(0, i);
          }
        }
      }

      return firstStr;
    }
    ```

    **Examples:**

    - Input: `["flower", "flow", "flight"]` → Output: `"fl"`
    - Input: `["dog", "racecar", "car"]` → Output: `""`
    - Input: `["interspecies", "interstellar", "interstate"]` → Output: `"inters"`

## Substring Operations

11. **Length of Longest Substring Without Repeating Characters**

    ```javascript
    function lengthOfLongestSubstring(s) {
      let longest = 0;
      let start = 0;
      const set = new Set();

      for (let end = 0; end < s.length; end++) {
        const char = s[end];

        while (set.has(char)) {
          set.delete(s[start]);
          start++;
        }

        set.add(char);
        longest = Math.max(longest, end - start + 1);
      }

      return longest;
    }
    ```

    **Examples:**

    - Input: `"abcabcbb"` → Output: `3` (substring "abc")
    - Input: `"bbbbb"` → Output: `1` (substring "b")
    - Input: `"pwwkew"` → Output: `3` (substring "wke")

12. **Longest Substring Without Repeating Characters (Return Substring)**

    ```javascript
    function longestSubstringWithoutRepeatingChars(s) {
      let charIndex = {};
      let start = 0;
      let maxLen = 0;
      let maxSubstring = "";

      for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char in charIndex && charIndex[char] >= start) {
          start = charIndex[char] + 1;
        }

        charIndex[char] = i;

        if (i - start + 1 > maxLen) {
          maxLen = i - start + 1;
          maxSubstring = s.slice(start, i + 1);
        }
      }

      return { length: maxLen, substring: maxSubstring };
    }
    ```

    **Examples:**

    - Input: `"abcabcbb"` → Output: `{length: 3, substring: "abc"}`
    - Input: `"bbbbb"` → Output: `{length: 1, substring: "b"}`
    - Input: `"pwwkew"` → Output: `{length: 3, substring: "wke"}`

## String Arithmetic

13. **Multiply Strings (Basic Approach)**

    ```javascript
    function multiplyStringsBasic(num1, num2) {
      // Step 1: Convert the input strings to integers
      const int1 = parseInt(num1);
      const int2 = parseInt(num2);

      // Step 2: Multiply the integers
      const product = int1 * int2;

      // Step 3: Convert the result back to a string
      const productStr = product.toString();

      return productStr;
    }
    ```

    **Examples:**

    - Input: `("2", "3")` → Output: `"6"`
    - Input: `("123", "456")` → Output: `"56088"`
    - Input: `("0", "123")` → Output: `"0"`

14. **Multiply Strings (Digit-by-Digit)**

    ```javascript
    function multiplyStrings(num1, num2) {
      let len1 = num1.length;
      let len2 = num2.length;
      let result = Array(len1 + len2).fill(0);

      for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
          let mul = Number(num1[i]) * Number(num2[j]);

          // Calculate the position to store this multiplication result
          let p1 = i + j;
          let p2 = i + j + 1;

          // Add the multiplication result to the result array
          let sum = mul + result[p2];

          result[p2] = sum % 10;
          result[p1] += Math.floor(sum / 10);
        }
      }

      // Convert result array to string and remove leading zeros if any
      let resultStr = result.join("").replace(/^0+/, "");
      return resultStr ? resultStr : "0";
    }
    ```

    **Examples:**

    - Input: `("2", "3")` → Output: `"6"`
    - Input: `("123", "456")` → Output: `"56088"`
    - Input: `("999", "999")` → Output: `"998001"`

## Pattern Matching

15. **Regular Expression Matching**

    ```javascript
    function isMatch(s, p) {
      // Base case: both the string and the pattern are empty, it's a match
      if (p.length === 0) return s.length === 0;

      // First character of the string and the pattern match or pattern has a '.'
      const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");

      // If pattern has '*', it can either match zero of the preceding element or at least one.
      if (p.length >= 2 && p[1] === "*") {
        // Two options:
        // 1. '*' acts as zero occurrences.
        // 2. '*' acts as multiple occurrences of the preceding element.
        return (
          isMatch(s, p.substring(2)) ||
          (firstMatch && isMatch(s.substring(1), p))
        );
      } else {
        // The '*' character is not in play for this recursion.
        return firstMatch && isMatch(s.substring(1), p.substring(1));
      }
    }
    ```

    **Examples:**

    - Input: `("aa", "a")` → Output: `false`
    - Input: `("aa", "a*")` → Output: `true`
    - Input: `("ab", ".*")` → Output: `true`

16. **Wildcard Matching**

    ```javascript
    function isWildcardMatch(s, p) {
      // Base case: both string and pattern are empty
      if (p.length === 0) return s.length === 0;

      // First characters match or pattern has a '?'
      const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === "?");

      // If pattern has a '*', it can match zero or more characters
      if (p[0] === "*") {
        // Two options:
        // 1. '*' acts as zero characters.
        // 2. '*' acts as multiple characters.
        return (
          isWildcardMatch(s, p.substring(1)) ||
          (s.length > 0 && isWildcardMatch(s.substring(1), p))
        );
      } else {
        return firstMatch && isWildcardMatch(s.substring(1), p.substring(1));
      }
    }
    ```

    **Examples:**

    - Input: `("aa", "a")` → Output: `false`
    - Input: `("aa", "*")` → Output: `true`
    - Input: `("cb", "?a")` → Output: `false`
