import React, { useState } from "react";

const RenderProps = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => (prev += 1));
  };

  return <div>{props.render(count, handleCount)}</div>;
};

export default RenderProps;

///
// - renderProps
//     In React, "render props" is a technique for sharing code between React components using a prop whose value is a function. This function returns a React element, essentially allowing you to pass in components and behavior dynamically.

//     Here's a simple analogy: imagine your component is a picture frame. The component itself provides the frame, but what goes inside the frame can be controlled by whoever uses the component. They can "render" any picture (component) they want inside your frame.

//     So, in essence, render props allow a component to define a dynamic slot where other components can inject JSX, providing a way to share behavior across components.

// Example:

// ```jsx
// // This is your "frame" component. It leaves a spot for something to be rendered inside.
// const FrameComponent = ({ render }) => {
//   return (
//     <div>
//       {"I am a frame. Inside me, there is: "}
//       {render()}
//     </div>
//   );
// };

// // This is how you use your frame component
// const App = () => {
//   return (
//     <FrameComponent render={() => "A beautiful picture!"} />
//   );
// };
// ```

// The `FrameComponent` doesn't care what it renders inside itself. It exposes a way (via the `render` prop) for another component to specify what should be rendered.
