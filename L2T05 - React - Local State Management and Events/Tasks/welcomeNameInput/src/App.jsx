// Import files and components
import "./App.css";
import NameInput from "./components/NameInput";
// Create the App component
function App() {
  return (
    <div className="App">
      <hr />
      {/* Create an instance of the NameInput component */}
      <NameInput />
    </div>
  );
}
export default App;
