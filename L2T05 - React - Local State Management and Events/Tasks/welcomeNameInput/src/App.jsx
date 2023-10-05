// Import files and components
import "./App.css";
import DisplayName from "./components/DisplayName";
// Create the App component
function App() {
  return (
    <div className="App">
      <hr />
      {/* Create an instance of the DisplayName component */}
      <DisplayName />
    </div>
  );
}
export default App;
