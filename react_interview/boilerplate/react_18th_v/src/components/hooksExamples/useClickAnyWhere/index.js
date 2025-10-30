import { useEffect } from "react";

const App = () => {
  useClickAnyWhere(() => console.log("hello world"));
  return <div>App</div>;
};

export const useClickAnyWhere = (cb) => {
  useEffect(() => {
    function testClick(e) {
      cb(e);
    }

    document.addEventListener("click", testClick);

    return () => document.removeEventListener("click", testClick);
  }, [cb]);
};

export default App;
