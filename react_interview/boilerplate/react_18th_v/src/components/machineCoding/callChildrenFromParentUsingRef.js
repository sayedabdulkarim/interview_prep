import React, { forwardRef, useImperativeHandle, useRef } from "react";

//
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childClick() {
      console.log("chld Clickedddddddddddddddd");
    },
  }));

  //2nd way
  // useImperativeHandle(ref, () => {
  //   return {
  //     childClick() {
  //       console.log("gotchaaaaa");
  //     },
  //   };
  // });

  return (
    <div>
      <h1>Child</h1>
      <h1>Child</h1>
      <h1>Child</h1>
      <h1>Child</h1>
    </div>
  );
});

///
const App = () => {
  const childRef = useRef();

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.childClick();
    }
  };

  return (
    <div>
      <h1>App</h1>
      <hr />
      <Child ref={childRef} />
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
};

export default App;
