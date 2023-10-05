import { useState } from "react";
import PropTypes from "prop-types";

export default function WithdrawMoney({ balance }) {
  WithdrawMoney.propTypes = {
    balance: PropTypes.number.isRequired,
  };

  const [withdrawl, setWithdrawl] = useState(0);

  function removeMoney() {
    setWithdrawl(withdrawl - 10);
  }

  return (
    <div>
      <h2>Withdraw</h2>
      <input
        type="number"
        id="depositAmount"
        placeholder="Enter Withdrawl Amount"
      />
      <button onClick={removeMoney}>Withdraw Money</button>
      <h3>Money Withdrawn: {balance + withdrawl}</h3>
    </div>
  );
}
