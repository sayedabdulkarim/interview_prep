import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchData } from "../utils/commonHelper"; // Adjust the import path as necessary

// Worker saga: will be fired on FETCH_DATA actions
function* fetchAlbumsSaga() {
  try {
    console.log("fetchAlbumsSaga started"); // Add this log
    yield put({ type: "DATA_LOADING" });
    const albums = yield call(
      fetchData,
      "https://jsonplaceholder.typicode.com/albums"
    );
    yield put({ type: "DATA_LOADED", payload: albums });
    console.log("fetchAlbumsSaga finished"); // Add this log
  } catch (error) {
    yield put({ type: "LOAD_ERROR", error: error.message });
  }
}

function* backgroundTaskSaga() {
  console.log("Background task is running");
}

// Watcher saga: spawns a new fetchAlbumsSaga on each FETCH_DATA action
function* watchFetchAlbums() {
  //   yield takeEvery("FETCH_DATA", fetchAlbumsSaga);
  yield takeLatest("FETCH_DATA", fetchAlbumsSaga);

  yield fork(backgroundTaskSaga);
}

export default watchFetchAlbums;
