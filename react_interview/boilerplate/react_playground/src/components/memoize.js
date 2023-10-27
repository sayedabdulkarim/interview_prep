import React, { useState } from "react";

const memoizeFuncOne = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args[0];

    if (cache[key]) {
      console.log({ cache }, " from cache");
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log({ cache }, " added to cache");

      return result;
    }
  };
};

// const memoizedCalculation = memoizeFunc((num) => {
const memoizedCalculation = memoizeFuncOne((num) => {
  return num * 12345;
});
const Memoize = () => {
  const [count, setCount] = useState(0);

  const handleCount = (num) => {
    const value = memoizedCalculation(num);

    setCount(value);
  };

  return (
    <div>
      <h1>Memo: {count}</h1>

      <hr />
      <hr />
      <hr />

      <button onClick={() => handleCount(4)}>Count 4</button>
      <button onClick={() => handleCount(4)}>Count 4</button>
      <button onClick={() => handleCount(16)}>Count 16</button>
      <button onClick={() => handleCount(16)}>Count 16</button>
      <button onClick={() => handleCount(20)}>Count 20</button>
      <button onClick={() => handleCount(20)}>Count 20</button>
    </div>
  );
};

export default Memoize;
