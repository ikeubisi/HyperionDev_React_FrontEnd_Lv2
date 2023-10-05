import PropTypes from "prop-types";

export default function Welcome({ name }) {
  // The props passed to this component include the state variable 'name',
  // and the handleChange function that changes the state of name is passed as a prop

  Welcome.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return (
    <div>
      {/* Input component using onChange to update the value of the state */}
      <label htmlFor="">
        Enter Name:
        <input
          // The onChange event calls the handleChange function
          // that was passed for the parent component as a prop
          onChange={(event) => name.handleChange(event.target.value)}
          name="nameInput"
          defaultValue={" Enter name here"}
          value={name}
        />
      </label>

      {/* Display the value of the name State variable */}
      <h3> Name: {name}</h3>
    </div>
  );
}
