import React, { forwardRef, useImperativeHandle } from "react";

const App = () => {
  const childRef = React.useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Call Child Method</button>
      <ChildComponent ref={childRef} />
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
