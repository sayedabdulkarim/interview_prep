//udemy course questions

/**
 * push all the number in an array nd return pushIntoArrRec(5) [5,4,3,2,1]
 * sumRange (3) - 6
 * factorial(5) - 120
 * productOfArray [1,2,3, 10] - 60
 * recursiveRange- same as sumRange
 */

//pushIntoArr

function pushIntoArr(num) {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
}

const res = [];

function pushIntoArrRec(num) {
  if (num <= 0) {
    //base
    console.log("done");
    return;
  }
  res.push(num);
  num--;
  console.log(res);
  pushIntoArrRec(num);
}

// sumRange
function sumRange(num) {
  if (num == 1) return 1;

  num + sumRange(num - 1);
}

//factorial
function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1);
}

///productOfArray
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function productOfArray(arr) {
  let count = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return 1;

    if (helperInput[0]) {
      count *= helperInput[0];
    }

    helper(helperInput.slice(1));
    // return
  }

  helper(arr);

  return count;
}

////recursiveRange
function recursiveRange(num) {
  if (num == 0) return 0;

  return num + recursiveRange(num - 1);
}
