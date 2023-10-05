import { useState } from "react";
import PropTypes from "prop-types";

export default function DepositMoney({ balance }) {
  DepositMoney.propTypes = {
    balance: PropTypes.number.isRequired,
  };

  const [deposit, setDeposit] = useState(0);

  function addMoney() {
    setDeposit(
      deposit + parseInt(document.getElementById("depositAmount").value)
    );
  }

  return (
    <div>
      <h2>Deposit</h2>
      <input
        type="number"
        id="depositAmount"
        placeholder="Enter Deposit Amount"
      />
      <button onClick={addMoney}>Deposit Money</button>
      <h3>Money Deposited: {balance + deposit}</h3>
    </div>
  );
}
