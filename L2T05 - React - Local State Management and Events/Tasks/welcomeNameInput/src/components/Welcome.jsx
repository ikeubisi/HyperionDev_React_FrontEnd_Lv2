import PropTypes from "prop-types";

export default function Welcome({ name }) {
  Welcome.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return <h1>Hello World, {name}</h1>;
}
