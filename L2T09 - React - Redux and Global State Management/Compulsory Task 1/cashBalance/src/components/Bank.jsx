import { useRef, useReducer } from "react";
import { initialState, reducers } from "../GlobalState";
import ButtonReusable from "./ButtonReusable";

export default function Bank() {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);

  const inputRef = useRef(0);

  // Convert balance into UK money format
  const currencyFormatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div>
      <h1>Bank Display</h1>
      <h3>Bank Balance: {currencyFormatter.format(state.balance)}</h3>
      <div className="form-group">
        <input
          className="form-control m-2"
          defaultValue={0}
          min={0}
          placeholder="Enter Amount"
          ref={inputRef}
          type="number"
        />
      </div>
      <hr />
      <div className="form-group">
        <ButtonReusable
          onClick={() =>
            // Use payload to hold value of input field
            dispatch({ type: "DEPOSIT", payload: inputRef.current.valueOf })
          }
          className={"btn btn-success"}
        >
          Deposit (+)
        </ButtonReusable>
        {state.balance > 0 && (
          <ButtonReusable
            onClick={() =>
              dispatch({ type: "WITHDRAW" }, inputRef.current.valueOf)
            }
            className={"btn btn-danger"}
          >
            Widthdraw (-)
          </ButtonReusable>
        )}

        {state.balance > 0 && (
          <ButtonReusable
            onClick={() => dispatch({ type: "BANK_CHARGE" })}
            className={"btn btn-warning"}
          >
            Bank Charges -15%
          </ButtonReusable>
        )}

        <ButtonReusable
          onClick={() => dispatch({ type: "INTEREST" })}
          className={"btn btn-info"}
        >
          Add Interest 5%
        </ButtonReusable>

        {state.balance < 0 && (
          <h3 className="text-danger fw-bold">You have run out of money!</h3>
        )}
      </div>
    </div>
  );
}
