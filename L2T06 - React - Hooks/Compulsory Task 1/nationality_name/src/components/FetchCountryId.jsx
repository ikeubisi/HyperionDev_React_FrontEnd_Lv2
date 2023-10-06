import { useEffect, useState } from "react";

export default function FetchCountryId({ username }) {
  const [nationality, setNationality] = useState("");
  const siteUrl = "https://api.nationalize.io?name=";

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(siteUrl + username);
        const data = await response.json();
        // Get the first country id from the array
        const firstCountryId = data.country[0].country_id;

        // Intl.DisplayNames learned from
        // How to get country name from country code in javascript, Stack Overflow.
        // Available at: https://stackoverflow.com/questions/62028827/how-to-get-country-name-from-country-code-in-javascript (Accessed: 06 October 2023).

        let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
        let countryName = regionNames.of(firstCountryId);

        console.log(countryName);
        setNationality(countryName);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [siteUrl, username]);

  return nationality;
}
