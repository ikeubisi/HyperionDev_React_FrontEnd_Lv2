// Import CSS files for styling purposes
import "./App.css";
// importing the Welcome Component
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      {/* Display an instance of the Welcome component
passing a prop name="Joe Soap" */}
      <Welcome name="Joe Soap" />
      {/* Display a second instance of the Welcome component
passing a prop name="John Smith" */}
      <Welcome name="John Smith" />
    </div>
  );
}
export default App;
