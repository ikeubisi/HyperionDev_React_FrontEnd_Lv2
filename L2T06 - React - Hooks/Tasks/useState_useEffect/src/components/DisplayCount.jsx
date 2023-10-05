import { useEffect, useState } from "react";

export default function DisplayCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter has been initialised or updated.");
  }, [count]);

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
