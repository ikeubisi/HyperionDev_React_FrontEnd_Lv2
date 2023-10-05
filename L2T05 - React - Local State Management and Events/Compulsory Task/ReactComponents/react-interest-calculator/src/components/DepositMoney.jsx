import PropTypes from "prop-types";

export default function DepositMoney({ balance, addMoney }) {
  DepositMoney.propTypes = {
    balance: PropTypes.number.isRequired,
    addMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input type="number" id="depositAmount" defaultValue={0} />
      <button onClick={addMoney}>Deposit Money</button>
      <h3>Money Deposited: {balance}</h3>
    </div>
  );
}
