import React, { useState } from "react";

const useInput = (initialVal) => {
  const [inpVal, setInpVal] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setInpVal(val);
  };

  const handleReset = (e) => {
    setInpVal(initialVal);
  };

  return [inpVal, handleChange, handleReset];
};

const App = () => {
  const [firstName, handleFirstName, handleResetFirstName] = useInput("");
  const [lastName, handleLastName, handleResetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName }, " submitted");
  };

  const handleReset = () => {
    handleResetFirstName();
    handleResetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={handleFirstName}
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={handleLastName}
          placeholder="Last Name"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
