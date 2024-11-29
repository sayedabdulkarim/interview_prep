import React, { memo, useCallback, useState } from "react";

const App = () => {
  //
  const [parentToggle, setParentToggle] = useState(false);
  const [counter, setCounter] = useState(0);

  //
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
