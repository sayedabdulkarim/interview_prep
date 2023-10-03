function majorityElement(arr) {
  //getObj
  function getObj(nums) {
    const obj = {};

    for (i of nums) {
      obj[i] = (obj[i] || 0) + 1;
    }

    return obj;
  }

  const length = Math.floor(arr.length / 2);
  const getObjCount = getObj(arr);
  let element = null;
  // console.log(getObjCount, length);
  for (i in getObjCount) {
    if (getObjCount[i] > length) {
      element = +i;
      break;
    }
    // getObjCount[i] > length ? (element = i) : undefined;
  }
  return element;
}

console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2]));
