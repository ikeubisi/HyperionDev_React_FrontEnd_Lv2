import PropTypes from "prop-types";

export default function DepositMoney({ balance, deposit, addMoney }) {
  DepositMoney.propTypes = {
    balance: PropTypes.number.isRequired,
    deposit: PropTypes.number.isRequired,
    addMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input
        type="number"
        id="depositAmount"
        placeholder="Enter Deposit Amount"
      />
      <button onClick={addMoney}>Deposit Money</button>
      <h3>Money Deposited: {balance + deposit}</h3>
    </div>
  );
}
