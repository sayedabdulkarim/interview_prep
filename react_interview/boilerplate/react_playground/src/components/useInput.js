import { useState } from "react";

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  //
  const handleChange = (e) => setValue((prev) => e.target.value);
  const handleReset = (e) => setValue(initialState);

  return [value, handleChange, handleReset];
};
