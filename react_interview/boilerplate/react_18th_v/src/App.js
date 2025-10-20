import { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Click Child from Parent</button>
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick: () => {
        console.log("Child Clicked");
      },
    };
  });

  return <h1>Child Component</h1>;
});

export default App;
