import PropTypes from "prop-types";

export default function NameInput({ name, handleChange }) {
  NameInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  return (
    <div>
      <label htmlFor="nameInput">
        Enter Name:
        <input
          onChange={(event) => handleChange(event.target.value)}
          name="nameInput"
          defaultValue="Enter name here"
          value={name}
        />
      </label>
      {/* Display the value of the userName state variable */}
      <h3>Name : {name}</h3>
    </div>
  );
}
