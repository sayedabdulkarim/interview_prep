import React from "react";

//hooks
// import CountdownTimer from "./components/hooksExamples/timerHooks/useCountdownTimer";
// import CountdownTimerTest from "./components/hooksExamples/timerHooks/test";
// import UseMemoCbMemo from "./components/hooksExamples/usememo_usecallback_memo/Parent";
import UseInput from "./components/hooksExamples/useInput";

//machineCoding
import Todo from "./components/machineCoding/todoApp";
import Memoize from "./components/machineCoding/memoize";

//Patterns
import RenderProps from "./components/patterns/renderProps";
import WithBackgroundColorHoc from "./components/patterns/hoc";
import CompoundPatternToggle from "./components/patterns/compoundPattern";

const App = () => {
  return (
    <div>
      <h1>App.js</h1>
      {/* hooks ////////////////////////////////////////////////////////////////////*/}
      {/* <CountdownTimer initialMinutes={2} initialSeconds={30} /> */}
      {/* <CountdownTimerTest timeLimit={5} /> */}
      {/* <UseMemoCbMemo /> */}
      {/* <UseInput /> */}
      {/* machine coding ////////////////////////////////////////////////////////////*/}
      {/* <Todo /> */}
      {/* <Memoize /> */}

      {/* Patterns /////////////////////////////////////////////////////////////////*/}
      {/* <RenderProps /> */}
      {/* <WithBackgroundColorHoc /> */}
      <CompoundPatternToggle />
    </div>
  );
};

export default App;
