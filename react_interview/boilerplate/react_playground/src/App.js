import React from "react";
import { useInput } from "./components/useInput";
// import useInput from "./components/useInput";

const App = () => {
  const {
    value: userName,
    handleChange: handleUserName,
    handleReset: resetUserName,
  } = useInput("");
  const { userEmail, handleUserEmail, resetUserEmail } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      userEmail,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder={"Enter Name "}
        value={userName}
        onChange={handleUserName}
      />

      <input
        type={"text"}
        placeholder={"Enter Email "}
        value={userEmail}
        onChange={handleUserEmail}
      />

      <button type={"submit"}>Submit</button>
      <button type={"button"} onClick={resetUserName}>
        reset Name
      </button>
      <button type={"button"} onClick={resetUserEmail}>
        reset email
      </button>
    </form>
  );
};

export default App;
