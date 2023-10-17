import React from "react";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import RenderPropsComp from "./components/RenderPropsComp";

const App = () => {
  return (
    <div>
      {/* <ChildOne />
      <ChildTwo /> */}

      {/* one */}
      <RenderPropsComp
        render={(count, handleClickCount) => (
          <ChildOne count={count} handleClickCount={handleClickCount} />
        )}
      />
      <RenderPropsComp
        render={(count, handleClickCount) => (
          <ChildTwo count={count} handleClickCount={handleClickCount} />
        )}
      />
    </div>
  );
};

export default App;
