//1st

/**
 * import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        placeholder="Name"
        value={state.name}
        onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Form;
 */

// 2nd
/**
 * import React, { useReducer } from 'react';

// 1. Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 2. Create the component
const Counter = () => {
  // 3. useReducer returns [state, dispatch]
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
 */
