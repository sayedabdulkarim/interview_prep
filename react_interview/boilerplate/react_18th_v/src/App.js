import React, { useState } from "react";

const useInput = (val) => {
  //
  const [inp, setInp] = useState(val);

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleReset = (e) => {
    setInp(val);
  };

  return [inp, handleChange, handleReset];
};

const App = () => {
  const [firstName, handleChangeFirstName, handleResetFirstName] = useInput("");
  const [lastName, handleChangeLastName, handleResetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName });
  };

  const handleReset = () => {
    handleResetFirstName();
    handleResetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={handleChangeFirstName} />
        <input type="text" value={lastName} onChange={handleChangeLastName} />
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleReset}>
          RESET
        </button>
      </form>
    </div>
  );
};

export default App;
