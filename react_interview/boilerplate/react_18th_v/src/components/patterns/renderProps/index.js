import React from "react";
import RenderProps from "./renderProps";
import Render1Props from "./render1Props";
import Render2Props from "./render2Props";

const Index = () => {
  return (
    <div>
      {/* 1 */}
      <RenderProps
        render={(count, handleCount) => (
          <Render1Props count={count} handleCount={handleCount} />
        )}
      />
      {/* 2 */}
      <RenderProps
        render={(count, handleCount) => (
          <Render2Props count={count} handleCount={handleCount} />
        )}
      />
    </div>
  );
};

export default Index;
