import PropTypes from "prop-types";

export default function WithdrawMoney({ balance, removeMoney }) {
  WithdrawMoney.propTypes = {
    balance: PropTypes.number.isRequired,
    removeMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input type="number" id="withdrawAmount" defaultValue={0} />
      <button onClick={removeMoney}>Withdraw Money</button>
    </div>
  );
}
