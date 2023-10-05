import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

export default function DisplayMoney() {
  let [userMoney, setUserMoney] = useState(1000);

  let moneyIn = 0;
  let moneyOut = 0;

  function depositMoney(moneyIn) {
    userMoney += Number(moneyIn);

    setUserMoney(userMoney);
  }

  function withdrawMoney(moneyOut) {
    userMoney -= moneyOut;

    setUserMoney(userMoney);
  }

  return (
    <div>
      <p>Current user money {userMoney}</p>
      <DepositMoney
        userMoney={userMoney}
        depositMoney={depositMoney}
        moneyIn={moneyIn}
      />
      <WithdrawMoney userMoney={userMoney} withdrawMoney={withdrawMoney} />
    </div>
  );
}
