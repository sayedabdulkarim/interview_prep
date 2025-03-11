// # 4. Add Digits
// #    - Difficulty: Easy
// #    - Note: Asked in Apollo.io
// #    Question: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Original method (keeps adding until single digit)
const addDigits = (num) => {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

// in some simple way
const addDigitsSimple = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
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

console.log(addDigitsSimple(38));
