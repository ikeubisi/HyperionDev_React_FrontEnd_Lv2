import { useEffect, useRef, useState } from "react";

export default function AutoFocusInput() {
  const [username, setUsername] = useState("Billy");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }),
    [];

  return (
    <div>
      <h3>This input field is set to autofocus on mount</h3>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <h3>This input field is not set to autofocus on mount</h3>
      <input />
    </div>
  );
}
