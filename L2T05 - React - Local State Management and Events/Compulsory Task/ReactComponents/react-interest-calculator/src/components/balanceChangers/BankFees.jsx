import PropTypes from "prop-types";

export default function BankFees({ chargeBankFees }) {
  BankFees.propTypes = {
    chargeBankFees: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Bank Fees</h2>
      <button onClick={chargeBankFees} className="btn btn-secondary">
        Charge Bank Fees of £10
      </button>
    </div>
  );
}
