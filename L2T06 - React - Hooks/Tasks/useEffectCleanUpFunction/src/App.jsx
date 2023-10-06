import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    // return a clean-up function
    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  return (
    <div>
      When you click the windows you will find a message logged to the console.
    </div>
  );
}

export default App;
