export default function DepositMoney({ userMoney, depositMoney, moneyIn }) {
  return (
    <div>
      <label htmlFor="depositInput">
        Enter Deposit:
        <input
          onChange={(event) => depositMoney(event.target.value)}
          name="depositInput"
          value={moneyIn}
        />
      </label>
      <h3>User Money : {userMoney}</h3>
    </div>
  );
}
