function sortDes(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sortDes(left), sortDes(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

// Example usage
const arr = [22, 14, 5, 26, 57, 18, 29];
console.log(sortDes(arr)); // Output should be [57, 29, 26, 22, 18, 14, 5]
