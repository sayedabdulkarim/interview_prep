import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  //
  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Parent button</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("clicked from child");
      },
    };
  });

  return <h1>ChildComponent</h1>;
});

export default App;
