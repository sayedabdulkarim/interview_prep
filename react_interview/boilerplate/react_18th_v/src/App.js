import React from "react";

//hooks
// import CountdownTimer from "./components/hooksExamples/timerHooks/useCountdownTimer";
// import CountdownTimerTest from "./components/hooksExamples/timerHooks/test";
import UseMemoCbMemo from "./components/hooksExamples/usememo_usecallback_memo/Parent";
//machineCoding
import Todo from "./components/machineCoding/todoApp";

//Patterns
import RenderProps from "./components/patterns/renderProps";

const App = () => {
  return (
    <div>
      <h1>App.js</h1>
      {/* hooks ////////////////////////////////////////////////////////////////////*/}
      {/* <CountdownTimer initialMinutes={2} initialSeconds={30} /> */}
      {/* <CountdownTimerTest timeLimit={5} /> */}
      <UseMemoCbMemo />
      {/* machine coding ////////////////////////////////////////////////////////////*/}
      {/* <Todo /> */}

      {/* Patterns /////////////////////////////////////////////////////////////////*/}
      {/* <RenderProps /> */}
    </div>
  );
};

export default App;
