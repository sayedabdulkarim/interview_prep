import React, { forwardRef, useImperativeHandle, useRef } from "react";

const App = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>Helllo</h1>
      <button onClick={handleClick}>handleClick</button>
      <Child ref={childRef} />
    </div>
  );
};

const Child = forwardRef((_, ref) => {
  // useImperativeHandle(
  //   (ref,
  //   () => {
  //     return {
  //       childClick() {
  //         console.log("clicked");
  //       },
  //     };
  //   })
  // );
  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("clicked");
      },
    };
  });

  return <h1>Child COmponent</h1>;
});
export default App;
