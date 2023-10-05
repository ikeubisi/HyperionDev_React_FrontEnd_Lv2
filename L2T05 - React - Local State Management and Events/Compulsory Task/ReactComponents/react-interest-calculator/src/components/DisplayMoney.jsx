import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  const [balance, setBalance] = useState(20000);

  return (
    <div>
      <DepositMoney balance={balance} />
      <hr />
      <WithdrawMoney balance={balance} />
    </div>
  );
}
