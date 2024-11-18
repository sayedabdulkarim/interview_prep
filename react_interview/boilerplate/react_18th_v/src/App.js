import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <RenderProps
        render={(count, setCount) => (
          <Render1Props count={count} setCount={setCount} />
        )}
      />

      <br />
      <br />
      <br />
      <br />

      <RenderProps
        render={(count, setCount) => (
          <Render2Props count={count} setCount={setCount} />
        )}
      />
    </div>
  );
};

const Render1Props = ({ count, setCount }) => {
  return (
    <>
      <h1>Render 1 Props : {count}</h1>
      <button onClick={() => setCount()}>Counter 1</button>
    </>
  );
};

const Render2Props = ({ count, setCount }) => {
  return (
    <>
      <h1>Render 2 Props: {count}</h1>
      <button onClick={() => setCount()}>Counter 1</button>
    </>
  );
};

const RenderProps = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return <div>{props.render(count, handleCount)}</div>;
};

export default App;
