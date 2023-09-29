// Import CSS files for styling purposes
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// importing the Welcome Component
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      {/* Display an instance of the Welcome component
passing a prop name="Joe Soap" */}
      <Welcome name="Joe Soap" age="39" />{" "}
      {/* Display a second instance of the Welcome component
passing a prop name="John Smith" */}
      <Welcome name="John Smith" age="52" />{" "}
      <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
    </div>
  );
}
export default App;
