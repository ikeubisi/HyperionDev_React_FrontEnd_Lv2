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
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
