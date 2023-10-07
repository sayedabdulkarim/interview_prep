import React from "react";
import useInput from "./useInputHook";

const FormComponent = () => {
  const [username, handleUsernameChange, resetUsername] = useInput("");
  const [password, handlePasswordChange, resetPassword] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    // Reset form fields
    resetUsername();
    resetPassword();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
