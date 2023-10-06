import { useEffect, useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const [title] = useState("Changed Title!!!");

  useEffect(() => {
    document.title = title;
    console.log("Web page title changed");
    // will only trigger if title gets changed
  }, [title]);

  return (
    <>
      <Hello></Hello>
    </>
  );
}

export default App;
