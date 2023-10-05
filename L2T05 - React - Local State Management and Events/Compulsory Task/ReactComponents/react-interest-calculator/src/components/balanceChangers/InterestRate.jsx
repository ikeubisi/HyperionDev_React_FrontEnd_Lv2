import PropTypes from "prop-types";

export default function InterestRate({ addInterest }) {
  InterestRate.propTypes = {
    addInterest: PropTypes.func.isRequired,
  };

  return (
    <div>
      <h2>Interest Rate</h2>
      <button onClick={addInterest}>Add Interest rate of 5%</button>
    </div>
  );
}
