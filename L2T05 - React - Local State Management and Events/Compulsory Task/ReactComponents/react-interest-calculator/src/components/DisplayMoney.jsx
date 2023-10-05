import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  let [balance, setBalance] = useState(20000);

  const [deposit, setDeposit] = useState(0);
  const [withdrawl, setWithdrawl] = useState(0);

  function addMoney() {
    setDeposit(
      deposit + parseInt(document.getElementById("depositAmount").value)
    );

    setBalance((balance += deposit));
  }

  function removeMoney() {
    setWithdrawl(
      withdrawl + parseInt(document.getElementById("depositAmount").value)
    );
  }

  return (
    <div>
      <DepositMoney balance={balance} addMoney={addMoney} />
      <hr />
      <WithdrawMoney
        balance={balance}
        withdrawl={withdrawl}
        removeMoney={removeMoney}
      />
    </div>
  );
}
