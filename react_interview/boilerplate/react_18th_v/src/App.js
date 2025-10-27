import React from "react";

const App = () => {
  return (
    <div>
      <h1>Render1Props</h1>
      <RenderProps
        render={(count, setCount) => (
          <Render1Props count={count} setCount={setCount} />
        )}
      />
      <hr />
      <h1>Render2Props</h1>
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
    <div>
      <h2>Render1Props</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const Render2Props = ({ count, setCount }) => {
  return (
    <div>
      <h2>Render2Props</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const RenderProps = ({ render }) => {
  const [count, setCount] = React.useState(0);

  return render(count, setCount);
};

export default App;
