import { useEffect } from "react";

export default function FetchWeather({ city }) {
  const siteUrl = "https://api.nationalize.io?name=";

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(siteUrl + city);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    // Don't waste time with a fetch request if no city has been supplied.
    if (city.length > 0) {
      fetchData();
    }
    // Don't do anything unless we have a siteUrl and a city
  }, [siteUrl, city]);

  return city;
}
