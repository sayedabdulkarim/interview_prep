// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";

function numberToExcelColumn(number) {
  let result = "";
  while (number > 0) {
    const remainder = (number - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    number = Math.floor((number - 1) / 26);
  }
  return result;
}

function convertToExcelLabels(numbers) {
  const excelLabels = [];
  for (let i = 0; i < numbers.length; i++) {
    excelLabels.push(numberToExcelColumn(numbers[i]));
  }
  return excelLabels;
}
function KthLargest(nums, n) {
  //sort
  function dSort(arr) {
    let isSorted = false;

    while (!isSorted) {
      isSorted = true;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          const temp = arr[i];

          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          isSorted = false;
        }
      }
    }
    return arr;
  }

  //uniObj
  const getSortedArr = dSort(nums);
  const uniObj = new Set(getSortedArr);

  //change to arr
  const getArr = Array.from(uniObj);

  return getArr[n - 1];
}
