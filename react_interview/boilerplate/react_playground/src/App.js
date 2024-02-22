import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAlbums } from "./actions/testActions";

const App = () => {
  const dispatch = useDispatch();
  const { count, albums, loading, error } = useSelector(
    (state) => state.testReducer
  );

  //async
  useEffect(() => {
    // loadAlbums(dispatch);
    // dispatch({ type: "FETCH_DATA" });
  }, [dispatch]); // Dependency array, re-run if dispatch changes

  const handleFetch = () => {
    dispatch({ type: "FETCH_DATA" });
  };

  // console.log({
  //   albums,
  //   loading,
  //   error,
  // });

  return (
    <div>
      <button onClick={() => console.log(handleFetch())}>
        handleFetchEvery
      </button>
      <button onClick={() => console.log(count, " ccc")}>Count</button>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
    </div>
  );
};

export default App;
