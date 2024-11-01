import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Parent = () => {
  //ref
  const childRef = useRef();

  //method
  const handleClick = () => {
    console.log(childRef.current, " redd");
    if (childRef?.current?.childClick) {
      childRef?.current?.childClick();
    }
  };

  return (
    <div>
      <Children ref={childRef} />
      <button onClick={handleClick}>Clikc for Child</button>
    </div>
  );
};

const Children = forwardRef((_, ref) => {
  // useImperativeHandle(ref, () => ({
  //   childClick() {
  //     console.log("child clikced");
  //   },
  // }));

  useImperativeHandle(ref, () => {
    return {
      childClick() {
        console.log("gotchaaaaa");
      },
    };
  });
  return <div>Children</div>;
});

export default Parent;
