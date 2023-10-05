import { useState } from "react";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";
import InterestRate from "./InterestRate";
import BankFees from "./BankFees";
import ChangeBalance from "./ChangeBalance";

export default function DisplayMoney() {
  let [balance, setBalance] = useState(100);

  let deposit = 0;
  let withdrawal = 0;
  // use fixed values for bank fees and interest rates
  const interest = 0.05;
  const bankFees = 10;

  // Deposit money
  function addMoney() {
    deposit = parseInt(document.getElementById("depositAmount").value);
    setBalance((balance += deposit));
  }

  // Add interest
  function addInterest() {
    setBalance((balance += balance * interest));
  }

  // Withdraw money
  function removeMoney() {
    withdrawal = parseInt(document.getElementById("withdrawAmount").value);

    if (balance < 1) {
      alert("You have run out of money!");
    } else {
      setBalance((balance -= withdrawal));
    }
  }

  // Charge bank fees
  function chargeBankFees() {
    if (balance < 1) {
      alert("You have run out of money!");
    } else {
      setBalance((balance -= bankFees));
    }
  }

  function changeBalance() {
    if (document.getElementById("changeBalanceAmount").value < 0) {
      alert("You cannot change to a negative number!");
    } else {
      setBalance(
        (balance = parseInt(
          document.getElementById("changeBalanceAmount").value
        ))
      );
    }
  }

  return (
    <div>
      <h2>Current Balance £{parseFloat(balance.toFixed(2))}</h2>
      <hr />
      <DepositMoney balance={balance} addMoney={addMoney} />
      <hr />
      <InterestRate balance={balance} addInterest={addInterest} />
      <hr />
      <WithdrawMoney balance={balance} removeMoney={removeMoney} />
      <hr />
      <BankFees balance={balance} chargeBankFees={chargeBankFees} />
      <hr />
      <ChangeBalance balance={balance} changeBalance={changeBalance} />
    </div>
  );
}
