import { useState } from "react";

export default function DepositMoney({ balance }) {
  const [deposit, setDeposit] = useState(0);

  function addMoney() {
    setDeposit(deposit + 200);
  }

  return (
    <div>
      <h3>Money Deposited: {balance + deposit}</h3>
      <button onClick={addMoney}>Deposit Money</button>
    </div>
  );
}
