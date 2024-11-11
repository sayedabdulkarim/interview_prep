import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const handleChildClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleChildClick}>CHILD CLICK</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("child clicked");
      },
    };
  });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
});

export default App;
