import React, { useImperativeHandle, forwardRef, useRef } from "react";

const App = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.chlldClick();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComp ref={childRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

// const ChildComp = useForwardRef((props, ref) => {
const ChildComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      chlldClick: () => {
        console.log("child click");
      },
    };
  });

  return <div>ChildComp</div>;
}, []);

export default App;
