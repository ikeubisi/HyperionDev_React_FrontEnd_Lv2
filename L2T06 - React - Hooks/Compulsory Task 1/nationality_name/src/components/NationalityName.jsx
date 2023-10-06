import { useEffect, useRef, useState } from "react";
import FetchCountryId from "./FetchCountryId";

export default function NationalityName() {
  const [username, setUsername] = useState("john");
  const inputRef = useRef();

  // Input focus on mount
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
      <button onClick={FetchCountryId}>Fetch the most likely Country ID</button>
      <h1>First Country ID: {FetchCountryId("John")}</h1>
    </div>
  );
}
