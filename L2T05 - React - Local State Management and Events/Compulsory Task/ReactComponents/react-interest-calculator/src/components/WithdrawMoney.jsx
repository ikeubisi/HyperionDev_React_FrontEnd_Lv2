import PropTypes from "prop-types";

export default function WithdrawMoney({ balance, withdrawl, removeMoney }) {
  WithdrawMoney.propTypes = {
    balance: PropTypes.number.isRequired,
    withdrawl: PropTypes.number.isRequired,
    removeMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input
        type="number"
        id="depositAmount"
        placeholder="Enter Withdrawl Amount"
      />
      <button onClick={removeMoney}>Withdraw Money</button>
      <h3>Money Withdrawn: {balance - withdrawl}</h3>
    </div>
  );
}
