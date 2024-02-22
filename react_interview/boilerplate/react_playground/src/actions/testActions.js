// utils/asyncActions.js
import { fetchData } from "../utils/commonHelper";

export const loadAlbums = async (dispatch) => {
  dispatch({ type: "DATA_LOADING" });
  try {
    const data = await fetchData("https://jsonplaceholder.typicode.com/albums");
    dispatch({ type: "DATA_LOADED", payload: data });
  } catch (error) {
    dispatch({ type: "LOAD_ERROR", error });
  }
};

const thunkWayLoadAlbums = () => {
  return async (dispatch) => {
    dispatch({ type: "DATA_LOADING" });
    try {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch({ type: "DATA_LOADED", payload: data });
    } catch (error) {
      dispatch({ type: "LOAD_ERROR", error });
    }
  };
};
