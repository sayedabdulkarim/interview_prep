import React from "react";

const App = () => {
  return (
    <div>
      <h1>Render1 Props</h1>
      {/* <RenderProps
        render={(count, handleCount) => (
          <Render1Props count={count} handleCount={handleCount} />
        )}
      /> */}
      <RenderProps
        render={(count, handleCount) => (
          <Render1Props count={count} handleCount={handleCount} />
        )}
      />
      <hr />
      <h1>Render2 Props</h1>
      <RenderProps
        render={(count, handleCount) => (
          <Render2Props count={count} handleCount={handleCount} />
        )}
      />
    </div>
  );
};

const Render1Props = ({ count, handleCount }) => {
  return (
    <div>
      <h2>Render Props - 1</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};
const Render2Props = ({ count, handleCount }) => {
  return (
    <div>
      <h2>Render Props - 2</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

const RenderProps = ({ render }) => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return <div>{render(count, handleCount)}</div>;
};

export default App;
