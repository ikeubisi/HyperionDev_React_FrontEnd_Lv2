import { useState } from "react";

export default function NameInput() {
  // Create name state object with a default value
  const [userName, setUserName] = useState("");

  return (
    <div>
      <label htmlFor="nameInput">Enter Name: </label>
      <input
        onChange={(event) => setUserName(event.target.value)}
        id="nameInput"
        placeholder="Enter name here"
        defaultValue={userName}
      />
      {/* Display the value of the userName state variable */}
      <h3>Name : {userName}</h3>
    </div>
  );
}
