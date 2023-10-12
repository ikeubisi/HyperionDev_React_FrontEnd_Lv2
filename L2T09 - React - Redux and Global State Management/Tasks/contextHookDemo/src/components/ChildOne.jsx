import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function ChildOne() {
  // Import the context Object
  const value = useContext(MyContext);

  // Destructure the context objects
  let [sharedData, setSharedData] = value;
  return (
    <div>
      <h1>{sharedData}</h1>
    </div>
  );
}
