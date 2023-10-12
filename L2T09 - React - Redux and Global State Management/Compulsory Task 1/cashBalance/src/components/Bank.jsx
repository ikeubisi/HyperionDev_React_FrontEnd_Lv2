import { useReducer } from "react";
import { initialState, reducers } from "../GlobalState";
import ButtonReusable from "./ButtonReusable";

export default function Bank() {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <div>
      <h1>Bank Display</h1>
      <h3>Bank Balance: £{state.balance}</h3>
      <ButtonReusable
        onClick={() => dispatch({ type: "INCREMENT" })}
        className={"btn btn-success"}
      >
        Deposit (+)
      </ButtonReusable>
      <ButtonReusable
        onClick={() => dispatch({ type: "INCREMENT" })}
        className={"btn btn-danger"}
      >
        Widthdraw (-)
      </ButtonReusable>
      <ButtonReusable
        onClick={() => dispatch({ type: "INCREMENT" })}
        className={"btn btn-warning"}
      >
        Bank Chargers (-)
      </ButtonReusable>
      <ButtonReusable
        onClick={() => dispatch({ type: "INCREMENT" })}
        className={"btn btn-info"}
      >
        Add Interest (*)
      </ButtonReusable>
    </div>
  );
}
