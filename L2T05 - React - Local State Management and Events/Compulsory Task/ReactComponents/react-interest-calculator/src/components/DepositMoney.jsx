import PropTypes from "prop-types";

export default function DepositMoney({ addMoney }) {
  DepositMoney.propTypes = {
    addMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input
        type="number"
        min="0"
        id="depositAmount"
        defaultValue={0}
        className="m-2"
      />
      <button onClick={addMoney}>Deposit Money</button>
    </div>
  );
}
