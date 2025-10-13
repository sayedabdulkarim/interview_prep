import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log({ error, errorInfo }, " from componentDidCatch");
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong.</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ErrorBoundary>
        <ButtonComp />
      </ErrorBoundary>
    </div>
  );
};

const ButtonComp = () => {
  const [isBreaking, setIsBreaking] = React.useState(false);

  if (isBreaking) {
    throw new Error("I am broken");
  }

  return <button onClick={() => setIsBreaking(true)}>Break me</button>;
};

export default App;
