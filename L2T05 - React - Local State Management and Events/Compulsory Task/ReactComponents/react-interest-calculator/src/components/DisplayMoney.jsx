import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  let [balance, setBalance] = useState(20000);

  const [deposit, setDeposit] = useState(0);
  const [withdrawal, setWithdrawal] = useState(0);

  function addMoney() {
    setDeposit(
      deposit + parseInt(document.getElementById("depositAmount").value)
    );

    setBalance((balance += deposit));
  }

  function removeMoney() {
    setWithdrawal(
      withdrawal + parseInt(document.getElementById("depositAmount").value)
    );

    if (balance < 1) {
      alert("You have run out of money!");
    }

    setBalance((balance -= withdrawal));
  }

  return (
    <div>
      <DepositMoney balance={balance} addMoney={addMoney} />
      <hr />
      <WithdrawMoney balance={balance} removeMoney={removeMoney} />
    </div>
  );
}
