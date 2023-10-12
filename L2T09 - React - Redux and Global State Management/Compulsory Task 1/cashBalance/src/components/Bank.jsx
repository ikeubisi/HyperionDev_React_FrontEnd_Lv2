import { useReducer } from "react";
import { initialState, reducers } from "../GlobalState";
import ButtonReusable from "./ButtonReusable";

export default function Bank() {
  //Get access to use and update state
  const [state, dispatch] = useReducer(reducers, initialState);

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
          type="number"
          placeholder="Enter Amount"
          className="form-control m-2"
        />
      </div>
      <div className="form-group">
        <ButtonReusable
          onClick={() => dispatch({ type: "DEPOSIT" })}
          className={"btn btn-success"}
        >
          Deposit (+)
        </ButtonReusable>
        <ButtonReusable
          onClick={() => dispatch({ type: "WITHDRAW" })}
          className={"btn btn-danger"}
        >
          Widthdraw (-)
        </ButtonReusable>
        <ButtonReusable
          onClick={() => dispatch({ type: "BANK_CHARGE" })}
          className={"btn btn-warning"}
        >
          Bank Charges -15%
        </ButtonReusable>
        <ButtonReusable
          onClick={() => dispatch({ type: "INTEREST" })}
          className={"btn btn-info"}
        >
          Add Interest 5%
        </ButtonReusable>
      </div>
    </div>
  );
}
