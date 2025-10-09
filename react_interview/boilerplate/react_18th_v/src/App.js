import React from "react";

const App = () => {
  const childRef = React.useRef(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComp ref={childRef} />
      <button onClick={handleClick}>Call Child Method</button>
    </div>
  );
};

const ChildComp = React.forwardRef((props, ref) => {
  React.useImperativeHandle(
    ref,
    () => {
      return {
        childClick: () => {
          console.log("Child component method called!");
        },
      };
    },
    []
  );

  return <div>Child Component</div>;
});

export default App;
