import React, { useState } from "react";

const useInput = (val) => {
  const [inp, setInp] = useState(val);

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleReset = () => {
    setInp(val);
  };

  return { inp, handleChange, handleReset };
};

const App = () => {
  const {
    inp: firstName,
    handleChange: handleFirstNameChange,
    handleReset: handleFirstNameReset,
  } = useInput("");
  const {
    inp: lastName,
    handleChange: handleLastNameChange,
    handleReset: handleLastNameReset,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName });
  };

  const handleReset = (_) => {
    handleFirstNameReset();
    handleLastNameReset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">SUBMIT</button>
        <button type="reset" onClick={handleReset}>
          RESET
        </button>
      </form>
    </div>
  );
};

export default App;
