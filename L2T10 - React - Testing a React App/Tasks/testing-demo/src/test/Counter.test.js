import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("increments the count", () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText("Increment");
  fireEvent.click(incrementButton);
  expect(getByText("Count: 1")).toBeInTheDocument();
});

// After count increased to 1 it should then get decremented

test("decrement the count", () => {
  const { getByText } = render(<App />);
  const decrementButton = getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(getByText("Count: 0")).toBeInTheDocument();
});
