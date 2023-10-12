import React from "react";
import Render1Props from "./components/renderOne";
import Render2Props from "./components/renderTwo";
import RenderProps from "./components/renderPropsExample";

const App = () => {
  return (
    <div>
      <h1>Playground</h1>
      {/* <Render1Props />
      <Render2Props /> */}
      <RenderProps
        render={(counter, handleIncrementCount) => (
          <Render1Props
            counter={counter}
            handleIncrementCount={handleIncrementCount}
          />
        )}
      />
      <hr />
      <RenderProps
        render={(counter, handleIncrementCount) => (
          <Render2Props
            counter={counter}
            handleIncrementCount={handleIncrementCount}
          />
        )}
      />
    </div>
  );
};

export default App;
