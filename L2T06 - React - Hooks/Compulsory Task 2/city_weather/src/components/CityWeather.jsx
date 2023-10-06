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
      <input
        ref={inputRef}
        defaultValue={city}
        id="cityInputField"
        // Pay attention to what the user types in the input field & any changes
        onChange={(e) => setCity(e.target.value)}
      />

      {/* FetchWeather is a function component so must be passed as a prop rather than as a regular hook or normal function */}
      <h1>Most likely country for that name: {FetchWeather({ city })}</h1>
    </div>
  );
}
