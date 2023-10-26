import { Component, useState } from "react";

//error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err) {
    console.log(err);
  }

  static GetDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    return (
      <>
        {this.state.err ? <h1>Something went wrong.</h1> : this.props.children}
      </>
    );
  }
}

//component
const ButtonThatBreaks = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error("errrorrrrrrrrrrrrrrrrrrrrrrrrr");
  }

  return (
    <>
      <h1>Error Component</h1>
      <button onClick={() => setIsError(true)}>Throw Error</button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ErrorBoundary>
        <ButtonThatBreaks />
      </ErrorBoundary>
    </div>
  );
};

export default App;
