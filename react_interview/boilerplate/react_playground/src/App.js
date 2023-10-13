import React from "react";

import Timer from "./components/useMemoize";

const App = () => {
  return (
    <>
      <h1>Timer</h1>
      <Timer
        initialMinute={2}
        // initialSeconds={}
      />
    </>
  );
};

export default App;
