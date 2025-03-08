function twoSum(arr, t) {
  // [2,7,5,9]

  var map = {}; //{ 2: 0, 7: 1, 5: 2, 9: 3 }

  //map[arr[i]] = i
  for (i = 0; i <= arr.length - 1; i++) {
    const complement = t - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    //{ 2: 0, 7: 1, 5: 2, 9: 3 }
    map[arr[i]] = i;
  }

  return map;
}

console.log(twoSum([2, 7, 11, 15], 9));
