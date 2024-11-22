import React, { useState } from "react";

const useInput = (initialVal) => {
  const [val, setVal] = useState(initialVal);

  //
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleReset = (e) => {
    setVal(initialVal);
  };

  return [val, handleChange, handleReset];
};

const App = () => {
  return <div>App</div>;
};

export default App;
