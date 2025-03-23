// • Odd String Difference
//   - Input: words = ["adc","wzy","abc"]
//   - Output: "abc"
//   - Input: words = ["aaa","bob","ccc","ddd"]
//   - Output: "bob"

function oddStringDifference(words) {
  let oddString = words.filter((word) => word.length % 2 !== 0);
  let oddStringSorted = oddString.sort((a, b) => a.localeCompare(b));
  return oddStringSorted[Math.floor(oddStringSorted.length / 2)];
}

console.log(oddStringDifference(["adc", "wzy", "abc"])); // abc
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd"])); // bob
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd", "eee"])); // ccc
console.log(oddStringDifference(["aaa", "bob", "ccc", "ddd", "eee", "fff"])); // ddd
