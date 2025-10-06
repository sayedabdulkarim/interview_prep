import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("Child Clicked");
      },
    };
  });

  return <div>Child Component</div>;
});

export default App;
