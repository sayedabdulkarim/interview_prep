import React from "react";

const App = () => {
  const childRef = React.useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClicked();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Call Child Method</button>
    </div>
  );
};

const ChildComponent = React.forwardRef((props, ref) => {
  React.useImperativeHandle(
    ref,
    () => {
      return {
        childClicked: () => {
          console.log("Child method called from Parent");
        },
      };
    },
    []
  );

  return <div>Child Component</div>;
});

export default App;
