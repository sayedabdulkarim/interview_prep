import React, { forwardRef, useImperativeHandle } from "react";

const App = () => {
  const childRef = React.useRef();

  const handleChildClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleChildClick}>Call Child Method</button>
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick: () => {
        console.log("Child component method called");
      },
    };
  });
  return <div>Child Component</div>;
});

export default App;
