import React, { forwardRef, useImperativeHandle, useRef } from "react";

// const Child = () => {
//   return (
//     <div>
//       <h4>Child</h4>
//       <h4>Child</h4>
//       <h4>Child</h4>
//       <button></button>
//     </div>
//   );
// };

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childClick() {
      console.log("calleddddd");
    },
  }));
  return (
    <div>
      <h4>Child</h4>
      <h4>Child</h4>
      <h4>Child</h4>
    </div>
  );
});

const Parent = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <h1>Parent</h1>
      <h1>Parent</h1>
      <button onClick={() => handleClick()}>Child Click</button>
      <h1>Parent</h1>
      <hr />
      <hr />
      <hr />
      <Child childRef={childRef} />
    </div>
  );
};

export default Parent;
