import React, { memo, useCallback, useMemo, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [countParent, setCountParent] = useState(0);
  //memo
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const handlClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // const handlClick = () => {
  //   setCount((prev) => prev + 1);
  // };
  const handlClickParent = () => {
    setCountParent((prev) => prev + 1);
  };

  //memo
  // const maxNumber = () => {
  //   console.log("Calculating max number...");
  //   return Math.max(...numbers);
  // };
  const maxNumber = useMemo(() => {
    console.log("Calculating max number...");
    return Math.max(...numbers);
  }, [numbers]);

  console.log(" parent render ");

  return (
    <div>
      <h1>Parent {countParent}</h1>
      <button onClick={handlClickParent}>HANDLECLIKCPARENT</button>
      <br />
      <br />
      <ChildOne count={count} handlClick={handlClick} />
      <br />
      <br />
      <ChildTwo />
      {/*  */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h1>Max Number: {maxNumber()}</h1> */}
      <h1>Max Number: {maxNumber}</h1>
      {/* 
        the maximum number is only recalculated when the numbers array changes. This means that clicking the "Change Other State" button won't trigger a recalculation, */}

      {JSON.stringify(numbers, null, 4)}
      <button
        onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 10)])}
      >
        Add Random Number
      </button>
    </div>
  );
};

const ChildOne = memo(({ count, handlClick }) => {
  console.log("childOne render");
  return (
    <>
      <h1>Child One - {count}</h1>
      <button onClick={handlClick}>HANDLE CLIKC</button>
    </>
  );
});

const ChildTwo = memo(() => {
  console.log("childTwo render");
  return <h1>Child Two </h1>;
});

export default Parent;
