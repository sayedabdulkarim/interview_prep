import React, { useState } from "react";

const useInput = (val) => {
  const [inpVal, setInpVal] = useState(val);

  const handleChange = (e) => {
    setInpVal(e.target.value);
  };

  const handleReset = (_) => {
    setInpVal(val);
  };

  return { inpVal, handleChange, handleReset };
};

const App = () => {
  const {
    inpVal: firstName,
    handleChange: handleFirstNameChange,
    handleReset: handleFirstNameReset,
  } = useInput("");
  const {
    inpVal: lastName,
    handleChange: handleLastNameChange,
    handleReset: handleLastNameReset,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName }, " submitted");
  };

  const handleReset = () => {
    handleFirstNameReset("");
    handleLastNameReset("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleReset}>
          RESET
        </button>
      </form>
    </div>
  );
};

export default App;
