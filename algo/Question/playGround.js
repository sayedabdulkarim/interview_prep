const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args[0]]) {
      console.log(" from cache");
      return cache[args[0]];
    } else {
      const result = fn(args);
      cache[args[0]] = result;
      console.log(" added new");
      return result;
    }
  };
};

const memoizeFunc = memoize((num) => num * 2);

console.log(memoizeFunc(3));
console.log(memoizeFunc(5));
console.log(memoizeFunc(5));
console.log(memoizeFunc(3));
console.log(memoizeFunc(3));
