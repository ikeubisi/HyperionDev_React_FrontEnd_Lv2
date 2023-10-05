export default function Count() {
  // Event handler for the onClick event
  function increaseCount() {
    count += count;
    console.log("Event Triggered");
  }
  // Create a variable called “count” and set the initial value to 0
  let count = 0;
  return (
    <div>
      {/* use JSX code to display the value of the count variable */}
      <h1>Count : {count}</h1>
      {/* Button to increase the value of the count variable */}
      <button onClick={increaseCount}> Increase Count </button>
    </div>
  );
}
