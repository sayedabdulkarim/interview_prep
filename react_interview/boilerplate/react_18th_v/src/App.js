import React, { memo, useCallback, useMemo, useState } from "react";

const App = () => {
  //
  const [parentToggle, setParentToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([2, 3, 1, 2, 11, 2, 1, 223, 4, 1, 3]);
  //

  const getMax = useMemo(() => {
    console.log("called getMax");
    return Math.max(...arr);
  }, [arr]);

  const handlePrentToggle = () => {
    setParentToggle((prev) => !prev);
  };

  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("parent");

  return (
    <div>
      <h1>Parent</h1>
      {/* <h1>Max No: {getMax()}</h1> */}
      <h1>Max No: {getMax}</h1>
      <button onClick={handlePrentToggle}>
        parent toggle {parentToggle ? " Yes" : " No"}
      </button>
      <br />
      <br />
      <ChildOne counter={counter} handleCounter={handleCounter} />
      <br />
      <br />
      <ChildTwo />
    </div>
  );
};

const ChildOne = memo(({ counter, handleCounter }) => {
  console.log("render childOne");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>COUNTER</button>
    </div>
  );
});

const ChildTwo = memo(() => {
  console.log("render childTwo");
  return <div>Child Two</div>;
});

export default App;
