import PropTypes from "prop-types";

export default function NameInput({ name, handleChange }) {
  NameInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  return (
    <div>
      <label htmlFor="nameInput">
        {/* Input component using onChange to update the value of the state */}
        Enter Name:
        <input
          // The onChange event calls the handleChange function
          // that was passed for the parent component as a prop
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
