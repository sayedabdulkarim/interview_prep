import React from "react";

import Parent from "./components/renderProps/Parent";
import ChildOne from "./components/renderProps/ChildOne";
import ChildTwo from "./components/renderProps/ChildTwo";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Hello</h1>

      <Parent
        render={(count, handleCount) => (
          <ChildOne count={count} handleCount={handleCount} />
        )}
      />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <Parent
        render={(count, handleCount) => (
          <ChildTwo count={count} handleCount={handleCount} />
        )}
      />

      {/* <ChildOne /> */}
    </div>
  );
};

export default App;
