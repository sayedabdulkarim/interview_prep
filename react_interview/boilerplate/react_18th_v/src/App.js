import React from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const timer = () => {
    if (seconds >= 0) {
    }
  };

  return <div>App</div>;
};

export default App;
