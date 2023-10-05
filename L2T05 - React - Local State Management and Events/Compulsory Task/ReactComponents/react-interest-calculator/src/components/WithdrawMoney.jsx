import { useState } from "react";

export default function WithdrawMoney({ balance }) {
  const [withdrawl, setDeposit] = useState(0);

  function removeMoney() {
    setDeposit(withdrawl - 10);
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
