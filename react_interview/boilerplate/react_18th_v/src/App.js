import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " CDC");
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

const ButtonThatBreaks = () => {
  const [forceError, setForceError] = useState(false);

  //
  if (forceError) {
    throw new Error("Error from Button component.");
  }

  return <button onClick={() => setForceError(true)}>Click Error</button>;
};

const App = () => {
  return (
    <div>
      <h1>Main Component</h1>
      <ErrorBoundary>
        <ButtonThatBreaks />
      </ErrorBoundary>
    </div>
  );
};

export default App;
