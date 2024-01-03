import React, { useState } from "react";

const useInput = (initialState) => {
  const [formFields, setFormFields] = useState(initialState);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.vakue,
    });
  };

  const handleReset = () => {
    setFormFields(initialState);
  };

  return [formFields, handleChange, handleReset];
};

export default useInput;
