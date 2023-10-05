import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  const [userMoney, setUserMoney] = useState(1000);

  let moneyIn = 0;
  let moneyOut = 0;

  function depositMoney(moneyIn) {
    setUserMoney(userMoney);
  }

  function withdrawMoney(moneyOut) {
    setUserMoney(userMoney);
  }

  return (
    <div>
      <DepositMoney
        userMoney={userMoney}
        depositMoney={depositMoney(moneyIn)}
      />
      <WithdrawMoney
        userMoney={userMoney}
        withdrawMoney={withdrawMoney(moneyOut)}
      />
    </div>
  );
}
