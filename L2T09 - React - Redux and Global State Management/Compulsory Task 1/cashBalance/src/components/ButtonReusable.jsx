import PropTypes from "prop-types";

ButtonReusable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Learned what a reusable button was from
// Allamuradov, F. (2023) How to create a reusable react button component, Medium.
// Available at: https://medium.com/@farhoddev/how-to-create-a-reusable-react-button-component-bac643ca4594 (Accessed: 12 October 2023).
export default function ButtonReusable({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
