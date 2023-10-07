import React, { useMemo } from "react";

const ExpensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  // Simulate an expensive calculation
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return num * sum;
};

const App = () => {
  const [num, setNum] = React.useState(1);
  const [otherState, setOtherState] = React.useState(false);

  const expensiveValue = useMemo(() => {
    return ExpensiveCalculation(num);
  }, [num]); // The function will only be re-computed when `num` changes

  function memoize(fn) {
    const cache = {};

    return function (...args) {
      const key = JSON.stringify(args);

      if (key in cache) {
        console.log(
          {
            cache,
            key,
          },
          "Using cached result"
        );
        return cache[key];
      }

      const result = fn(...args);
      cache[key] = result;

      console.log(
        {
          cache,
          key,
        },
        "Calculating new result"
      );
      return result;
    };
  }

  const expensiveFunction = (num) => {
    console.log("Running expensive function...");
    return num ** 2;
  };

  const memoizedExpensiveFunction = memoize(expensiveFunction);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
      <button onClick={() => setOtherState(!otherState)}>
        Change Other State
      </button>

      {/* // */}
      <button onClick={() => console.log(memoizedExpensiveFunction(4))}>
        4
      </button>
      <button onClick={() => console.log(memoizedExpensiveFunction(16))}>
        16
      </button>
      <button onClick={() => console.log(memoizedExpensiveFunction(4))}>
        4
      </button>
    </div>
  );
};

export default App;
