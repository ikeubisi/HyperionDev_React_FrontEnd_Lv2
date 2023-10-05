import PropTypes from "prop-types";

export default function WithdrawMoney({ removeMoney }) {
  WithdrawMoney.propTypes = {
    removeMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input
        type="number"
        min="0"
        id="withdrawAmount"
        defaultValue={0}
        className="m-2"
      />
      <button onClick={removeMoney} className="btn btn-primary">
        Withdraw Money
      </button>
    </div>
  );
}
