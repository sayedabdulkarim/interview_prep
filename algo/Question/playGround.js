function currying(...args) {
  const add = (...newArgs) => {
    if (newArgs.length === 0) {
      return args.reduce((a, b) => a + b, 0);
    } else {
      return currying(...args, ...newArgs);
    }
  };

  return add;
}

const result = currying(4)(5)(6)(7)();
console.log(result); // Output: 22
