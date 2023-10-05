import { useState } from "react";

export default function WithdrawMoney({ balance }) {
  const [withdrawl, setDeposit] = useState(0);

  function removeMoney() {
    setDeposit(withdrawl - 10);
  }

  return (
    <div>
      <h3>Money Withdrawn: {balance + withdrawl}</h3>
      <button onClick={removeMoney}>Withdraw Money</button>
    </div>
  );
}
