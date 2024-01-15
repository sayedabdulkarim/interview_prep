import React, { useState } from "react";
import Parent from "./components/renderProps/Parent";
import ChildOne from "./components/renderProps/ChildOne";
import ChildTwo from "./components/renderProps/ChildTwo";

const App = () => {
  return (
    <div>
      <Parent
        render={(count, handleCount) => (
          <ChildOne count={count} handleCount={handleCount} />
        )}
      />
      <Parent
        render={(count, handleCount) => (
          <ChildTwo count={count} handleCount={handleCount} />
        )}
      />
      {/* <ChildTwo /> */}
    </div>
  );
};

export default App;
