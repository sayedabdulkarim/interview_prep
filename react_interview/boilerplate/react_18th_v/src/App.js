import React, { useState } from "react";

const useInput = (val) => {
  const [inpVal, setInpVal] = useState(val);

  //
  const handleChange = (e) => {
    setInpVal(e.target.value);
  };

  const handleReset = () => {
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

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName }, " submitted");
  };

  const handleReset = () => {
    handleFirstNameReset();
    handleLastNameReset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <input type="text" value={lastName} onChange={handleLastNameChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default App;
