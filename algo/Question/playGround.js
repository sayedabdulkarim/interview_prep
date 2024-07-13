// const array = [64, 34, 25, 12, 22, 11, 90, 64];
// const array = [10, 9, 8, 7, 6];
const array = [64, 34, 25, 12, 22, 0, 0, 11, 90, 100, -100, 64];
const string = "A man a plan a canal Panama";
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