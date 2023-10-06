import { useEffect } from "react";

export default function FetchWeather({ city }) {
  // Learned to import API Key in Vite from
  // How to create env variables in react (2023) YouTube.
  // Available at: https://www.youtube.com/shorts/r92aHr752Bg (Accessed: 06 October 2023).

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  let siteUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(siteUrl);
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
