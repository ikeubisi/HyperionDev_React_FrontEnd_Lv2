import { useReducer } from "react";
import { initialState, reducers } from "../GlobalState";

export default function Bank() {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <div>
      <h1>Bank Display</h1>
      <h3>Bank Balance: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <button className="btn btn-success">Deposit (+)</button>
      <button className="btn btn-danger">Widthdraw (-)</button>
      <button className="btn btn-warning">Bank Chargers (-)</button>
      <button className="btn btn-info">Add Interest (*)</button>
    </div>
  );
}
