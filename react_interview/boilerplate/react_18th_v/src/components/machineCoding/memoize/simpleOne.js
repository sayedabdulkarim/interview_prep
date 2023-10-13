import React, { useState } from "react";

// Move the memoizeFunc outside of the component
const memoizeFunc = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log({ cache }, "from cache");
      return cache[key];
    } else {
      console.log({ cache }, "added to cache");
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

// Memoize the calculation function outside of the component
const memoizedCalculation = memoizeFunc((num) => {
  const value = num * 12345;
  return value;
});

const Index = () => {
  const [count, setCount] = useState(0);

  const handleCount = (num) => {
    // Use the memoizedCalculation function
    const value = memoizedCalculation(num);
    setCount(value);
  };

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => handleCount(4)}>handleCount 4</button>
      <button onClick={() => handleCount(16)}>handleCount 16</button>
      <button onClick={() => handleCount(4)}>handleCount 4</button>
      <button onClick={() => handleCount(16)}>handleCount 16</button>
      <button onClick={() => handleCount(20)}>handleCount 20</button>
      <button onClick={() => handleCount(25)}>handleCount 25</button>
    </div>
  );
};

export default Index;
