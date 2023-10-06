import { useEffect, useRef, useState } from "react";
import FetchWeather from "./FetchWeather";

export default function CityWeather() {
  const [city, setCity] = useState("Paris");
  const inputRef = useRef();

  // Input focus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} defaultValue={city} id="cityInputField" />
      &nbsp; &nbsp;
      <button
        onClick={() => setCity(document.getElementById("cityInputField").value)}
      >
        Fetch city weather
      </button>
      {/* FetchWeather is a function component so must be passed as a prop rather than as a regular hook or normal function */}
      <h1>Weather for {city} </h1>
      <p> {FetchWeather({ city })}</p>
    </div>
  );
}
