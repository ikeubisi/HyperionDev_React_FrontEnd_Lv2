import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  const [balance, setBalance] = useState(20000);

  const [deposit, setDeposit] = useState(0);

  function addMoney() {
    setDeposit(
      deposit + parseInt(document.getElementById("depositAmount").value)
    );
  }

  return (
    <div>
      <DepositMoney balance={balance} deposit={deposit} addMoney={addMoney} />
      <hr />
      <WithdrawMoney balance={balance} />
    </div>
  );
}
