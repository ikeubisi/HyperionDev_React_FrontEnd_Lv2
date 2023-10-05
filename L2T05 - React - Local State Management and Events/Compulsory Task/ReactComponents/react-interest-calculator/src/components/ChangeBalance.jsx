import PropTypes from "prop-types";

export default function ChangeBalance({ changeBalance }) {
  ChangeBalance.propTypes = {
    changeBalance: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Change Balance</h2>
      <input
        type="number"
        min="0"
        id="changeBalanceAmount"
        defaultValue={0}
        className="m-2"
      />
      <button onClick={changeBalance}>Change Balance</button>
    </div>
  );
}
