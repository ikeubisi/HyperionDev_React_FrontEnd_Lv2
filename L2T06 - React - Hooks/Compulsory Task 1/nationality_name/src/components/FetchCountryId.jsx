import { useEffect, useState } from "react";

export default function FetchCountryId() {
  const [nationality, setNationality] = useState("");
  const siteUrl = "https://api.nationalize.io?name=michael";

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(siteUrl);
        const data = await response.json();
        const firstCountryId = data.country[0].country_id;
        console.log(firstCountryId);
        setNationality(firstCountryId);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [siteUrl]);

  return nationality;
}
