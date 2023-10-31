function revStr(str) {
  if (!str.length) return "";

  let lastElem = str[str.length - 1];

  str = str.slice(0, str.length - 1);

  return lastElem + revStr(str);
}

// console.log(revStr("hello"));

function fibonacci(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(5));

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  if (!str) return null;

  let lastElem = str[str.length - 1];

  if (vowels.includes(lastElem)) {
    count++;
  }

  str = str.slice(0, str.length - 1);
  return count + countVowels(str);
}

console.log(countVowels("apple"));
