import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>CLICK</button>
      <ChildrenComp ref={childRef} />
    </div>
  );
};

const ChildrenComp = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("clicked child");
      },
    };
  });
  return <h1>Chilld</h1>;
});

export default App;
