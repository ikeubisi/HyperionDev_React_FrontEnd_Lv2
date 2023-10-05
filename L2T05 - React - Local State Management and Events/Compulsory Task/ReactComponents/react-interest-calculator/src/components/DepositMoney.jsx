import PropTypes from "prop-types";

export default function DepositMoney({ addMoney }) {
  DepositMoney.propTypes = {
    addMoney: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input type="number" id="depositAmount" defaultValue={0} />
      <button onClick={addMoney}>Deposit Money</button>
    </div>
  );
}
