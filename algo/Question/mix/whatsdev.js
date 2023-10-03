const largestOfFour = (a = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

/**
 * reverseString("hello")
 * factorial(5) - 120
 * isPalindrome("eye")
 * findLongestWord("hell world")
 * titleCase("hello world") = "Hello World"
 * largestOfFour
 * chunkyMonkey ([1,2,3,4,5,6], 2) => [ [1,2], [3,4], ... ]
 * mutation ( if all the letters are present in st1 as per str2 mutation(str1, str2) )
 * findMyPlace
 * findArrDiff // findArrDiff([3,5,6], [ 3,4,5,6,78])
 *
 */

function findMyPlace(arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (num >= arr[i] && num <= arr[i + 1]) {
      return i + 1;
    }
  }
  return arr.length;
}

function findArrDiff(arr1, arr2) {
  var res = [];
  var bigArr = arr1.length > arr2.length ? arr1 : arr2;
  var smallArr = arr1.length < arr2.length ? arr1 : arr2;

  for (i = 0; i <= bigArr.length - 1; i++) {
    if (!smallArr.includes(bigArr[i])) {
      res.push(bigArr[i]);
    }
  }

  return res;
}
