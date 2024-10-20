import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Parent = () => {
  const childRef = useRef();

  const handleSubmit = () => {
    console.log("clicked");
    childRef.current.testClick();
    console.log(childRef);
  };
  return (
    <div>
      <h1>Parent</h1>
      <hr />
      <Children ref={childRef} />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

const Children = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    testClick() {
      console.log("clickedd from child");
    },
  }));
  return (
    <div>
      <h1>Childreenn</h1>
      <h1>Childreenn</h1>
      <h1>Childreenn</h1>
      <h1>Childreenn</h1>
    </div>
  );
});
// const Children = () => {
//   return (
//     <div>
//       <h1>Childreenn</h1>
//       <h1>Childreenn</h1>
//       <h1>Childreenn</h1>
//       <h1>Childreenn</h1>
//     </div>
//   );
// };

export default Parent;
