import React from "react";
import { useInput } from "./components/useInput";

const App = () => {
  const [userName, handleUserName, resetUserName] = useInput("");
  const [userEmail, handleUserEmail, resetUserEmail] = useInput("");

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
        placeholder={"Enter Name"}
        onChange={handleUserName}
        value={userName}
      />
      <button type={"button"} onClick={resetUserName}>
        Reset Name
      </button>
      <input
        type={"email"}
        placeholder={"Enter Email"}
        onChange={handleUserEmail}
        value={userEmail}
      />
      <button type={"button"} onClick={resetUserEmail}>
        Reset Name
      </button>

      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default App;
