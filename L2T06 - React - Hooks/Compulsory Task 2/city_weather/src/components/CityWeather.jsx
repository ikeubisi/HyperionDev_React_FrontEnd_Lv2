import { useEffect, useRef, useState } from "react";
import FetchWeather from "./FetchWeather";

export default function CityWeather() {
  // Provide a default city
  const [city, setCity] = useState("Paris");
  const inputRef = useRef();

  // Input focus on mount & grab user's attention
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Enter a city & get the weather</h1>
      {/* Where user inputs their city of choice whose value gets grabbed when the button is clicked */}
      <input ref={inputRef} defaultValue={city} id="cityInputField" />
      <button
        onClick={() => setCity(document.getElementById("cityInputField").value)}
      >
        Fetch city weather
      </button>
      {/* FetchWeather is a function component so must be passed as a prop rather than as a regular hook or normal function */}
      <h2>Weather for {city} </h2>
      <div> {FetchWeather({ city })}</div>
    </div>
  );
}
