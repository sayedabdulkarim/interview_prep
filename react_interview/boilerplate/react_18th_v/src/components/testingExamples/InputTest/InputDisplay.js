// InputDisplay.js
import React, { useState } from "react";

const InputDisplay = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        data-testid="input-field"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div data-testid="display-div">{text}</div>
    </div>
  );
};

export default InputDisplay;
