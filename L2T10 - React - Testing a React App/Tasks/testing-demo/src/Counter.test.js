import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("increments the count", () => {
  render(<App />);
  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});

// On test reload after the increment test we start at a Count of 0 and then hit -1
test("decrements the count", () => {
  render(<App />);
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(screen.getByText("Count: -1")).toBeInTheDocument();
});
