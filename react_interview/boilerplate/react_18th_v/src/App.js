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
      <ChildCOmponent ref={childRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const ChildCOmponent = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("child clicked");
      },
    };
  });

  return <h1>Child COmponent</h1>;
});

export default App;
