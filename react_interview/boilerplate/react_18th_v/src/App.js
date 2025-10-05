import React, { forwardRef, useImperativeHandle } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  const childRef = React.useRef();

  const handleClick = () => {
    if (childRef.current) {
      console.log("clicked from child");
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>App Component</h1>
      <ChildrenComp ref={childRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

const ChildrenComp = forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        childClick() {
          console.log("clicked from child");
        },
      };
    },
    []
  );
  return <div>children</div>;
});

export default App;
