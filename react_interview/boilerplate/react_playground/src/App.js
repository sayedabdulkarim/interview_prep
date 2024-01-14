import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err) {
    console.log(err, " err from CDC");
  }

  // static getDerviedStateFromError(err) {
  //   return { hasError: true };
  // }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

const BtnComponent = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error("Error from Btn Component");
  }

  return (
    <div>
      <button onClick={() => setIsError(true)}>Error BTN</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <h1>App</h1>
        <BtnComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
