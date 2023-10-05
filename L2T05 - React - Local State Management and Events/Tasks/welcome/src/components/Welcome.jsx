import PropTypes from "prop-types";

function Welcome({ name, age }) {
  // An event handler function that displays a message in the console
  const displayAge = () => {
    console.log(age);
  };

  // An event handler function that changes the background color of the web page
  function changeBackgroundColor() {
    let bodyStyle = document.body.style;

    bodyStyle.backgroundColor =
      bodyStyle.backgroundColor === "black" ? "white" : "black";
  }

  return (
    <div>
      {/* Display the name value of the props object */}
      <h1>Hello World, {name}</h1>
      {/* This button will call the displayAge function when clicked */}
      <button onClick={displayAge}>Display The User Age</button>
      {/* This button will call the changeBackgroundColor function when
clicked */}
      <button onClick={changeBackgroundColor}> Change Background Color</button>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Welcome;
