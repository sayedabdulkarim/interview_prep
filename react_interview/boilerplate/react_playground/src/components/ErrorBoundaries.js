import React, { Component, useState } from "react";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err) {
    console.log("Something went wrong.");
  }

  getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {this.state.hasError ? "Something went wrong " : this.props.children}
      </div>
    );
  }
}

const ButtonComp = () => {
  const [isBreak, setIsBreak] = useState(false);

  if (isBreak) {
    throw new Error("Error break");
  }

  return (
    <div>
      <h1>ErrorBoundaries</h1>
      <button onClick={() => setIsBreak(true)}>Error CLick</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <ErrorBoundaries>
        <ButtonComp />
      </ErrorBoundaries>
    </div>
  );
};

export default App;
