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
      <button onClick={handleClick}>Child click</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("child click");
      },
    };
  });

  return <div>App</div>;
});

export default App;
