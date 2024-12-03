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
      <h1>Parent</h1>
      <button onClick={handleChildClick}>Click</button>
      <Child ref={childRef} />
    </div>
  );
};

const Child = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log(" child clicked");
      },
    };
  });
  return <h1>Child</h1>;
});

export default App;
