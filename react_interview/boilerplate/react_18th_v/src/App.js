import React, { memo, useCallback, useMemo, useState } from "react";

const App = () => {
  //
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([
    1, 2, 3, 1, 3, 4, 5, 22, 41, 333, 1, 2, 1, 3, 4,
  ]);
  //
  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const getMax = useMemo(() => {
    console.log(" get Max called");
    return Math.max(...arr);
  }, [arr]);

  // const pushRandom = () => {
  //   const rand = Math.random();
  //   return setArr.push(rand);
  // };

  console.log("render parent");
  return (
    <div>
      <h1>Parent {getMax}</h1>
      <pre>{JSON.stringify(arr, null, 2)}</pre>
      <button
        onClick={() => setToggle((prev) => !prev)}
      >{`Toggle - ${toggle}`}</button>
      {/* <button onClick={() => pushRandom()}>PUSH MAX</button> */}
      <button onClick={() => setArr((prev) => [...prev, Math.random()])}>
        PUSH MAX
      </button>

      <ComponentOne counter={counter} handleCounter={handleCounter} />
      <br />
      <br />
      <ComponentTwo />
    </div>
  );
};

const ComponentOne = memo(({ counter, handleCounter }) => {
  console.log("render component one");
  return (
    <div>
      <h1>Counter One : {counter}</h1>
      <button onClick={handleCounter}>handleCounter</button>
    </div>
  );
});

const ComponentTwo = memo(() => {
  console.log("render component two");
  return <div>App</div>;
});

export default App;
