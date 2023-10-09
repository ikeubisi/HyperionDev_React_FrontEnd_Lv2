import PropTypes from "prop-types";

TotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default function TotalPrice({ totalPrice }) {
  // Hide total price if nothing has been bought
  return <>{totalPrice > 0 && <h2>TotalPrice £{totalPrice}</h2>}</>;
}
