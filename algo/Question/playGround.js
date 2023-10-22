function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(7));

// 0, 1, 1, 2, 3, 5, 8, 13;

function countVowels(str) {
  if (str.length == 0) return 0;
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let lastElem = str[str.length - 1];

  if (vowels.includes(lastElem)) {
    count++;
  }
  str = str.slice(0, str.length - 1);
  return count + countVowels(str);
}

// function countVowels(str) {
//   if (str.length == 0) return 0; // Base case: return 0 when string is empty
//   str = str.toLowerCase();
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   let lastElem = str[str.length - 1];

//   if (vowels.includes(lastElem)) {
//     count++;
//   }

//   // Accumulate counts by adding the current count to the recursive call's result
//   return count + countVowels(str.slice(0, str.length - 1));
// }

console.log(countVowels("Hello, World!")); // Output: 3

// console.log(countVowels("Hello, World!")); // Output: 3
