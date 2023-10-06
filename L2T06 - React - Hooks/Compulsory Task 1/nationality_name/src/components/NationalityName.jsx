import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function NationalityName() {
  const [username, setUsername] = useState("");
  const [nationality, setNationality] = useState("");
  const inputRef = useRef();
  const siteUrl = "https://api.nationalize.io?name=michael";

  // Input focus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(siteUrl);
      let data = await response.json();
      let firstCountryId = data.country[0].country_id;
      console.log(firstCountryId);
      setNationality(firstCountryId);
    }
    fetchData();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h1>First Country ID: {nationality}</h1>
    </div>
  );
}
