const initialState = {
  count: 111,
  albums: [],
  loading: false,
  error: null,
};

function testReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "DATA_LOADED":
      return {
        ...state,
        loading: false,
        albums: action.payload,
        error: null,
      };
    case "LOAD_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default testReducer;
