import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      // console.log(childRef);
      childRef.current.childFunc();
    }
  };
  return (
    <div>
      <h1>Paremt component</h1>
      <button onClick={handleClick}>Child Clikc</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childFunc() {
        console.log("chld clicked");
      },
    };
  });
  return <h1>Child component</h1>;
});

export default App;
