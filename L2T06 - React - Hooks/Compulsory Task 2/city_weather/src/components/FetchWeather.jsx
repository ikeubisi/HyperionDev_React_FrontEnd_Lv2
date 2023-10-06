import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function FetchWeather({ city }) {
  FetchWeather.propTypes = {
    city: PropTypes.string.isRequired,
  };

  // Learned to import API Key in Vite from
  // How to create env variables in react (2023) YouTube.
  // Available at: https://www.youtube.com/shorts/r92aHr752Bg (Accessed: 06 October 2023).
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // aqi=no means disable air quality info
  // tides=no means disable Marine API output
  let siteUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&tides=no`;

  // Weather data we'll get from the API
  const [region, setRegion] = useState("");
  const [text, setText] = useState("");
  const [precip_mm, setPrecip] = useState(0);
  const [cloud, setCloud] = useState(0);
  const [temp_c, setTemp_c] = useState(0);
  const [wind_kph, setWind_kph] = useState(0);

  // Fetch API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(siteUrl);
        const data = await response.json();
        const region = data.location.region;
        const text = data.current.condition.text;
        const precip_mm = data.current.precip_mm;
        const cloud = data.current.cloud;
        const temp_c = data.current.temp_c;
        const wind_kph = data.current.wind_kph;

        setRegion(region);
        setText(text);
        setPrecip(precip_mm);
        setCloud(cloud);
        setTemp_c(temp_c);
        setWind_kph(wind_kph);
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

  return (
    <>
      <h3>Region: {region}</h3>
      <h4>Summary: {text}</h4>
      <ul>
        <li>Temperature is {temp_c} Celsius</li>
        <li>Precipitation is {precip_mm}mm</li>
        <li>Cloud level is at {cloud}</li>
        <li>Wind is at {wind_kph}kph</li>
      </ul>
    </>
  );
}
