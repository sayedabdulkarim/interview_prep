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
      <button onClick={handleClick}>CLick</button>
      <ChildComp ref={childRef} />
    </div>
  );
};

const ChildComp = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("child Cliick");
      },
    };
  });

  return <h1>Child Component</h1>;
});

export default App;
