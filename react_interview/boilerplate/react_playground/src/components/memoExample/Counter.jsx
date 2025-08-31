import React, { memo } from "react";

const Counter = ({ count, handleIncrement, userName }) => {
  console.log("Child Rendered");
  return (
    <div>
      Counter : {count}
      <button onClick={handleIncrement}>Increment</button>
      <hr />
      <div>
        User Name: {userName.firstName} {userName.lastName}
      </div>
    </div>
  );
};

export default memo(Counter, (prevProps, nextProps) => {
  return prevProps.count === nextProps.count;
});

// export default memo(Counter, function areEqual(prevProps, nextProps) {
//   return prevProps.count === nextProps.count;
// });

// export default memo(Counter);
