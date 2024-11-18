import React, { memo, useCallback, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [countParent, setCountParent] = useState(0);

  const handlClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // const handlClick = () => {
  //   setCount((prev) => prev + 1);
  // };
  const handlClickParent = () => {
    setCountParent((prev) => prev + 1);
  };

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
