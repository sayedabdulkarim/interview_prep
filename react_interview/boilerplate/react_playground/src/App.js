import React from "react";
import { useTimer } from "./components/useTImer";

const App = () => {
  const { seconds, minutes } = useTimer(10, 0);
  // const { minutes, seconds } = useTimerTwo(2, 10);
  return <div>{`Min : ${minutes} :: Sec : ${seconds}`}</div>;
};

export default App;
