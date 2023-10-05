import { useState } from "react";
import PropTypes from "prop-types";

export default function DepositMoney({ balance }) {
  DepositMoney.propTypes = {
    balance: PropTypes.number.isRequired,
  };

  const [deposit, setDeposit] = useState(0);

  function addMoney() {
    setDeposit(deposit + 10);
  }

  return (
    <div>
      <h3>Money Deposited: {balance + deposit}</h3>
      <button onClick={addMoney}>Deposit Money</button>
    </div>
  );
}
