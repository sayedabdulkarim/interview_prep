import React, { forwardRef, useImperativeHandle } from "react";

const Parent = () => {
  const childRef = React.useRef();

  const handleClick = () => {
    console.log(childRef, " ccc");
    if (childRef.current && childRef.current.childClick) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Child Click from Parent</button>
      <Child ref={childRef} />
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("Child Clicked from Parent");
      },
    };
  });

  return <h1>Child</h1>;
});

export default Parent;
