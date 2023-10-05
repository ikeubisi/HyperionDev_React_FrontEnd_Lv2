export default function DepositMoney({ userMoney, depositMoney, moneyIn }) {
  return (
    <div>
      <label htmlFor="depositInput">
        Enter Deposit:
        <input name="depositInput" type="number" />
      </label>

      <button onClick={(event) => depositMoney(event.target.value)}>
        Increase Count
      </button>

      <h3>User Money : {userMoney}</h3>
    </div>
  );
}
