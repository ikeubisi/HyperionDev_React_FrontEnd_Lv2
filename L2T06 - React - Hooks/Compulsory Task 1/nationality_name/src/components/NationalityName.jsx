import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function NationalityName() {
  const [username, setUsername] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
