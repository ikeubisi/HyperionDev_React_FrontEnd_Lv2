import { useEffect, useRef, useState } from "react";

export default function CountRender() {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>
        The more active (onChange) you are in the input field the higher the
        count.
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
