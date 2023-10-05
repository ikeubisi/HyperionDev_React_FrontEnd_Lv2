import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* use JSX code to display the value of the count variable */}
      <h1>Count : {count}</h1>
      {/* Button to increase the value of the count variable */}
      <button onClick={increaseCount}> Increase Count </button>
    </div>
  );
}
