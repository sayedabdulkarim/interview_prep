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
      <button onClick={handleClick}>Child clicking</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("clikced fro child");
      },
    };
  });

  return <h1>child Component</h1>;
});

export default App;
