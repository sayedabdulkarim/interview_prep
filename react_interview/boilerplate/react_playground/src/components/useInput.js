import React, { useState } from "react";

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(initialState);
  };

  return { value, handleChange, handleReset };
};
