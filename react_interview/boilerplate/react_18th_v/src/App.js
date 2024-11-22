import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <RenderProps
        render={(count, handleCount) => (
          <Render1Props count={count} handleCount={handleCount} />
        )}
      />
      <br />
      <br />
      <br />
      <RenderProps
        render={(count, handleCount) => (
          <Render1Props count={count} handleCount={handleCount} />
        )}
      />
    </div>
  );
};

const RenderProps = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount((prev) => prev + 1);

  return render(count, handleCount);
};

const Render1Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render1Props : {count}</h1>
      <button onClick={handleCount}>CLick</button>
    </div>
  );
};

const Render2Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render2Props : {count}</h1>
      <button onClick={handleCount}>CLick</button>
    </div>
  );
};

export default App;
