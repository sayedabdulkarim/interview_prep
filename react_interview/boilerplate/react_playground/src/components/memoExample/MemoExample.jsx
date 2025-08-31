import React from "react";
import Counter from "./Counter";

const MemoExample = () => {
  const [parentCount, setParentCount] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [userName, setUserName] = React.useState({
    firstName: "sayak",
    lastName: "roy",
  });

  const handleParentButtonClick = () => {
    setParentCount(parentCount + 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  console.log("Parent Rendered");

  return (
    <div>
      <button onClick={handleParentButtonClick}>Parent button</button>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        userName={userName}
      />
    </div>
  );
};

export default MemoExample;
