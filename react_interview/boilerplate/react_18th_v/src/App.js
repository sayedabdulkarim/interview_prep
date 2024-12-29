import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const hanldeClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={hanldeClick}>Click</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("childClick");
      },
    };
  });
  return <div>App</div>;
});

export default App;
