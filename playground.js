// Method 1: Using Set
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

// Method 2: Using filter
const removeDuplicatesFilter = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Method 3: Using reduce
const removeDuplicatesReduce = (arr) => {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
};

// Example usage:
const arr = [1, 2, 3, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]
console.log(removeDuplicatesFilter(arr)); // [1, 2, 3, 4, 5]
console.log(removeDuplicatesReduce(arr)); // [1, 2, 3, 4, 5]

// Method 4: Using Map
const removeDuplicatesMap = (arr) => {
  const map = new Map();
  return arr.filter((item) => {
    if (!map.has(item)) {
      map.set(item, true);
      return true;
    }
    return false;
  });
};

// Example usage:
console.log(removeDuplicatesMap(arr)); // [1, 2, 3, 4, 5]

// Method 5: Using Set and filter
const removeDuplicatesSetFilter = (arr) => {
  return [...new Set(arr)];
};

//with for loop
const removeDuplicatesForLoop = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Example usage:
