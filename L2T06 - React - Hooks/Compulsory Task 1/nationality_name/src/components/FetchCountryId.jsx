import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function FetchCountryId({ username }) {
  FetchCountryId.propTypes = {
    username: PropTypes.string.isRequired,
  };

  const siteUrl = "https://api.nationalize.io?name=";
  const [nationality, setNationality] = useState("");

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

        setNationality(countryName);
      } catch (error) {
        console.error(error);
      }
    }

    // Don't waste time with a fetch request if no username has been supplied.
    if (username.length > 0) {
      fetchData();
    }
    // Don't do anything unless we have a siteUrl and a username
  }, [siteUrl, username]);

  return nationality;
}
