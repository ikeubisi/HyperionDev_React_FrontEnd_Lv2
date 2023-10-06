import { useEffect, useRef, useState } from "react";
import FetchCountryId from "./FetchCountryId";

export default function NationalityName() {
  const [username, setUsername] = useState("Neil");
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

      {/* Button rendered obsolete since names can be dynamically fetched as user types */}
      {/* <button onClick={() => FetchCountryId({ username })}>
        Fetch most likely country
      </button> */}

      {/* FetchCountryId is a function component so must be passed as a prop rather than as a regular hook or normal function */}
      <h1>Most likely country for that name: {FetchCountryId({ username })}</h1>
    </div>
  );
}
