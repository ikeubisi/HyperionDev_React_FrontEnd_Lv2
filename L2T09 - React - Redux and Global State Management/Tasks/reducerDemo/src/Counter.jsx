import { useReducer } from "react";
import { initialState, reducers } from "./GlobalState";
const Counter = () => {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
export default Counter;
