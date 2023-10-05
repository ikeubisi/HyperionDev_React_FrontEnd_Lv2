import PropTypes from "prop-types";

function Welcome(props) {
  // An event handler function that displays a message in the console
  const displayAge = () => {
    console.log(props.age);
  };
  return (
    <div>
      {/* Display the name value of the props object */}
      <h1>Hello World, {props.name}</h1>
      {/* This button will call the displayAge function when clicked */}
      <button onClick={displayAge}>Display The User Age</button>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Welcome;
