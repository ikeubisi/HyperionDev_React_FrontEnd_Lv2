import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("increments the count", () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText("Increment");
  fireEvent.click(incrementButton);
  expect(getByText("Count: 1")).toBeInTheDocument();
});

// Once it has been increased by 1 decrement to 0
test("decrements the count", () => {
  const { getByText } = render(<App />);
  const decrementButton = getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(getByText("Count: -1")).toBeInTheDocument();
});
