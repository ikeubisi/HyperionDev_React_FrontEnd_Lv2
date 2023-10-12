import { createContext } from "react";
import "./App.css";
import { useState } from "react";

// Create context
const MyContext = createContext();

function App() {
  // Global state goes here
  const [sharedData, setSharedData] = useState("Hello I am shared data!");

  return (
    // Pass the state and the setter function to the context
    <MyContext.Provider value={[sharedData, setSharedData]}>
      <App />
    </MyContext.Provider>
  );
}

export default App;
