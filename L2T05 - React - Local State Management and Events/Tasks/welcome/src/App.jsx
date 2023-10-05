import Welcome from "./components/Welcome";
import "./App.css";
// Create the App component
function App() {
  return (
    <div className="App">
      {/* Display an instance of the Welcome component
        passing 2 props
        name="Bob"
        age="39" */}
      <Welcome name="Bob" age={39} />
    </div>
  );
}
export default App;
