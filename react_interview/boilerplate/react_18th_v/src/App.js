import React from "react";

const App = () => {
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

export default App;

const RenderProps = (props) => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount((prev) => (prev += 1));
  };

  return <div>{props.render(count, handleCount)}</div>;
};

const Render1Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render1Props</h1>
      <button onClick={handleCount}>Render Props 1 = {count}</button>
    </div>
  );
};

const Render2Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render2Props</h1>
      <button onClick={handleCount}>Render Props 2 = {count}</button>
    </div>
  );
};
