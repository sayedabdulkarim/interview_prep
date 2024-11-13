import React, { useState } from "react";

const useInput = (initialVal) => {
  const [inpVal, setInpVal] = useState(initialVal);

  const handleChange = (e) => {
    setInpVal(e.target.value);
  };

  const handleReset = () => {
    setInpVal(initialVal);
  };

  return [inpVal, handleChange, handleReset];
};

const App = () => {
  const [emailInp, handleEmailInp, resetEmailInp] = useInput("");
  const [nameInp, handleNameInp, resetNameInp] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ emailInp, nameInp });
    ///reset
    resetNameInp();
    resetEmailInp();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nameInp} onChange={handleNameInp} />
      <br />
      <input type="text" value={emailInp} onChange={handleEmailInp} />
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default App;
