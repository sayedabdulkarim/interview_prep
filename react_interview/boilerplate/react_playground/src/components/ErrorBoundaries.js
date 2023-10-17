import { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return { hasError: true };
    }
  }

  // static getDerivedStateFromError(error) {
  //   if (error) {
  //     return { hasError: true };
  //   }
  // }

  componentDidCatch(error, info) {
    console.log({
      error,
      info,
    });
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong.</h1>
    ) : (
      this.props.children
    );
  }

  // render() {
  //   if (this.state.hasError) {
  //     return <h1>Something went wrong.</h1>;
  //   }

  //   return this.props.children;
  // }
}

function ButtonComp() {
  const [createError, setCreateError] = useState(false);

  if (createError) {
    throw new Error("I brokeeee");
  }

  return (
    <div>
      <h1>Button Component</h1>
      <button onClick={() => setCreateError(true)}>createError</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hellllo APPPP</h1>
      <ErrorBoundary>
        <ButtonComp />
      </ErrorBoundary>
    </div>
  );
}
